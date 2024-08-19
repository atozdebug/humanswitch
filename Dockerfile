# Stage 1: Build the React app
FROM node:20 as build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json (for npm)
COPY package.json package-lock.json ./

# Install dependencies using npm
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port 5173 (development port)
EXPOSE 5173

# Command to run the React app in development mode
CMD ["npm", "run", "dev"]

