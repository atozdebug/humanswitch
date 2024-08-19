
# Stage 1: Build the React app
FROM node:20 as build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json ./

COPY ./

# Install dependencies
# RUN npm install yarn
RUN yarn install

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build

# EXPOSE 3000

# CMD ["npm", "run","preview"]

# Stage 2: Serve the React app using nginx
# FROM nginx:alpine

# Copy custom nginx configuration if you have one (optional)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the build output to the nginx html directory
# vCOPY --from=build /app/dist /usr/share/nginx/html


# Expose port 80
EXPOSE 5173

# Start nginx
# CMD ["nginx", "-g", "daemon off;"]
CMD ["npm","run","dev"]
