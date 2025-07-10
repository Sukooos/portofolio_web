# 🔧 Troubleshooting Guide

## Common Issues and Solutions

### 1. Hydration Errors

**Problem**: "Hydration failed because the server rendered HTML didn't match the client"

**Causes**:
- Theme provider rendering different content on server vs client
- Date/time formatting differences
- Browser-specific features used during SSR
- Dynamic content that changes between server and client

**Solutions**:

#### Quick Fix:
```bash
# Clear cache and restart
npm run clean
npm install
npm run dev
```

#### Code Fixes:

1. **Theme Provider Issues**:
   - Components that use `useTheme()` are wrapped with `ClientOnly`
   - Theme provider uses `suppressHydrationWarning`
   - Default theme set to "system" instead of hardcoded value

2. **Component-Level Fixes**:
   ```tsx
   // Use mounted state for client-only features
   const [mounted, setMounted] = useState(false);
   
   useEffect(() => {
     setMounted(true);
   }, []);

   if (!mounted) {
     return <div>Loading...</div>;
   }
   ```

3. **Layout-Level Fixes**:
   ```tsx
   // Add suppressHydrationWarning to problematic elements
   <body className={className} suppressHydrationWarning>
     <ThemeProvider>
       {children}
     </ThemeProvider>
   </body>
   ```

### 2. Build Errors

**Problem**: TypeScript or ESLint errors during build

**Solutions**:
```bash
# Fix linting issues
npm run lint:fix

# Check types
npm run type-check

# Clean build
npm run clean
npm run build
```

### 3. Docker Issues

**Problem**: Container fails to start or build

**Solutions**:

1. **Build Issues**:
   ```bash
   # Clean Docker cache
   docker system prune -a
   
   # Rebuild from scratch
   docker-compose --profile dev build --no-cache
   ```

2. **Port Conflicts**:
   ```bash
   # Check what's using port 3000
   netstat -ano | findstr :3000
   
   # Kill process (Windows)
   taskkill /f /pid <PID>
   ```

3. **Permission Issues (Linux/Mac)**:
   ```bash
   # Fix file permissions
   sudo chown -R $USER:$USER .
   chmod +x scripts/*.sh
   ```

### 4. Performance Issues

**Problem**: Slow loading or poor Lighthouse scores

**Solutions**:

1. **Image Optimization**:
   - Use Next.js Image component
   - Convert images to WebP/AVIF
   - Implement lazy loading

2. **Bundle Analysis**:
   ```bash
   npm run build:analyze
   ```

3. **Caching Issues**:
   ```bash
   # Clear Next.js cache
   rm -rf .next
   npm run build
   ```

### 5. Deployment Issues

**Problem**: Production deployment fails

**Solutions**:

1. **Environment Variables**:
   ```bash
   # Copy and configure environment
   cp env.example .env.local
   # Edit .env.local with your values
   ```

2. **CI/CD Pipeline**:
   - Check GitHub Actions logs
   - Verify all required secrets are set
   - Ensure Docker registry permissions

3. **Memory Issues**:
   ```dockerfile
   # Add to Dockerfile if needed
   ENV NODE_OPTIONS="--max-old-space-size=4096"
   ```

### 6. Development Server Issues

**Problem**: Development server won't start

**Solutions**:

1. **Node Version**:
   ```bash
   # Check Node version (should be 18+)
   node --version
   
   # Update if needed
   nvm use 18
   ```

2. **Port Issues**:
   ```bash
   # Use different port
   npm run dev -- -p 3001
   ```

3. **Dependencies**:
   ```bash
   # Reinstall dependencies
   rm -rf node_modules package-lock.json
   npm install
   ```

### 7. Browser Console Errors

**Problem**: JavaScript errors in browser console

**Solutions**:

1. **Hard Refresh**:
   - Windows/Linux: `Ctrl + F5`
   - Mac: `Cmd + Shift + R`

2. **Clear Browser Cache**:
   - Open DevTools
   - Right-click refresh button
   - Select "Empty Cache and Hard Reload"

3. **Check Network Tab**:
   - Look for failed resource loads
   - Check for 404 errors on assets

## Debugging Tips

### 1. Enable Verbose Logging
```bash
# Development with detailed logs
DEBUG=* npm run dev
```

### 2. Check Health Status
```bash
# Test if server is responding
curl -f http://localhost:3000/api/health || echo "Health check failed"
```

### 3. Docker Logs
```bash
# View container logs
docker-compose logs -f portfolio-dev

# Check specific service
docker-compose logs portfolio-prod
```

### 4. Performance Monitoring
```bash
# Bundle size analysis
npm run build:analyze

# Lighthouse audit
npx lighthouse http://localhost:3000 --view
```

## Getting Help

If you're still experiencing issues:

1. **Check the logs**:
   - Browser console
   - Terminal output
   - Docker logs

2. **Search for similar issues**:
   - Next.js documentation
   - GitHub issues
   - Stack Overflow

3. **Create minimal reproduction**:
   - Isolate the problematic component
   - Test with fresh installation

4. **Contact support**:
   - Include error messages
   - Provide reproduction steps
   - Share environment details

## Preventive Measures

1. **Regular Updates**:
   ```bash
   # Check for outdated packages
   npm outdated
   
   # Update dependencies
   npm update
   ```

2. **Code Quality**:
   ```bash
   # Run checks before commit
   npm run lint
   npm run type-check
   npm run build
   ```

3. **Testing**:
   ```bash
   # Test different environments
   npm run docker:dev
   npm run docker:prod
   ```

---

**Need more help?** Check the main [README.md](./README.md) for setup instructions and documentation. 