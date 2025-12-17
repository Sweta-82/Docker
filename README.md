# React App Dockerized with Vite

This project demonstrates how to run a React application inside a Docker container using Vite.  
The goal is to eliminate local environment dependency issues and ensure the application runs consistently on any system that has Docker installed.

---

## Tech Stack

- React (Vite)
- TypeScript
- Docker
- Node.js (inside container)
- Git & GitHub

---

## Why Docker?

- No need to install Node.js or dependencies manually
- Same behavior across all systems
- Easy setup and execution using a single command
- Portable and reproducible development environment

---

## Project Structure
DockerProject/
├── Dockerfile
├── .dockerignore
├── package.json
├── package-lock.json
├── vite.config.ts
├── index.html
├── src/
│ ├── App.tsx
│ ├── main.tsx
│ └── styles
└── public/

---

## Dockerfile Overview

The Dockerfile:
- Uses a lightweight Node Alpine image
- Installs dependencies inside the container
- Runs the React app using Vite
- Exposes port `5173`

---

## How to Run This Project Using Docker

### 1. Clone the repository
```bash
git clone https://github.com/Sweta-82/Docker.git
cd DockerProject

docker build -t dockerproject .
docker run -p 5173:5173 dockerproject
http://localhost:5173


### Important Notes
node_modules are NOT pushed to GitHub
Dependencies are installed automatically inside the Docker container
No local Node or npm setup is required to run the app using Docker

### Docker Image Info
dockerproject:latest

### Git Workflow Used
- main branch for stable code
-Feature branch created and merged into main
-Changes pushed to GitHub using standard Git workflow