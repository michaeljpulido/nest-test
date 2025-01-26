FROM node:22-slim AS base
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

FROM base AS local
CMD ["npm", "run", "start:dev"]

FROM base AS production
RUN npm run build
COPY --from=base /app/dist /app/dist
COPY --from=base /app/node_modules /app/node_modules
CMD ["npm", "run", "start:prod"]
