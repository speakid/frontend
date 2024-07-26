FROM node:slim as builder

COPY . .

RUN npm install 
RUN npm run build

FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /build/ /usr/share/nginx/html

ENV TZ="Europe/Moscow"
