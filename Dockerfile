FROM node:14.15.0-stretch AS develop

LABEL org.opencontainers.image.source https://github.com/getsproud/react-app

# Default value; will be overridden by build_args, if passed
ARG NODE_ENV=development

ENV NODE_ENV $NODE_ENV

WORKDIR /app

ADD package.json .
ADD package-lock.json .

RUN npm install

ADD src src/
ADD public public/

ENTRYPOINT [ "npm", "run", "start" ]

FROM develop AS test

ENTRYPOINT [ "npm", "run", "test" ]

FROM develop AS builder

RUN npm run build

FROM nginx:1.19.0 as production

COPY --from=builder /app/build/ /app
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
