# Datin App (Frontend)

Next.js 14 frontend application for the Datin platform.

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: CSS Modules
- **Package Manager**: npm

## 📋 Prerequisites

- Node.js 20+
- npm 9+

## 🛠️ Local Development

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

The app will be available at [http://localhost:3000](http://localhost:3000)

### Environment Variables

Create a `.env.local` file:

```env
API_URL=http://localhost:4000
VALIDATION_SERVICE_URL=http://localhost:8000
```

## 🐳 Docker

### Build image

```bash
docker build -t datin-app .
```

### Run container

```bash
docker run -p 3000:3000 \
  -e API_URL=http://datin-api:4000 \
  -e VALIDATION_SERVICE_URL=http://datin-validation-service:8000 \
  datin-app
```

## 🏗️ Build for Production

```bash
npm run build
npm start
```

## 📦 Deployment

This repository is configured with GitHub Actions for automated deployment to AWS ECS Fargate.

### Required GitHub Secrets

- `AWS_ROLE_ARN`: IAM role ARN for OIDC authentication

### Deployment Flow

1. Push to `main` branch
2. GitHub Actions builds Docker image
3. Image is pushed to AWS ECR
4. ECS task definition is updated
5. ECS service is deployed with new image

### Manual Deployment

```bash
# Trigger workflow manually
gh workflow run deploy.yml
```

## 🔍 Health Checks

- **Endpoint**: `/api/health`
- **Docker Health Check**: Runs every 30s
- **Response**: Service health status and dependent service availability

## 📁 Project Structure

```
datin-app/
├── src/
│   └── app/
│       ├── api/
│       │   └── health/
│       │       └── route.ts
│       ├── layout.tsx
│       ├── page.tsx
│       └── globals.css
├── public/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── Dockerfile
├── next.config.js
├── package.json
└── tsconfig.json
```

## 🤝 Contributing

See [CODEOWNERS](./CODEOWNERS) for team ownership information.

## 📄 License

Proprietary - Datin Platform
