#  macOS Style Portfolio

> An interactive portfolio website mimicking the macOS desktop experience, built with **React**, **TypeScript**, and **GSAP**.

This project moves away from traditional static portfolios, offering users an engaging "Operating System" environment to explore projects, skills, and resume. It features a robust window management system, draggable elements, and fluid animations.

![Project Preview](https://portfolio-frontend-yta9.vercel.app/)

## ✨ Features

* **🖥️ OS Simulation:** A fully functional desktop environment with a Dock, Menu Bar, and Desktop icons.
* **🪟 Window Management:** sophisticated system for opening, closing, minimizing, and managing window stacking order (z-index).
* **🤏 Drag & Drop:** seamless dragging for desktop icons and application windows using `GSAP Draggable` (supports both desktop and touch devices).
* **📱 Fully Responsive:** Adaptive design that works smoothly on mobile devices and tablets, powered by `Tailwind CSS v4`.
* **📂 Finder System:** A simulated file system to navigate through projects and "files".
* **🚀 High Performance:** Built on `Vite` for lightning-fast HMR and optimized production builds.
* **🛠️ Included Apps:**
    * **Finder:** Navigate projects and "files".
    * **Terminal:** View technical skills and tech stack.
    * **Safari:** Read blog posts and articles.
    * **Resume:** Integrated PDF viewer (`react-pdf`) to view CVs directly.
    * **Contact:** Connect via social media.
    * **Photos:** Image gallery.

## 🛠️ Tech Stack

This project leverages the latest modern frontend technologies:

* **Core:** [React 19](https://react.dev/) - Library for building user interfaces.
* **Language:** [TypeScript](https://www.typescriptlang.org/) - For type safety and better developer experience.
* **Build Tool:** [Vite](https://vitejs.dev/) - Next generation frontend tooling.
* **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) - Utility-first CSS framework.
* **State Management:** [Zustand](https://github.com/pmndrs/zustand) + [Immer](https://github.com/immerjs/immer) - For scalable and immutable state management.
* **Animations:** [GSAP](https://gsap.com/) - Industry-standard animation library (including Draggable plugin).
* **Icons:** [Lucide React](https://lucide.dev/) - Beautiful & consistent icons.
* **Utilities:** [React-PDF](https://github.com/wojtekmaj/react-pdf) - For rendering PDF files.

## 🚀 Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites
* **Node.js** (v18 or higher recommended)
* **npm** or **yarn**

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/zaqurbanov/PortfolioFrontend.git](https://github.com/zaqurbanov/PortfolioFrontend.git)
    cd PortfolioFrontend
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:5173`.

4.  **Build for production:**
    ```bash
    npm run build
    ```

## 📂 Project Structure

The codebase follows a modular and clean architecture pattern:

```text
src/
├── 📁 components/      # UI Components (Dock, Navbar, etc.)
│   ├── 📁 Dock/        # Dock application logic and tooltips
│   ├── 📁 Home/        # Desktop icons and logic
│   ├── 📁 Navbar/      # Top navigation bar and clock
│   └── 📁 windows/     # Individual "OS" applications (Safari, Terminal, Finder...)
├── 📁 constants/       # Static data (icons, text, config, menu links)
├── 📁 hoc/             # Higher-Order Components (e.g., WindowWrapper for drag/window logic)
├── 📁 hooks/           # Custom React Hooks (e.g., useCurrentDate)
├── 📁 store/           # Global State Management (Zustand stores)
│   ├── useWindowStore.ts   # Manages window states (open/close/z-index)
│   └── useLocationStore.ts # Manages Finder path navigation
├── 📁 assets/          # Static assets
└── 📄 App.tsx          # Main application entry point