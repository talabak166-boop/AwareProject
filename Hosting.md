# Aware Programming - Server Hosting Guide

This project is built using React (Frontend) and Express (Backend). To host this project on a VPS or dedicated server, follow these steps:

## Prerequisites
- Node.js (v18 or higher)
- PostgreSQL Database
- Git

## 1. Setup Database
- Create a PostgreSQL database.
- Note the connection string: `postgresql://user:password@host:port/database`

## 2. Server Installation
```bash
# Clone the repository
git clone <YOUR_GITHUB_LINK>
cd aware-programming

# Install dependencies
npm install

# Set environment variables
# Create a .env file or export them
export DATABASE_URL="your_postgresql_connection_string"

# Push database schema
npm run db:push
```

## 3. Build & Run
```bash
# Build the project (Vite frontend + Express backend)
npm run build

# Start the server using a process manager like PM2
npm install -g pm2
pm2 start dist/index.cjs --name aware-app
```

## 4. Reverse Proxy (Nginx)
Configure Nginx to point to port `5000` (the default port for this app).

```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```
