FROM node:22-alpine
WORKDIR /blaxel/ts

COPY ts/package.json ts/pnpm-lock.yaml /blaxel/ts/
RUN npx pnpm install

COPY ts /blaxel/ts
COPY shared /blaxel/shared

RUN npx pnpm build
ENTRYPOINT ["npx", "pnpm", "start"]
