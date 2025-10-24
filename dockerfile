# Use lightweight Node image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the code
COPY . .

# Expose port 5523 for Docker container
EXPOSE 5523

# Start Vite dev server on port 5523
CMD ["npm", "run", "dev", "--", "--host", "--port", "5523"]
