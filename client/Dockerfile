# --- Stage 1: Build Angular app using Node 22 ---
FROM node:22.12.0 AS build
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy application source code
COPY . .

# Build Angular app with specified configuration
ARG BUILD_CONFIGURATION=production
RUN npm run build -- --configuration $BUILD_CONFIGURATION

# --- Stage 2: Serve Angular app using Nginx ---
FROM nginx:stable-alpine AS final

# Remove default Nginx static files (optional)
RUN rm -rf /usr/share/nginx/html/*

# Copy built Angular app from previous stage
COPY --from=build /app/dist/client/browser /usr/share/nginx/html

# Run Nginx in foreground
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]