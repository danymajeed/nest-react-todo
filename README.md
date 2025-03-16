# NestJS React Todo App

A simple Todo application with NestJS backend, MongoDB database, and React frontend that syncs tasks across devices.

## Features

- ✅ Add new tasks
- ✅ Mark tasks as completed
- ✅ Delete tasks
- ✅ Tasks are stored in MongoDB
- ✅ Tasks sync across devices when accessed from different computers

## Tech Stack

- **Backend**: NestJS with MongoDB
- **Frontend**: React with TypeScript
- **Containerization**: Docker and Docker Compose

## Getting Started

### Prerequisites

- [Docker](https://www.docker.com/get-started) and [Docker Compose](https://docs.docker.com/compose/install/) installed on your system
- Git installed (to clone the repository)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd nestjs-react-todo-app
   ```

### Running the Application

1. Start all services using Docker Compose:
   ```bash
   docker-compose up
   ```

   This command will:
   - Build the backend and frontend images (first time only)
   - Start the MongoDB database
   - Start the NestJS backend server on port 3000
   - Start the React frontend on port 5173

2. To run the application in detached mode (background):
   ```bash
   docker-compose up -d
   ```

3. Access the application:
   - Frontend: [http://localhost:5173](http://localhost:5173)
   - Backend API: [http://localhost:3000](http://localhost:3000)

### Managing the Application

- View logs for all services:
  ```bash
  docker-compose logs -f
  ```

- View logs for a specific service:
  ```bash
  docker-compose logs -f [service-name]  # e.g., backend, frontend, mongodb
  ```

- Stop the application:
  ```bash
  docker-compose down
  ```

- Rebuild and restart services after making changes:
  ```bash
  docker-compose up --build
  ```

- Stop and remove containers, networks, and volumes:
  ```bash
  docker-compose down -v
  ```

## Development

The Docker Compose setup includes volume mounts for both frontend and backend code, enabling hot-reloading during development:

- Frontend code changes will automatically refresh the browser
- Backend code changes will automatically restart the NestJS server

## Project Structure

- `/backend` - NestJS application
- `/frontend` - React application
- `docker-compose.yml` - Docker Compose configuration

## API Endpoints

- `GET /api/todos` - Get all todos
- `POST /api/todos` - Create a new todo
- `PATCH /api/todos/:id` - Update a todo
- `DELETE /api/todos/:id` - Delete a todo

## Troubleshooting

- If you encounter port conflicts, modify the port mappings in the `docker-compose.yml` file
- For MongoDB connection issues, ensure the MongoDB container is running with `docker-compose ps`
