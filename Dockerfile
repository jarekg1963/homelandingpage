### STAGE 1: Build ###
FROM node:slim as node
WORKDIR /app
COPY . .
RUN npm install
COPY . .
RUN npm run build --prod
### STAGE 2: Run ###

FROM nginx:alpine
 COPY --from=node  /app/dist/test1 /usr/share/nginx/html
