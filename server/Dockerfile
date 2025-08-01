# Use Node.js base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the code
COPY . .

# Run with ts-node
CMD ["npx", "ts-node", "src/index.ts"]

# Port (used by Railway)
EXPOSE 8080

