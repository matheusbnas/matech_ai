# Guia de Implantação do Site Matech.AI

Este guia fornece instruções detalhadas para implantar o site da Matech.AI em diferentes tipos de servidores e serviços de hospedagem.

## Opções de Hospedagem

### 1. Hospedagem Tradicional com VPS (DigitalOcean, AWS, GCP, etc.)

Esta é a opção mais flexível e permite controle total sobre o ambiente.

#### Passos para Implantação:

1. **Configurar servidor**:
   - Provisione um servidor Linux (Ubuntu recomendado)
   - Configure um domínio apontando para o IP do servidor

2. **Instalar dependências**:
   ```bash
   sudo apt update
   sudo apt install -y nginx python3 python3-pip python3-venv mongodb
   ```

3. **Configurar backend**:
   ```bash
   # Criar ambiente virtual
   python3 -m venv /opt/matechai_env
   source /opt/matechai_env/bin/activate
   
   # Copiar arquivos do backend
   mkdir -p /opt/matechai
   cp -r backend/ /opt/matechai/
   
   # Instalar dependências
   pip install -r /opt/matechai/backend/requirements.txt
   pip install gunicorn
   ```

4. **Configurar serviço para o backend**:
   ```bash
   sudo nano /etc/systemd/system/matechai_backend.service
   ```
   
   Conteúdo:
   ```
   [Unit]
   Description=Matech.AI Backend
   After=network.target
   
   [Service]
   User=www-data
   Group=www-data
   WorkingDirectory=/opt/matechai/backend
   Environment="PATH=/opt/matechai_env/bin"
   ExecStart=/opt/matechai_env/bin/gunicorn -w 4 -k uvicorn.workers.UvicornWorker -b 127.0.0.1:8001 server:app
   Restart=always
   
   [Install]
   WantedBy=multi-user.target
   ```

5. **Iniciar o serviço**:
   ```bash
   sudo systemctl enable matechai_backend
   sudo systemctl start matechai_backend
   ```

6. **Configurar frontend**:
   ```bash
   sudo mkdir -p /var/www/matechai
   sudo cp -r frontend/* /var/www/matechai/
   ```

7. **Configurar Nginx**:
   ```bash
   sudo nano /etc/nginx/sites-available/matechai
   ```
   
   Conteúdo:
   ```
   server {
       listen 80;
       server_name seudomain.com www.seudomain.com;
   
       root /var/www/matechai;
       index index.html;
   
       location / {
           try_files $uri $uri/ /index.html;
       }
   
       location /api {
           proxy_pass http://127.0.0.1:8001;
           proxy_set_header Host $host;
           proxy_set_header X-Real-IP $remote_addr;
       }
   }
   ```

8. **Ativar site e reiniciar Nginx**:
   ```bash
   sudo ln -s /etc/nginx/sites-available/matechai /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl restart nginx
   ```

9. **Configurar HTTPS**:
   ```bash
   sudo apt install -y certbot python3-certbot-nginx
   sudo certbot --nginx -d seudomain.com -d www.seudomain.com
   ```

### 2. Hospedagem em PaaS (Heroku, Render, etc.)

Serviços PaaS simplificam a implantação, mas podem ter custos maiores para aplicações que precisam estar sempre disponíveis.

#### Heroku:

1. **Preparar arquivos**:
   - Crie um arquivo `Procfile` no diretório backend:
     ```
     web: uvicorn server:app --host=0.0.0.0 --port=$PORT
     ```

2. **Implantar backend**:
   ```bash
   cd backend
   heroku create matechai-backend
   git init
   git add .
   git commit -m "Initial backend deploy"
   git push heroku master
   ```

3. **Implantar frontend**:
   - Edite o arquivo `.env` para apontar para a URL do backend
   - Use Heroku static buildpack:
     ```bash
     cd frontend
     heroku create matechai-frontend --buildpack https://github.com/heroku/heroku-buildpack-static.git
     ```
   - Crie um arquivo `static.json`:
     ```json
     {
       "root": ".",
       "clean_urls": true,
       "routes": {
         "/api/**": {
           "origin": "https://matechai-backend.herokuapp.com/api/${path}"
         },
         "/**": "index.html"
       }
     }
     ```
   - Implante:
     ```bash
     git init
     git add .
     git commit -m "Initial frontend deploy"
     git push heroku master
     ```

### 3. Hospedagem Compartilhada (cPanel, Hostgator, etc.)

Para servidores compartilhados, você precisará de suporte a Python para o backend.

1. **Backend**:
   - Verifique se o provedor suporta Python (e idealmente FastAPI/WSGI)
   - Use o painel de controle para configurar um ambiente Python
   - Faça upload dos arquivos do backend
   - Configure `.htaccess` para direcionar solicitações para o backend

2. **Frontend**:
   - Faça upload dos arquivos do diretório frontend para o diretório público (public_html)
   - Configure `.htaccess` para redirecionar para index.html:
     ```
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
     ```

### 4. Hospedagem estática + Backend separado

1. **Frontend estático (Netlify, Vercel, GitHub Pages)**:
   - Netlify:
     ```bash
     cd frontend
     npm install -g netlify-cli
     netlify deploy
     ```
   
   - Vercel:
     ```bash
     cd frontend
     npm install -g vercel
     vercel
     ```

2. **Backend em serviço separado**:
   - Implante o backend em um serviço como Heroku, Render ou VPS
   - Configure CORS no backend para permitir solicitações do seu domínio de frontend

## Soluções para problemas comuns

### CORS (Cross-Origin Resource Sharing)

Se o frontend e o backend estiverem em domínios diferentes, você precisará configurar CORS no backend:

```python
# No arquivo server.py
from fastapi.middleware.cors import CORSMiddleware

# Adicione ao início da aplicação
app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://seu-frontend-domain.com"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

### Redirecionamento para SPA (Single Page Application)

Para garantir que todas as rotas funcionem corretamente no frontend, configure o servidor web para redirecionar todas as solicitações para `index.html`:

#### Nginx:
```
location / {
    try_files $uri $uri/ /index.html;
}
```

#### Apache:
```
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

### Conexão com o MongoDB

Ajuste a configuração MongoDB no arquivo `.env` do backend:

```
MONGO_URL="mongodb://user:password@seu-servidor-mongo:27017/matechai"
DB_NAME="matechai_db"
```

## Manutenção

Para atualizações futuras:

1. **Backend**:
   - Substitua os arquivos do backend
   - Reinicie o serviço:
     ```bash
     sudo systemctl restart matechai_backend
     ```

2. **Frontend**:
   - Substitua os arquivos no diretório do frontend
   - Não é necessário reiniciar nada, pois são arquivos estáticos

## Suporte

Se precisar de ajuda adicional, entre em contato com:
- Email: contato@matechai.com
