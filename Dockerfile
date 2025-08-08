# ===== STAGE 1: Build the SvelteKit app =====
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci

# Copy all source files
COPY . .

# Build the app for production
RUN npm run build

# ===== STAGE 2: Run the built app =====
FROM node:20-alpine AS runner

WORKDIR /app

# Copy Node Modules
COPY --from=builder /app/node_modules ./node_modules

# Copy Build Files
COPY --from=builder /app/build build/

# Environment variables
ENV NODE_ENV=production
ENV PORT=3000

# Expose the port SvelteKit will listen on
EXPOSE 3000

# Start the SvelteKit app
CMD ["node", "build"]
