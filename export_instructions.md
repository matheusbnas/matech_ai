# Instruções para Extrair e Implantar o Site Matech.AI

Seguindo estas instruções, você poderá extrair todos os arquivos necessários do site da Matech.AI e implantá-lo em seu próprio servidor.

## 1. Extrair os Arquivos

O site completo está disponível como um pacote zip em `/app/export.zip`. Este pacote contém:

- `/frontend/` - Todos os arquivos estáticos do frontend (HTML, CSS, JavaScript)
- `/backend/` - Todos os arquivos do backend (FastAPI, APIs, etc.)
- Documentação detalhada de implantação

### Para extrair:

1. Faça download do arquivo `/app/export.zip`
2. Descompacte-o em seu computador:
   ```bash
   unzip export.zip
   ```

## 2. Estrutura do Site

O site da Matech.AI é uma aplicação full-stack com:

- **Frontend**: Aplicação React com Tailwind CSS
- **Backend**: API FastAPI com endpoints para contato e outros dados
- **Banco de Dados**: MongoDB (configurável)

## 3. Implantação

Consulte os seguintes arquivos no pacote extraído para instruções detalhadas:

- `README.txt` - Visão geral rápida do pacote
- `GUIA_IMPLANTACAO.md` - Guia detalhado de implantação para diferentes servidores

### Opções de Implantação

1. **Servidor VPS** (DigitalOcean, AWS, GCP)
2. **Plataformas PaaS** (Heroku, Render, etc.)
3. **Hospedagem Compartilhada** (cPanel, Hostgator, etc.)
4. **Hospedagem estática + Backend separado** (Netlify/Vercel + backend separado)

## 4. Personalização

Após a implantação, você pode personalizar:

- Textos e conteúdo (editando os arquivos do frontend)
- Imagens (substituindo por suas próprias imagens)
- Cores e estilos (modificando os arquivos CSS)
- Funcionalidades do backend (editando os arquivos Python)

## 5. Suporte

Se precisar de ajuda adicional, consulte:

- A documentação detalhada incluída no pacote
- O código-fonte comentado para entender a estrutura
- Entre em contato com o desenvolvedor original se necessário

---

Boa sorte com sua implantação!
