FROM node:22

WORKDIR /usr/src/app

# Salin package.json dan install dependencies (cocok dengan better-sqlite3 >= 22)
COPY package*.json ./
RUN npm install

# Salin seluruh kode sumber proyek
COPY . .

# Buat direktori data untuk database SQLite
RUN mkdir -p /usr/src/app/data

EXPOSE 3000

CMD ["node", "app.js"]