# Domain-Based Routing Setup Guide

## 🎯 Overview
Your React app now uses domain-based routing instead of React Router. Each domain will serve a different profile page:

- `ajmal.aurify.global` → Shows Ajmal's profile page
- `noushad.aurify.global` → Shows Noushad's profile page  
- Any other domain (including localhost) → Shows the Home page

## 🧩 How It Works

The `App.tsx` detects the current domain using `window.location.hostname` and renders the appropriate component:

```typescript
function App() {
  const host = window.location.hostname;

  if (host.includes("ajmal.aurify.global")) {
    return <Ajmal />;
  } else if (host.includes("noushad.aurify.global")) {
    return <Noushad />;
  } else {
    return <Home />;
  }
}
```

## 🔧 Testing Locally

To test domain-based routing locally, you can modify your hosts file:

### Windows:
1. Open `C:\Windows\System32\drivers\etc\hosts` as Administrator
2. Add these lines:
```
127.0.0.1 ajmal.aurify.global
127.0.0.1 noushad.aurify.global
```
3. Save the file
4. Run your dev server: `npm run dev`
5. Visit:
   - `http://ajmal.aurify.global:5174` → Should show Ajmal's page
   - `http://noushad.aurify.global:5174` → Should show Noushad's page
   - `http://localhost:5174` → Should show Home page

## 🚀 Firebase Hosting Setup

### 1. Build your app:
```bash
npm run build
```

### 2. Deploy to Firebase Hosting:
```bash
firebase deploy
```

### 3. Configure Custom Domains in Firebase Console:
1. Go to Firebase Console → Hosting
2. Add custom domains:
   - `ajmal.aurify.global`
   - `noushad.aurify.global`
3. Follow Firebase's domain verification process
4. Update your DNS records to point to Firebase

### 4. DNS Configuration:
Point both domains to Firebase Hosting:
```
ajmal.aurify.global    CNAME    your-project.web.app
noushad.aurify.global  CNAME    your-project.web.app
```

## ✅ Benefits of This Approach

- **Single Build**: One React build serves multiple domains
- **SEO Friendly**: Each domain has its own dedicated content
- **Cost Effective**: No need for separate hosting for each profile
- **Easy Maintenance**: All profiles managed in one codebase
- **Fast Loading**: No client-side routing overhead

## 🎨 Customization

Each profile page is completely independent and can have:
- Different styling/themes
- Different content
- Different components
- Different functionality

The domain detection happens at the app level, so each profile gets the full page to itself.
