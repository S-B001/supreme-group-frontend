# Supreme Group - Frontend

This is the frontend of the **Supreme Group** website, implemented using **React, TypeScript, and Vite**. The project follows modern best practices, focusing on performance, accessibility, and maintainability.

## 🚀 Live Demo
🔗 **[Supreme Group Website](https://supreme-group-sb.vercel.app/)**  

## 📂 Repository
🔗 **[GitHub Repository](https://github.com/S-B001/supreme-group-frontend.git)**  

---

## 🛠️ Tech Stack
- **Frontend Framework**: React (with TypeScript)  
- **Build Tool**: Vite (chosen for its fast performance)  
- **Styling**: Tailwind CSS  
- **State Management**: Not used, as the project doesn't require it currently  
- **Deployment**: Vercel  

---

## 📑 Features Implemented
✅ **Component-Based Architecture** – Ensures modularity and reusability  
✅ **Pixel-Perfect Design** – Adheres to the provided Figma file  
✅ **Responsive Design** – Works across mobile, tablet, and desktop screens  
✅ **Optimized Performance** – Uses lazy loading, code splitting, and image optimization  
✅ **Accessibility** – Implements ARIA attributes and semantic HTML  

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
