# **Supreme Group - Frontend**  

This is the frontend of the **Supreme Group** website, implemented using **React, TypeScript, and Vite**. The project follows modern best practices, focusing on performance, accessibility, and maintainability.  

## 🚀 **Live Demo**  
🔗 **[Supreme Group Website](https://supreme-group-sb.vercel.app/)**  

## 📂 **Repository**  
🔗 **[GitHub Repository](https://github.com/S-B001/supreme-group-frontend.git)**  

---

## 🛠️ **Tech Stack**  
- **Frontend Framework**: React (with TypeScript)  
- **Build Tool**: Vite (chosen for its fast performance)  
- **Styling**: Tailwind CSS  
- **State Management**: Used only for component-based state handling. 
- **Deployment**: Vercel  

---

## 📑 **Features Implemented**  
✅ **Component-Based Architecture** – Ensures modularity and reusability  
✅ **Pixel-Perfect Design** – Adheres to the provided Figma file  
✅ **Responsive Design** – Works across mobile, tablet, and desktop screens  
✅ **Optimized Performance** – Uses image optimization  
✅ **Accessibility** – Implements ARIA attributes and semantic HTML  

---

## ⚙️ **Project Setup Instructions**  
To set up the project locally, follow these steps:  

1. **Clone the repository**  
   ```sh
   git clone https://github.com/S-B001/supreme-group-frontend.git
   cd supreme-group-frontend
   ```

2. **Install dependencies**  
   ```sh
   npm install
   ```

3. **Start the development server**  
   ```sh
   npm run dev
   ```

4. **Build for production**  
   ```sh
   npm run build
   ```

5. **Preview the production build**  
   ```sh
   npm run preview
   ```

---

## 🏗️ **Component Architecture Overview**  
The project follows a modular component-based structure for scalability and maintainability.  

```
📂 public/       # icon, images and videos
📂 src/
 ├── 📂 components/   # Reusable UI components
 │   ├── Header.tsx   # Navigation bar
 │   ├── Footer.tsx   # Website footer
 │   ├── Banner.tsx   # Banner section
 │   ├── Contact.tsx  # Contact section
 │   ├── Product.tsx  # Product component
 │
 ├── 📂 pages/        # Page components
 │   ├── Home.tsx     # Home page layout
 │
 ├── 📂 styles/       # Tailwind CSS configurations
 ├── App.tsx         # Root component
 ├── main.tsx        # Application entry point
 └── index.html      # HTML template
```

---

## 📱 **Responsive Design Strategy**  
The website follows a **mobile-first approach** to ensure optimal performance across all screen sizes.  

- **Breakpoints:**  
  - `sm` → Mobile (≤ 640px)  
  - `md` → Tablet (641px – 1024px)  
  - `lg` → Laptop (1025px – 1440px)  
  - `xl` → Desktop (1441px and above)  

- **Implementation:**  
  - Used **Tailwind CSS** for flexible utility-based styling.  
  - Applied **CSS Grid & Flexbox** for dynamic layouts.  
  - Optimized images and media queries for various devices.  

---

## ⚡ **Performance Optimizations**  
To ensure a **fast and smooth** user experience, the following optimizations were implemented:  

✅ **Minified Assets** – Compressed CSS and JavaScript for faster delivery.  
✅ **Optimized Images** – Used modern formats like **WebP** to reduce file size.  

---

## ♿ **Accessibility Implementations**  
To make the website **inclusive and accessible**, the following were incorporated:  

✅ **Semantic HTML** – Used appropriate HTML elements (e.g., `<nav>`, `<section>`) for better screen reader support.  
✅ **ARIA Attributes** – Ensured screen readers can navigate the website properly.  
✅ **Contrast & Readability** – Ensured sufficient contrast ratios for better visibility.  
✅ **Focusable Elements** – Made all buttons and links focusable for smooth navigation.  

---

## 🛠️ **Challenges Faced & Solutions Applied**  
### **1. Pixel-Perfect Design Implementation**  
**Challenge:** Achieving a pixel-perfect layout as per the Figma design.  
**Solution:** Used **Tailwind CSS** utility classes along with **CSS Grid & Flexbox** to match exact dimensions.  

### **2. Ensuring Smooth Performance**  
**Challenge:** Handling multiple high-resolution images affecting page load speed.  
**Solution:** Optimized images using WebP format.  

### **3. Cross-Browser Compatibility**  
**Challenge:** Styling inconsistencies across browsers (Chrome, Firefox, Safari).  
**Solution:** Used **CSS resets** and tested using browser dev tools for consistency.  

### **4. Accessibility Enhancements**  
**Challenge:** Ensuring the site is accessible for screen readers and keyboard users.  
**Solution:** Implemented **ARIA attributes**, semantic HTML, and **tab navigation**.  

---

## 🚀 **Future Improvements & Features**  
The project can be enhanced further with:  
🔹 **Dark Mode Support** – Implementing a light/dark theme toggle.  
🔹 **Unit & Integration Tests** – Adding Jest & React Testing Library for testing.  
🔹 **Enhanced Animations** – Using Framer Motion for smoother transitions.  
🔹 **Multilingual Support** – Making the site available in multiple languages.  

---

## 📜 **License**  
This project is open-source and licensed under the **MIT License**.  
