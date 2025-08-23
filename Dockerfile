# -----------------------------
# Stage 1: Builder
# -----------------------------
FROM node:24.4 AS builder

WORKDIR /app

# Enable pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copy lockfile and config first (better layer caching)
COPY pnpm-lock.yaml .
COPY package.json .

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy source files
COPY tsconfig.json  nest-cli.json ./
COPY prisma ./prisma
COPY src ./src

# Generate Prisma client
RUN pnpm prisma generate

# Build NestJS app
RUN pnpm build

# -----------------------------
# Stage 2: Runner
# -----------------------------
FROM node:24.4 AS runner

WORKDIR /app

# Enable pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Only install production dependencies
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./

# Copy built app and Prisma schema/client
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma

# Optional: if you use .env
COPY .env .env

# Run migrations then start app
CMD ["sh", "-c", "pnpm prisma migrate deploy && pnpm start:prod"]
