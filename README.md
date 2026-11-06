# Casawi Running — Urban Streetwear Storefront

Casablanca urban streetwear & athletic drops storefront with trilingual support (Français, العربية, English), Moroccan Dirham (MAD) pricing, interactive cart, Moroccan courier checkout, and automated WhatsApp order dispatch to **+212 694-940173** and TikTok **@casawirunning1**.

---

## ⚡ 1-Click Deployment on Vercel (Recommended)

This project is pre-configured with a native `vercel.json` and optimized Vite bundling. Deploying on Vercel takes less than **30 seconds**:

### Step 1: Push to GitHub
```bash
git add .
git commit -m "Deploy Casawi Running"
git push origin main
```

### Step 2: Import into Vercel
1. Log in to [Vercel](https://vercel.com) (sign in with your GitHub account).
2. Click **"Add New..."** → **"Project"**.
3. Select your GitHub repository from the list and click **"Import"**.

### Step 3: Deploy
Vercel automatically detects everything:
- **Framework Preset**: `Vite`
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

Click **"Deploy"**. Your storefront will be live immediately at `https://your-project.vercel.app` with free SSL, ultra-fast CDN, and instant updates on every GitHub push!

---

## 📦 What We Configured for Vercel

- **`vercel.json`**: Pre-configured SPA rewrite rules to ensure clean page refreshes without 404 errors.
- **Bundled Image Assets**: All streetwear photos are bundled into `dist/assets/` via ESM module imports, guaranteeing zero broken images in production.
- **Vite Config (`vite.config.ts`)**: Base path set to `/` and ES modules configured for seamless production builds.
- **Moroccan Checkout & WhatsApp**:
  - Store WhatsApp: `+212 694-940173`
  - TikTok: `@casawirunning1`
  - Currency: Moroccan Dirhams (MAD / د.م.)
  - Payment: Cash on Delivery (*Paiement à la livraison / الدفع عند الاستلام*)

---

## 💻 Local Development

```bash
# Install dependencies
npm install

# Start development server on port 3000
npm run dev

# Test production build
npm run build
```
