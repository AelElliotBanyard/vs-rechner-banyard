FROM node:18-bullseye as files
WORKDIR /app
RUN git clone https://github.com/AelElliotBanyard/vs-rechner-banyard .
WORKDIR /app/CODE
RUN npm ci
RUN npm run build

FROM node:18-bullseye
WORKDIR /app
COPY --from=files /app/CODE .
EXPOSE 3000
ENTRYPOINT [ "npm", "run", "start" ]