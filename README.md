# GoRail

Solusi perjalanan kereta api modern. Aplikasi web untuk mencari jadwal dan memesan tiket kereta api secara digital.

## Tech Stack

- **Framework:** React 19
- **Build Tool:** Vite 8
- **Routing:** React Router 7
- **Styling:** Tailwind CSS 4
- **Icons:** react-icons
- **Linting:** ESLint 10

## Getting Started

```bash
npm install
npm run dev
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## Project Structure

```
src/
├── components/
│   ├── common/       # Shared components (Button, Input, LoadingSpinner, etc.)
│   ├── layout/       # Layout components (Navbar, Footer)
│   └── sections/     # Page sections (home, trains)
├── pages/            # Route pages
├── services/         # API layer
├── utils/            # Utility functions
└── data/             # Static data files
```
