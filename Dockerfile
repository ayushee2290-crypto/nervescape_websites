# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files (include lockfile if present to leverage cache)
COPY package.json package-lock.json* ./

# Install dependencies: prefer reproducible `npm ci` if lockfile exists, otherwise fallback to `npm install`
RUN if [ -f package-lock.json ]; then \
			npm ci --prefer-offline --no-audit --progress=false; \
		else \
			npm install --prefer-offline --no-audit --progress=false; \
		fi

# Copy source files
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

# Create non-root user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy built application
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Set permissions
USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
