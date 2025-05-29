# Use official Node.js image
FROM node:18-alpine

# Set working directory inside container
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the project files
COPY . .

# Generate Prisma client (if using Prisma)
RUN npx prisma generate

# Expose your backend port (e.g., 3000)
EXPOSE 3000

# Start the server
CMD ["npm", "start"]
