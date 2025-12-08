# 📦 Setup - React + Vite + Tailwind CSS

A modern, scalable React.js portfolio starter built with Vite, Bootstrap 5, and React Router DOM.

---

## 🚀 Features

- ⚡ Fast development using [Vite](https://vitejs.dev/)
- 🎨 Styling with [Tailwind CSS](https://tailwindcss.com/docs/)
- 🌐 Page navigation with [React Router](https://reactrouter.com/)
- 🧱 Modular file structure for scalability
- 🧠 Easy to extend with services, store, and more

---

## 📁 Project Structure
```bash

src/
├── assets/             # Images, icons, etc.
├── components/         # Reusable UI components (Header, Footer)
├── layouts/            # Shared layout wrappers
├── pages/              # Individual route pages (Home, About, Contact)
├── router/             # React Router setup
├── services/           # API and data layer (optional)
├── store/              # State management (optional)
├── hooks/              # Custom React hooks
├── utils/              # Utility functions
├── styles/             # Global styles (Bootstrap import)
├── App.jsx             # Optional wrapper component
└── main.jsx            # Application entry point

```
---

## 📦 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/rubankumarsankar/Setup-Tailwind-CSS.git
cd Setup-Tailwind-CSS

```

### 2. Install Dependencies

```bash
npm install

npm install path

npm install react-router-dom


/* Installation for tailwind css */

npm install -D tailwindcss@3
npx tailwindcss init
npx tailwindcss init -p

```

### 3. Run the Development Server

```bash
npm run dev

```

##  Dependencies

Package	             Purpose
react	             UI library
react-dom	         DOM rendering
react-router-dom	 Routing and navigation
tailwindcss	         Utility-first CSS framework
vite	             Build tool


### Tailwind CSS Setup


## Tailwind is configured via:

        # tailwind.config.js

        # postcss.config.js

        # src/index.css

```bash 

/* src/index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

```
# To customize Tailwind, edit the tailwind.config.js file.






## How to Add New Pages

### 1 Create a new file in src/pages/ (e.g. Portfolio.jsx)

### 2 Add a route inside src/router/index.jsx:

```bash

{ path: 'portfolio', element: <Portfolio /> }

```


### 3 Add a link in the Header.jsx navigation.

### Building for Production

```bash
npm run build

```

# Then, preview the production build:

```bash
npm run preview

```


### 📄 License

Ruby Tech © [Rubankumar S]

