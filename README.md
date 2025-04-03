# Supreme Group - Frontend Development  

This repository contains the **frontend implementation** of the **Supreme Group** website using **React, TypeScript, Vite, and Tailwind CSS**. The project follows modern best practices to ensure **performance, maintainability, and accessibility** while adhering to the provided Figma design.

---

## 🚀 Tech Stack  

| **Technology** | **Purpose** |
|--------------|-------------|
| **React** | Component-based UI development |
| **TypeScript** | Type safety, reducing runtime errors |
| **Vite** | Fast build tool with optimized performance |
| **Tailwind CSS** | Utility-first CSS framework for styling |
| **React Toastify** | Notifications & alerts |
| **ESLint & Prettier** | Code quality & formatting |

## 📂 Project Structure  

public/ -Images, icons, fonts and videos
src/
│── components/       # Reusable UI components (Header, Banner, Product, Contact, Footer)
│── pages/            # Page components (Home.tsx)
│── styles/           # Global styles (index.css)
│── App.tsx           # Root component
│── main.tsx          # Entry point
│── vite.config.ts    # Vite configuration
│── tsconfig.json     # TypeScript configuration
│── package.json      # Dependencies & scripts
│── README.md         # Project documentation


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
