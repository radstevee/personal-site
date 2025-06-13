FROM oven/bun:1 AS build
WORKDIR /app
COPY . .
RUN bun i
RUN bun run build

FROM nginx:alpine AS runtime
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
