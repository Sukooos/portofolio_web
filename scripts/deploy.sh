#!/bin/bash

# Production deployment script
echo "🚀 Deploying Portfolio to Production..."

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo "❌ Docker is not installed. Please install Docker."
    exit 1
fi

# Check if Docker Compose is installed
if ! command -v docker-compose &> /dev/null; then
    echo "❌ Docker Compose is not installed. Please install Docker Compose."
    exit 1
fi

# Build and start production services
echo "🏗️ Building production containers..."
docker-compose --profile prod build

echo "🚀 Starting production services..."
docker-compose --profile prod up -d

# Wait for services to be ready
echo "⏳ Waiting for services to start..."
sleep 10

# Health check
echo "🔍 Performing health check..."
if curl -f http://localhost:3000 > /dev/null 2>&1; then
    echo "✅ Deployment successful! Portfolio is running at http://localhost:3000"
else
    echo "❌ Health check failed. Please check the logs:"
    echo "   docker-compose logs portfolio-prod"
    exit 1
fi

echo "📊 View logs: docker-compose logs -f"
echo "🛑 Stop services: docker-compose --profile prod down" 