# Rigby
This lines contains everything needed to get a Next.js development and production environment up and running with Docker Compose.

### Requirements
Your docker version must be greater than `24`.

### Environment variables
Copy `.env.sample` file and replace it to your project with name `.env`.

## Development
First, run the development server:

```bash
# Create a network, which allows containers to communicate
# with each other, by using their container name as a hostname
docker network create rigby

# Build dev
docker compose -f docker-compose.dev.yml build

# Up dev
docker compose -f docker-compose.dev.yml up
```

Open [http://localhost:8877](http://localhost:8877) with your browser to see the result.

## Production
Multistage builds are highly recommended in production. Combined with the Next [Output Standalone](https://nextjs.org/docs/advanced-features/output-file-tracing#automatically-copying-traced-files) feature, only `node_modules` files required for production are copied into the final Docker image.

First, run the production server (Final image approximately 110 MB).

```bash
# Create a network, which allows containers to communicate
# with each other, by using their container name as a hostname
docker network create rigby

# Build prod
docker compose -f docker-compose.prod.yml build

# Up prod in detached mode
docker compose -f docker-compose.prod.yml up -d
```

Alternatively, run the production server without multistage builds (Final image approximately 1 GB).

```bash
# Create a network, which allows containers to communicate
# with each other, by using their container name as a hostname
docker network create rigby

# Build prod without multistage
docker compose -f docker-compose.prod-without-multistage.yml build

# Up prod without multistage in detached mode
docker compose -f docker-compose.prod-without-multistage.yml up -d
```

Open [http://localhost:8877](http://localhost:8877).

## Useful commands
```bash
# Stop all running containers
docker kill $(docker ps -aq) && docker rm $(docker ps -aq)

# Free space
docker system prune -af --volumes
```
