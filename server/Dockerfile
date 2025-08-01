FROM node:18

# Create app dir
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy code
COPY . .

# Run with ts-node
CMD ["npx", "ts-node", "src/index.ts"]

EXPOSE 8080


