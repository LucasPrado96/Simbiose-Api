FROM ghcr.io/puppeteer/puppeteer:23

ENV PUPPERTEER_SKIP_CHROMIUM_DOWNLOAD=true \ 
    PUPPERTEER_EXECUTABLE_PATH=/usr/bin/google-chrome-stable



WORKDIR /app


COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

EXPOSE 8080


CMD ["yarn", "start"]

