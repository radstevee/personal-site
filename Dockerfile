FROM node:lts AS runtime
WORKDIR /app

COPY . .

RUN npm install

ENV HOST=0.0.0.0
ENV PORT=4321

EXPOSE 4321
CMD npm run start -- --host 0.0.0.0
