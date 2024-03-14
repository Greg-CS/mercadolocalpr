# Use an official Node.js runtime as the base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY . .

# Install the Node.js dependencies
RUN npm install --production

# Set the command to run when the container starts
CMD ["node", "src/index.js"]

EXPOSE 3000
