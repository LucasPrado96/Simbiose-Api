FROM ghcr.io/pupperteer/pupperteer:23

ENV PUPPERTEER_SKIP_CHROMIUM_DOWNLOAD=true \ 
    PUPPERTEER_EXECUTABLE_PATH=/usr/bin/google-chrome-stable

RUN apt-get update && apt-get install -y \
    chromium \
    fonts-liberation \
    libappindicator3-1 \
    libasound2 \
    libatk-bridge2.0-0 \
    libatk1.0-0 \
    libcups2 \
    libdbus-1-3 \
    libgdk-pixbuf2.0-0 \
    libnspr4 \
    libnss3 \
    libxcomposite1 \
    libxrandr2 \
    libxss1 \
    wget \
    --no-install-recommends && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*


    WORKDIR /app


    COPY package.json yarn.lock ./

    RUN yarn install --frozen-lockfile

    EXPOSE 8080


    CMD ["yarn", "start"]

