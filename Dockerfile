# * Node v18.0.0 or higher strict required! (Next.js v14)
FROM node:20.11.1-alpine AS base

# * All dependencies
FROM base AS deps
WORKDIR /app
COPY . .
RUN yarn install


# * Build (next build)
FROM base as build
WORKDIR /app
COPY . . 
COPY --from=deps /app/node_modules ./node_modules
ARG NEXT_PUBLIC_URL
ENV NEXT_PUBLIC_URL=$NEXT_PUBLIC_URL
RUN yarn build


# *  Prod deps (required for optimized production build)
FROM base AS prodDeps
WORKDIR /app
COPY package.json package.json
RUN yarn install --prod


# * Main runner and public files copy
FROM base as runner
WORKDIR /app
COPY --from=build /app/.next/ ./.next
COPY --from=prodDeps /app/node_modules ./node_modules
COPY package.json package.json
RUN yarn add sharp -g
COPY /public ./public
COPY next.config.mjs next.config.mjs
CMD [ "yarn", "start:prod" ]