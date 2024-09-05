FROM node:slim as builder

ARG SENTRY_AUTH_TOKEN_ARG
ENV SENTRY_AUTH_TOKEN=SENTRY_AUTH_TOKEN_ARG

COPY . .

RUN npm install 
RUN npm run build

FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /build/ /usr/share/nginx/html

ENV TZ="Europe/Moscow"
