# Portfolio Website

A modern portfolio website built with React, Vite, and Express for showcasing personal work, education, experience, projects, and contact information.

## Tech Stack

- React 18
- Vite
- Express.js
- Node.js
- MongoDB-ready configuration

## Features

- Responsive personal portfolio layout
- Hero section with profile summary and CTA buttons
- About section with skills and profile details
- Experience and education timeline
- Project showcase cards
- Contact form with backend validation
- Theme toggle for light/dark mode
- Express API for serving portfolio data
- Production-ready Vite build setup

## Project Structure

- `src/` – React frontend application
- `server/` – Express backend API
- `public/` – Static assets if needed
- `index.html` – Vite app entry file
- `package.json` – Scripts and dependencies
- `vite.config.js` – Vite configuration and API proxy setup

## Prerequisites

- Node.js 18 or later
- npm

## Installation

```bash
npm install
```

## Run the Project

Start both frontend and backend together:

```bash
npm run dev
```

This starts:

- Frontend: `http://localhost:5173`
- Backend API: `http://localhost:5000`

If port 5173 is already in use, Vite will automatically choose the next available local port.

## Available Scripts

- `npm run dev` – starts the frontend and backend together
- `npm run server` – starts only the Express API server
- `npm run client` – starts only the Vite frontend
- `npm run build` – creates a production build
- `npm run preview` – previews the production build locally

## API Endpoints

The backend exposes the following routes:

- `GET /api/health` – checks API health status
- `GET /api/portfolio` – returns portfolio content
- `POST /api/contact` – validates and accepts contact form submissions

## Environment Variables

Create a `.env` file in the project root if you want to enable MongoDB connectivity:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/portfolio
```

If `MONGODB_URI` is not set, the app still runs using static portfolio data stored in the backend.

## Notes

- The frontend is configured to use Vite proxying for `/api` calls, so it works without hardcoded localhost URLs.
- The portfolio content can be customized directly in the backend data object in `server/index.js`.
- The app is designed for local development and can be deployed easily with a Node.js hosting provider.
