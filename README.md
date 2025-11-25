# DevOps Governance Lab

Full-stack application demonstrating GitHub governance, Docker containerization, CI/CD with GitHub Actions, and Kubernetes deployment.

## Team Roles
- **tomwakhungu** (Team Lead/DevOps) - Infrastructure & final approvals
- **wakhungunalianya** (Backend Developer) - Backend implementation
- **tomnalianya** (Frontend Developer) - Frontend implementation

## Tech Stack
- **Frontend:** React + Nginx
- **Backend:** Node.js + Express
- **Containerization:** Docker
- **CI/CD:** GitHub Actions
- **Orchestration:** Kubernetes
- **Registry:** Docker Hub

## Branching Model
- `develop` → Feature development
- `staging` → Pre-production testing
- `main` → Production-ready code

## Local Development

### Using Docker Compose
```bash
docker-compose up --build
```

### Backend only
```bash
cd backend
npm install
npm start
```

### Frontend only
```bash
cd frontend
npm install
npm start
```

## CI/CD Pipeline

1. Push code to branch (develop/staging/main)
2. GitHub Actions automatically builds Docker images
3. Images pushed to Docker Hub with branch tags
4. Deploy to Kubernetes cluster

## Kubernetes Deployment
```bash
# Apply all deployments
kubectl apply -f k8s/

# Check status
kubectl get pods
kubectl get services

# Access application
kubectl get service frontend-service
```

## Project Structure
```
devops-governance-lab/
├── backend/           # Express API
├── frontend/          # React app
├── k8s/              # Kubernetes manifests
├── .github/
│   └── workflows/    # CI/CD pipelines
└── docker-compose.yml # Local development
```
```

---

**You should now have:**
- ✅ `.github/CODEOWNERS`
- ✅ `.gitignore`
- ✅ `docker-compose.yml`
- ✅ Updated `README.md`

**Your complete project structure:**
```
devops-governance-lab/
├── backend/
│   ├── server.js
│   ├── package.json
│   ├── Dockerfile
│   └── .dockerignore
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── index.js
│   │   ├── index.css
│   │   ├── App.js
│   │   └── App.css
│   ├── package.json
│   ├── Dockerfile
│   ├── nginx.conf
│   └── .dockerignore
├── k8s/
│   ├── backend-deployment.yaml
│   └── frontend-deployment.yaml
├── .github/
│   ├── workflows/
│   │   ├── backend-ci-cd.yml
│   │   ├── frontend-ci-cd.yml
│   │   └── branch-protect.yml
│   └── CODEOWNERS
├── .gitignore
├── docker-compose.yml
└── README.md