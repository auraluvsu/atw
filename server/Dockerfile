# Use Node LTS
FROM node:18

# Create app directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy source
COPY . .

# Build if you're using tsc (optional)
# RUN npm run build

# Run with ts-node (you can change this to node dist/index.js if compiled)
CMD ["npx", "ts-node", "src/index.ts"]

# Expose port
EXPOSE 8080

