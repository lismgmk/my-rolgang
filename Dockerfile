FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Next.js собирает анонимную телеметрию
ENV NEXT_TELEMETRY_DISABLED 1

# Передаем переменную при билде
ARG NEXT_PUBLIC_DEPLOY_HOST
ENV NEXT_PUBLIC_DEPLOY_HOST=${NEXT_PUBLIC_DEPLOY_HOST}

RUN npm run build

# Production image
FROM base AS production
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_PUBLIC_YANDEX_METRICA_ID "99846466"
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

USER nextjs

CMD ["node", "server.js"]
