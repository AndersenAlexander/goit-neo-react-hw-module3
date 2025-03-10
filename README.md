# Phonebook App

A simple React application for storing contacts in a phonebook. Users can add, filter, and delete contacts, with data persisted in local storage. The app also demonstrates how to use Formik and Yup for form handling and validation, as well as how to implement a full-screen background video and styling with CSS Modules.

## Features
  Add New Contacts: Use a Formik-powered form with Yup validation (required fields, minimum/maximum length).
  Filter Contacts: Search for contacts by name in real-time (case-insensitive).
  Delete Contacts: Remove any existing contact with a single click.
  Local Storage Persistence: Contacts remain available after page refresh or browser restart.
  Background Video: A looping MP4 video displayed as a fullscreen background.
  Styling with CSS Modules: Each component has its own CSS module, keeping styles modular and maintainable.
  Responsive & Centered Design: The main content is centered both vertically and horizontally, ensuring a clean UI across various screen sizes.
  
## Tech Stack
  React with Vite (development/build tooling)
  Formik and Yup (form management and validation)
  nanoid (unique ID generation)
  CSS Modules (modular styling)
  localStorage (data persistence)

## Design

![Screenshot 2025-03-10 173333](https://github.com/user-attachments/assets/e1e9a9bc-acda-4d99-ba43-92fa0c924556)

## Application structure


    phonebook-app/
    ├─ public/
    │  ├─ Phonebook.mp4      // Background video file
    │  └─ favicon.ico        // Favicon
    ├─ src/
    │  ├─ components/
    │  │  ├─ App/
    │  │  │  ├─ App.jsx
    │  │  │  └─ App.module.css
    │  │  ├─ ContactForm/
    │  │  │  ├─ ContactForm.jsx
    │  │  │  └─ ContactForm.module.css
    │  │  ├─ ContactList/
    │  │  │  ├─ ContactList.jsx
    │  │  │  └─ ContactList.module.css
    │  │  ├─ Contact/
    │  │  │  ├─ Contact.jsx
    │  │  │  └─ Contact.module.css
    │  │  └─ SearchBox/
    │  │     ├─ SearchBox.jsx
    │  │     └─ SearchBox.module.css
    │  ├─ main.jsx
    │  └─ index.css          // Global/reset CSS
    ├─ index.html            // Entry point (includes <link> to favicon and video)
    ├─ package.json
    ├─ vite.config.js
    ├─ .gitignore
    └─ README.md             // Project description


## Explanation

  public/: Contains static assets (video file, favicon, etc.) that will be served directly.
  src/: Contains all source files for the React application.
  components/: Each component in its own folder, with a matching .jsx file and .module.css file for styles.
  main.jsx: Entry point for the React application (rendering <App />).
  index.css: Global or reset CSS rules that apply to the entire app.
  index.html: Loads the app script and references any static assets (favicon, video).
  package.json: Manages project dependencies and scripts.
  vite.config.js: Configuration for Vite (plugins, etc.).
  .gitignore: Excludes files/folders (like node_modules/ and dist/) from version control.
  README.md: Contains the project’s description, setup instructions, usage, etc.
