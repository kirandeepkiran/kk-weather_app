# Use an official Nginx image as the base
FROM nginx:alpine

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy static files (HTML) to Nginx's default directory
COPY . /usr/share/nginx/html
