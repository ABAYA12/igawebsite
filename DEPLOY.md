# Deployment Guide - InsightGrid Analytics

This guide covers deploying your React SPA to various hosting platforms with proper routing support.

## 🚀 Quick Deploy Options

### 1. Netlify (Recommended)
- **File needed**: `_redirects` ✅ (included)
- **Deploy**: Drag & drop your project folder to Netlify
- **Auto-deploy**: Connect your GitHub repo for automatic deployments

### 2. Vercel
- **File needed**: `vercel.json` ✅ (included)  
- **Deploy**: Connect your GitHub repo to Vercel
- **Command**: `vercel --prod`

### 3. Firebase Hosting
- **File needed**: `firebase.json` ✅ (included)
- **Deploy**: 
  ```bash
  npm install -g firebase-tools
  firebase login
  firebase init hosting
  firebase deploy
  ```

### 4. GitHub Pages
- **Files needed**: `404.html` + updated `index.html` ✅ (included)
- **Deploy**: Enable GitHub Pages in repository settings
- **Branch**: Deploy from `main` branch

### 5. Apache Server
- **File needed**: `.htaccess` ✅ (included)
- **Deploy**: Upload files to your web server root

### 6. Nginx Server  
- **File needed**: `nginx.conf` ✅ (included)
- **Deploy**: Configure your Nginx server with the provided config

## 🔧 Local Development

### Start Development Server (SPA-compatible)
```bash
# Using Python (recommended for SPA routing)
python3 server.py 8000

# Or using npm script
npm start
```

### Basic Server (no SPA routing)
```bash
# Basic Python server (404s on refresh)
python3 -m http.server 8000
```

## 📋 Platform-Specific Instructions

### Netlify
1. Create account at netlify.com
2. Drag & drop your project folder
3. The `_redirects` file will handle SPA routing automatically
4. Your site will be live immediately

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in your project directory
3. Follow prompts to deploy
4. The `vercel.json` config handles SPA routing

### Firebase
1. Install Firebase CLI: `npm install -g firebase-tools`
2. Run `firebase login`
3. Run `firebase init hosting`
4. Select your project directory as public folder
5. Configure as single-page app: **Yes**
6. Deploy with `firebase deploy`

### GitHub Pages
1. Push your code to GitHub
2. Go to repository Settings → Pages
3. Select source: Deploy from branch
4. Choose `main` branch and `/ (root)`
5. The `404.html` file handles SPA routing

### Custom Server (Apache/Nginx)
- **Apache**: Upload `.htaccess` file to root directory
- **Nginx**: Update server config with provided `nginx.conf` rules

## 🌐 Domain Configuration

After deployment, you can:
1. **Custom Domain**: Point your domain to the hosting provider
2. **SSL Certificate**: Most platforms provide free SSL
3. **Environment Variables**: Set up production variables if needed

## 🐛 Troubleshooting

### 404 Errors on Refresh
- ✅ **Fixed**: All configurations include SPA routing rules
- The server will serve `index.html` for all routes
- React Router handles client-side navigation

### Missing Files
- Ensure all files are uploaded to your hosting platform
- Check that the configuration file for your platform exists

### Performance
- All configs include caching headers for static assets
- CSS/JS files are cached for optimal performance

## 📊 Production Checklist

- [ ] Choose hosting platform
- [ ] Upload all project files
- [ ] Verify configuration file is present
- [ ] Test all routes (home, about, services, portfolio, blog, contact)
- [ ] Test page refresh on different routes
- [ ] Check mobile responsiveness
- [ ] Verify contact form functionality
- [ ] Test newsletter signup

## 🆘 Support

If you encounter issues:
1. Check the configuration file for your hosting platform
2. Verify all files are uploaded correctly
3. Test routes by refreshing pages directly
4. Check browser console for errors

---

**Note**: The `server.py` file is only for local development. Don't upload it to production hosting platforms.
