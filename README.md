# 🏗 lab-react-clean-architecture

## Table of Contents

- [📌 **Repository Objective**](#-repository-objective)
- [🎯 **Why Clean Architecture in Front-End?**](#-why-clean-architecture-in-front-end-)
  - [🏗 **Key Principles:**](#-key-principles-)
  - [🚀 **Main Layers:**](#-main-layers-)
- [🛠️ **Tech Stack**](#-tech-stack)
- [📂 **Code Structure**](#-code-structure)
  - [🏗 Organization Based on Clean Architecture:](#-organization-based-on-clean-architecture-)
- [🚀 **Development Methodology (TDD)**](#-development-methodology-tdd)
  - [TDD Steps:](#tdd-steps-)
- [📊 **Vertical Slices**](#-vertical-slices)
  - [Content of a Vertical Slice:](#content-of-a-vertical-slice-)
  - [Sharing Between Slices:](#sharing-between-slices-)
- [🚀 **Installation**](#-installation)
- [📚 **Useful Resources**](#-useful-resources)
  - [📝 **Quick Summary**](#-quick-summary)

## 📌 **Repository Objective**

This project is a **technical experiment** aimed at exploring the principles of **Clean Architecture** applied to front-end development with **React**.\
The main goal is to test different approaches to structuring a React application in a modular and maintainable way, while minimizing dependencies and improving testability.

---

## 🎯 **Why Clean Architecture in Front-End?**

**Clean Architecture**, often associated with back-end development, is rarely applied in front-end projects.\
However, with modern Single Page Apps (React, Vue, Angular), separating responsibilities becomes essential to maintain complex business logic.

### 🏗 **Key Principles:**

1. **Separate the UI from business logic**:

- Allows testing and developing business logic without depending on the user interface or backend.

2. **Minimize dependencies**:

- By applying the Dependency Inversion Principle (DIP), coupling between layers is reduced.

3. **Facilitate evolution**:

- Business and infrastructure layers can evolve independently, making the application more robust in the long term.

### 🚀 **Main Layers:**

- **Domain**:  
  Contains pure business logic (models, entities, business rules). No coupling to external libraries.
- **Application**:  
  Orchestration of use cases and coordination between the domain and infrastructure.
- **Infrastructure**:  
  Implementation of repositories, API management, and integration of React components.

---

## 🛠️ **Tech Stack**

This project uses the following modern technologies:

- **React**: For component and UI management.
- **TanStack Router**: For advanced routing, with layout support via `Outlet`.
- **TanStack Query**: Data management and API calls with efficient caching.
- **TanStack Form**: Form validation and management.
- **Mock Service Worker (MSW)**: Backend simulations to avoid real dependencies.
- **Vitest**: Unit testing for business logic.
- **Vitest Browser**: Integration testing in a browser environment.

---

## 📂 **Code Structure**

### 🏗 Organization Based on Clean Architecture:

```
📂src
├── 📄main.ts               // Application entry point
├── 📂app                   // Global pages and technical logic
│   ├── 📄layout.tsx        // Common Header/Footer
│   ├── 📂pages             // Pages like Home, Wishlist, Stats
│   ├── 📄routes.ts         // Global routing with TanStack Router
│   ├── 📄providers.ts      // Management of Context Providers
├── 📂contexts              // Contexts for business domains
│   ├── 📂movies            // First context (Movies)
│   │   ├── 📂domain        // Models, business rules, interfaces
│   │   ├── 📂application   // Use Cases and business orchestration
│   │   ├── 📂infrastructure// Specific pages + simulated APIs
│   ├── 📂shared            // Reusable components, hooks, types
📂tests
├── 📂unit                  // Unit tests (business logic)
├── 📂integration           // Interaction tests with infrastructure
```

---

## 🚀 **Installation**

1. Clone the repository:

   ```bash
   git clone https://github.com/pplancq/lab-react-clean-architecture.git
   cd lab-react-clean-architecture
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the application:

   ```bash
   npm start
   ```
