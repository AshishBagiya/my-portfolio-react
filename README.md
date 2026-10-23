# Software Engineer Portfolio | Full-Stack & Cloud Architecture

A modern, responsive, and performance-optimized personal portfolio web application. Designed to showcase production-grade projects, scalable backend architectures, cloud deployments, and direct client contact channels.

---

## 🛠️ Tech Stack

### **Frontend & UI**
- **React 18** (TypeScript)
- **Vite** (Build Tool & Dev Server)
- **Tailwind CSS** (Utility-first styling)
- **Lucide React** (Clean, lightweight icon system)

### **Backend & Core Engineering Competencies**
- **Core Languages & Runtimes:** Node.js, TypeScript, JavaScript
- **Frameworks:** NestJS, Express.js
- **Databases:** MongoDB (Mongoose), MySQL (TypeORM / Prisma)
- **Caching & Queues:** Redis, BullMQ / AWS SQS
- **Cloud & DevOps:** AWS (EC2, S3, ECS, RDS), Docker, GitHub Actions (CI/CD)
- **Collaboration & Methodologies:** Git/GitHub, Jira, Agile/Scrum, AI-Assisted Engineering

---

## ✨ Features

- **Responsive Design:** Seamless experience across mobile, tablet, and ultra-wide displays.
- **Architectural Showcase:** Case studies highlighting database design, performance optimizations, and cloud deployments.
- **Interactive Contact Hub:** One-click clipboard copy for email/phone, direct links to LinkedIn, GitHub, and messaging channels.
- **Lightweight & High Performance:** Fast initial paint, zero unnecessary bundle bloat, and optimized assets.

---

## 📁 Project Structure

```text
portfolio-website/
├── public/                 # Static assets (logos, favicon, resume PDF)
├── src/
│   ├── assets/             # Brand logos, icons, diagrams
│   ├── components/         # Reusable modular UI components
│   │   ├── common/         # Buttons, badges, modal dialogs
│   │   ├── contact/        # Contact cards, copy actions, direct links
│   │   ├── experience/     # Career timeline, client engagements
│   │   ├── hero/           # Main headline & value proposition
│   │   └── projects/       # Architecture breakdowns, demo links
│   ├── data/               # Config-driven content (skills, links, experience)
│   ├── types/              # TypeScript definitions & interfaces
│   ├── App.tsx             # Root application view
│   ├── index.css           # Tailwind base directives
│   └── main.tsx            # Entry script
├── .gitignore
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed locally:
- [Node.js](https://nodejs.org/) (`v18.x` or `v20.x` recommended)
- [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/portfolio-website.git
   cd portfolio-website
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173`.

---

## 📦 Build & Deployment

### Production Build

Compile and bundle production-ready assets:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

### Deployment Options

- **Vercel / Netlify:** Connect your GitHub repository for automated deployments on each push to `main`.
- **AWS S3 + CloudFront:** Build the static assets (`dist/`) and deploy to an S3 bucket configured with an AWS CloudFront distribution for edge caching and SSL.
- **Docker:**
  ```dockerfile
  FROM node:20-alpine AS build
  WORKDIR /app
  COPY package*.json ./
  RUN npm ci
  COPY . .
  RUN npm run build

  FROM nginx:alpine
  COPY --from=build /app/dist /usr/share/nginx/html
  EXPOSE 80
  CMD ["nginx", "-g", "daemon off;"]
  ```

---

## 📬 Contact & Connect

- **Portfolio:** [yourdomain.com](https://yourdomain.com)
- **LinkedIn:** [linkedin.com/in/yourprofile](https://linkedin.com/in/yourprofile)
- **GitHub:** [github.com/yourhandle](https://github.com/yourhandle)
- **Email:** [contact@yourdomain.com](mailto:contact@yourdomain.com)

---