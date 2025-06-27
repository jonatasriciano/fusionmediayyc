# Etapa de build
FROM node:20 AS build

WORKDIR /app

COPY package*.json ./
COPY tsconfig.json ./
RUN npm install

COPY . .

RUN npm run build

# Etapa de produção
FROM node:20-alpine

WORKDIR /app

COPY --from=build /app/package*.json ./
COPY --from=build /app/dist ./dist
COPY --from=build /app/public ./public

RUN npm install --omit=dev

EXPOSE 8080

CMD ["node", "dist/index.js"]