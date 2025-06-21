# Use a minimal Node.js base image
FROM node:18-alpine

# Create app directory
WORKDIR /app

# Copy dependency files
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build the Next.js app
RUN npm run build

# Expose the internal app port (for documentation)
EXPOSE 5555

# Start Next.js app in production mode (listen on port 5555)
CMD ["npm", "start", "--", "-p", "5555"]
