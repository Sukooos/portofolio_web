# 🚀 Backend Developer Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Showcasing backend development skills, projects, and experience with stunning animations and optimal performance.

![Portfolio Preview](https://img.shields.io/badge/Status-Production%20Ready-green?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-15.3.5-blue?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.0-blue?style=for-the-badge&logo=tailwindcss)

## ✨ Features

### 🎨 Modern Design
- **Responsive Layout**: Mobile-first design that looks great on all devices
- **Dark/Light Mode**: Toggle between themes with smooth transitions
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Modern UI Components**: Clean, professional design with gradient accents

### 🔧 Technical Excellence
- **Next.js 15**: Latest version with App Router for optimal performance
- **TypeScript**: Full type safety and better development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **SEO Optimized**: Meta tags, sitemap, robots.txt, and structured data
- **Performance Optimized**: Lighthouse score optimization, image optimization

### 📱 Sections
- **Hero Section**: Eye-catching introduction with animated elements
- **About**: Professional background and expertise highlights
- **Skills**: Comprehensive technical skills with animated progress bars
- **Projects**: Portfolio showcase with detailed project information
- **Contact**: Contact form and social media links

### 🚀 Development & Deployment
- **Docker Support**: Multi-stage builds for development and production
- **CI/CD Pipeline**: GitHub Actions for automated testing and deployment
- **Nginx Configuration**: Production-ready reverse proxy setup
- **Security Headers**: Comprehensive security configuration

## 🛠 Tech Stack

### Frontend
- **Framework**: Next.js 15.3.5
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Themes**: next-themes

### DevOps & Deployment
- **Containerization**: Docker & Docker Compose
- **Web Server**: Nginx (production)
- **CI/CD**: GitHub Actions
- **Container Registry**: GitHub Container Registry

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm
- Docker and Docker Compose (for containerized deployment)

### Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Docker Development

```bash
# Run with Docker Compose (development)
docker-compose --profile dev up --build

# Run in background
docker-compose --profile dev up -d --build
```

## 🏗 Production Deployment

### Docker Production Setup

1. **Build and run production containers**
   ```bash
   # Build and start production services
   docker-compose --profile prod up -d --build
   
   # View logs
   docker-compose logs -f
   ```

2. **With Nginx reverse proxy**
   ```bash
   # Start with Nginx
   docker-compose --profile prod up -d --build
   ```

### Manual Production Build

```bash
# Build the application
npm run build

# Start production server
npm start
```

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for local development:

```env
# Add your environment variables here
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=your-ga-id
```

### Customization

1. **Personal Information**: Update content in components
2. **Colors & Theme**: Modify Tailwind configuration
3. **SEO**: Update metadata in `layout.tsx`
4. **Projects**: Add your projects in `components/projects.tsx`
5. **Skills**: Update skills in `components/skills.tsx`

## 📁 Project Structure

```
├── .github/workflows/     # GitHub Actions CI/CD
├── src/
│   ├── app/              # Next.js App Router
│   ├── components/       # React components
│   └── styles/          # Global styles
├── public/              # Static assets
├── docker-compose.yml   # Docker Compose configuration
├── Dockerfile          # Production Docker image
├── Dockerfile.dev      # Development Docker image
├── nginx.conf          # Nginx configuration
└── next.config.ts      # Next.js configuration
```

## 🚀 CI/CD Pipeline

The project includes a comprehensive GitHub Actions workflow that:

1. **Tests & Linting**: Runs ESLint and TypeScript checks
2. **Security Audit**: Scans for vulnerabilities
3. **Build**: Creates optimized production build
4. **Docker**: Builds and pushes container images
5. **Deploy**: Automated deployment to production
6. **Performance**: Lighthouse audits (optional)
7. **Notifications**: Slack/Discord notifications

### Required GitHub Secrets

```bash
# For deployment
DEPLOY_HOST=your-server-ip
DEPLOY_USER=your-username
DEPLOY_KEY=your-ssh-private-key

# For notifications (optional)
SLACK_WEBHOOK=your-slack-webhook-url
```

## ⚡ Performance

### Lighthouse Scores
- **Performance**: 95+
- **Accessibility**: 100
- **Best Practices**: 100
- **SEO**: 100

### Optimizations
- Next.js automatic code splitting
- Image optimization with WebP/AVIF
- Font optimization
- Gzip compression
- Static asset caching
- Lazy loading

## 🔒 Security

### Security Headers
- X-Frame-Options
- X-Content-Type-Options
- X-XSS-Protection
- Referrer-Policy
- Content-Security-Policy

### Best Practices
- Rate limiting (Nginx)
- HTTPS enforcement
- Security audits in CI/CD
- Dependency vulnerability scanning

## 📈 Analytics & Monitoring

### Built-in Support
- Google Analytics (ready to configure)
- Lighthouse CI integration
- Performance monitoring
- Error tracking setup

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Muhammad Raja Zahran** - Backend Developer

- 💼 [LinkedIn](https://linkedin.com/in/your-profile)
- 🐙 [GitHub](https://github.com/your-username)
- 📧 [Email](mailto:hello@backenddev.com)
- 🌐 [Portfolio](https://your-portfolio-domain.com)

---

<div align="center">
  <p>Built with ❤️ and lots of ☕</p>
  <p>
    <a href="#-backend-developer-portfolio">Back to top</a>
  </p>
</div>
