# Stage 1: Build the React app
FROM node:20 as build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build

# Stage 2: Run the React app
FROM node:20

# Set working directory
WORKDIR /app

# Copy only the build output from the previous stage
COPY --from=build /app/dist ./dist

# Install serve globally to serve the app
RUN npm install -g serve

# Expose port 3000 to the outside world
EXPOSE 5173

# Command to serve the app
CMD ["serve", "-s", "dist"]

