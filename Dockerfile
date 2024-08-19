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

# Build the React app (ignore type checking during build)
RUN npm run build

# Stage 2: Serve the React app
FROM node:20

# Set working directory
WORKDIR /app

# Copy only the build output from the previous stage
COPY --from=build /app/build ./build

# Install serve globally to serve the app
RUN npm install -g serve

# Expose port 5173 to the outside world
EXPOSE 5173

# Command to serve the app
CMD ["serve", "-s", "build"]

