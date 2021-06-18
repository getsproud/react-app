FROM node:14.15.0-stretch as develop

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

FROM develop as test

ENTRYPOINT [ "npm", "run", "test" ]

FROM develop as builder

RUN npm run build

FROM nginx:1.19.0 as production

COPY --from=builder build/ /usr/share/nginx/html
