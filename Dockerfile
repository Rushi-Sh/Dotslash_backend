# Stage 1: Build
FROM node:20-slim AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (if available) separately for caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Stage 2: Production
FROM node:20-slim

# Set the working directory
WORKDIR /app

# Copy only the necessary files from the build stage
COPY --from=build /app .

# Optionally, install only production dependencies
RUN npm prune --production

# Expose the port
EXPOSE 5001

# Command to run the application
# CMD ["node", "index.js"]
CMD ["npm", "run", "dev"]
