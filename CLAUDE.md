# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

FlipPage is a React-based magazine website featuring fully animated flip page transitions with edge-to-edge design and no borders. The application is built with a component-based architecture for reusability.

## Development Commands

### Local Development with Docker (Recommended)

```bash
# Build and start the development server
docker-compose up

# Rebuild after dependency changes
docker-compose up --build

# Stop the development server
docker-compose down
```

Access the application at http://localhost:5173

### Local Development without Docker

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## Architecture

### Component Structure

The application follows a hierarchical component architecture:

- **App.jsx**: Root component that manages page data and renders the FlipBook
- **FlipBook**: Container component managing flip state, page transitions, and navigation controls
- **Page**: Reusable presentation component for individual magazine pages

### Key Design Patterns

**Component-Based Flip Pages**: The Page component is designed to be fully reusable. Each page accepts content and styling props, making it easy to create diverse magazine layouts.

**State Management**: FlipBook manages flip animations through local state (`currentPage`, `isFlipping`). The `isFlipping` flag prevents rapid page changes during transitions, ensuring smooth animations.

**Animation System**: Flip animations use CSS3D transforms with `rotateY(-180deg)` for realistic page turning. The perspective is set at 2000px on the flipbook container to create depth. Pages have `transform-origin` set to their binding edge (left/right) for natural pivoting.

### File Organization

```
src/
├── components/
│   ├── FlipBook/
│   │   ├── FlipBook.jsx    # Main flip container and logic
│   │   └── FlipBook.css    # Flip animations and layout
│   └── Page/
│       ├── Page.jsx        # Individual page component
│       └── Page.css        # Edge-to-edge styling and 3D effects
├── App.jsx                 # Root component
├── App.css
├── main.jsx               # React entry point
└── index.css              # Global styles
```

## Deployment

The project deploys to GitHub Pages as a static site via GitHub Actions:

1. Push to `main` branch triggers the workflow
2. Build artifacts are created with `npm run build`
3. The `dist/` folder is deployed to GitHub Pages

### GitHub Pages Setup

Enable GitHub Pages in repository settings:
- Settings → Pages → Source: GitHub Actions

The deployment URL will be available at: `https://[username].github.io/FlipPage/`

## Animation Details

The flip page effect is achieved through:

1. **3D Perspective**: Parent container uses `perspective: 2000px`
2. **Transform Origin**: Pages pivot from their binding edge (left or right)
3. **Rotation**: 180-degree Y-axis rotation with 0.6s easing transition
4. **Backface Visibility**: Hidden to prevent seeing through pages during flip
5. **Timing**: 600ms animation duration with setTimeout synchronization

## Extending the Application

### Adding New Pages

Modify the `pages` array in `App.jsx`:

```javascript
const pages = [
  { id: 1, content: 'Your Content', backgroundColor: '#color' },
  // Add more pages
]
```

### Customizing Flip Animation

Adjust timing in two places:
- `Page.css`: Update the `transition: transform` duration
- `FlipBook.jsx`: Update the `setTimeout` delay to match

### Enhanced Page Content

The Page component accepts any content. To add rich layouts:
1. Pass JSX elements instead of strings to the `content` prop
2. Update `Page.jsx` to render `{content}` directly instead of wrapping in `<h1>`
