# Use an official Node.js image as the base image
FROM node:16

# Create app directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose port 3035
EXPOSE 3035

# Start the server
CMD ["npm", "start"]