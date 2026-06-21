# 3D Portfolio

A modern, interactive 3D portfolio website built with React, TypeScript, and Three.js. Features smooth animations, immersive 3D scenes, and a fully responsive design.

## 🚀 Project Overview

This is an advanced portfolio application showcasing professional work with:
- **Interactive 3D graphics** powered by Three.js and React Three Fiber
- **Smooth animations** using Framer Motion
- **Modern UI** with Tailwind CSS and responsive design
- **Multiple sections**: Hero, About, Skills, Experience, Projects, Resume, and Contact
- **Immersive loading screen** with animation effects
- **Special effects** including confetti animations

## 🛠️ Technology Stack

### Core
- **React** (19.2.6) - UI library
- **TypeScript** (6.0.2) - Type-safe JavaScript
- **Vite** (8.0.12) - Lightning-fast build tool

### 3D & Graphics
- **Three.js** (0.184.0) - 3D graphics library
- **React Three Fiber** (9.6.1) - React renderer for Three.js
- **React Three Drei** (10.7.7) - Useful helpers for Three.js

### Styling & Animation
- **Tailwind CSS** (3.4.19) - Utility-first CSS framework
- **PostCSS** (8.5.15) - CSS transformation tool
- **Autoprefixer** (10.5.0) - Vendor prefixes
- **Framer Motion** (12.40.0) - Animation library
- **Canvas Confetti** (1.9.4) - Confetti effects

### UI Components
- **Lucide React** (1.20.0) - Icon library

### Development
- **ESLint** (10.3.0) - Code linting
- **TypeScript ESLint** (8.59.2) - TypeScript linting

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Experience.tsx
│   ├── Hero.tsx
│   ├── HeroScene.tsx    # 3D scene component
│   ├── Loader.tsx
│   ├── Navbar.tsx
│   ├── Projects.tsx
│   ├── Resume.tsx
│   └── Skills.tsx
├── App.tsx              # Main application component
├── main.tsx             # Entry point
├── App.css              # Global styles
└── index.css            # Base styles
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd 3d-portfolio
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

The application will open at `http://localhost:5173` (or another available port).

## 📝 Available Scripts

- **`npm run dev`** - Start Vite development server with Hot Module Replacement (HMR)
- **`npm run build`** - Build TypeScript and create optimized production build
- **`npm run lint`** - Run ESLint to check code quality
- **`npm run preview`** - Preview the production build locally

## 🎨 Features

### Sections
- **Hero** - Eye-catching introduction with 3D graphics
- **About** - Professional background and summary
- **Skills** - Technical skills and expertise
- **Experience** - Work history and achievements
- **Projects** - Portfolio of completed projects
- **Resume** - Downloadable resume
- **Contact** - Contact information and forms

### Design Elements
- **Loading Screen** - Immersive animated loader
- **Navigation** - Sticky navbar for easy navigation
- **Animations** - Smooth transitions and motion effects
- **Responsive Design** - Mobile-friendly layout
- **Dark Theme** - Eye-friendly dark color scheme

## 🔧 Configuration Files

- **`vite.config.ts`** - Vite configuration
- **`tsconfig.json`** - TypeScript configuration
- **`tailwind.config.js`** - Tailwind CSS theme
- **`eslint.config.js`** - ESLint rules
- **`postcss.config.js`** - PostCSS configuration

## 🚢 Deployment

Build the project for production:
```bash
npm run build
```

The `dist/` folder contains the production-ready files. Deploy to your preferred hosting service (Vercel, Netlify, GitHub Pages, etc.)

## 📦 Dependencies

See `package.json` for the complete list of dependencies and their versions.

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues and enhancement requests.

---

**Built with ❤️ using React, TypeScript, and Three.js**
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
