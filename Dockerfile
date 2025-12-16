# Step 1: Use Node image
FROM node:20-alpine

# Step 2: Set working directory
WORKDIR /app

# Step 3: Copy package files
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy all project files
COPY . .

# Step 6: Expose Vite port
EXPOSE 5173

# Step 7: Run React app
CMD ["npm", "run", "dev", "--", "--host"]
