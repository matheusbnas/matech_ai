# Matech.AI Website Deployment

Este repositório contém o código completo do site da Matech.AI, pronto para implantação.

## Estrutura do Projeto

```
/
├── frontend/         # Frontend React compilado (pronto para produção)
├── backend/          # Backend FastAPI 
│   ├── server.py     # Servidor principal
│   ├── requirements.txt  # Dependências Python
│   └── .env          # Variáveis de ambiente
```

## Requisitos

- Python 3.8+
- Node.js 14+ (apenas para desenvolvimento)
- MongoDB

## Implantação em um Servidor

### 1. Backend (FastAPI)

1. Instale as dependências do Python:
   ```
   cd backend
   pip install -r requirements.txt
   ```

2. Configure as variáveis de ambiente:
   - Edite o arquivo `.env` conforme necessário

3. Inicie o servidor:
   ```
   uvicorn server:app --host 0.0.0.0 --port 8001
   ```

   Para produção, é recomendado usar Gunicorn:
   ```
   pip install gunicorn
   gunicorn -w 4 -k uvicorn.workers.UvicornWorker server:app
   ```

### 2. Frontend (React)

O frontend já está compilado e pronto para ser servido por qualquer servidor web estático.

#### Usando Nginx (Recomendado para Produção)

1. Instale o Nginx:
   ```
   sudo apt update
   sudo apt install nginx
   ```

2. Configure o site:
   ```
   sudo nano /etc/nginx/sites-available/matechai
   ```
   
   Adicione a configuração:
   ```
   server {
       listen 80;
       server_name seudomain.com www.seudomain.com;

       location / {
           root /caminho/para/frontend;
           index index.html;
           try_files $uri $uri/ /index.html;
       }

       location /api {
           proxy_pass http://localhost:8001;
           proxy_set_header Host $host;
           proxy_set_header X-Real-IP $remote_addr;
       }
   }
   ```

3. Ative o site:
   ```
   sudo ln -s /etc/nginx/sites-available/matechai /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl restart nginx
   ```

### Configuração para outros servidores

#### Apache

Crie um arquivo .htaccess no diretório frontend:

```
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]

# Proxy para a API
RewriteRule ^api/(.*) http://localhost:8001/api/$1 [P,L]
```

## Manutenção

Para atualizar o site:

1. Atualize os arquivos no servidor
2. Reinicie o backend:
   ```
   sudo systemctl restart matechai_backend.service  # se estiver usando systemd
   ```
3. Não é necessário reiniciar o frontend, apenas substitua os arquivos.

## SSL/HTTPS

Recomenda-se configurar HTTPS usando Let's Encrypt:

```
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d seudomain.com -d www.seudomain.com
```
