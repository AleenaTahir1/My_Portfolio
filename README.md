# Aleena Tahir - Portfolio Website

## Overview

This is a modern, responsive portfolio website for Aleena Tahir, an Artificial Intelligence Student and Developer. The portfolio showcases skills, education, projects, and provides contact information in a clean, professional design.

## Features

- **Responsive Design**: Fully responsive layout that works across all devices
- **Game of Life Animation**: Interactive Conway's Game of Life simulation in the hero section, visually representing the emergent complexity central to AI concepts
- **Smooth Scrolling**: Enhanced navigation with smooth scrolling between sections
- **Animated UI Elements**: Uses Framer Motion for subtle animations throughout the site
- **Contact Form**: Integrated contact form for visitor inquiries (currently simulation only)

## Sections

1. **Hero Section**: Introduction with name, title, and Game of Life animation
2. **About Section**: Brief professional description
3. **Skills Section**: Technical skills categorized by programming, tools, software, and soft skills
4. **Education Section**: Timeline visualization of educational background
5. **Projects Section**: Showcases key projects with descriptions and links
6. **Contact Section**: Form and contact information

## Technologies Used

This project is built with:

- **React**: Frontend library for building the user interface
- **TypeScript**: Type-safe JavaScript
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework for styling
- **shadcn/ui**: High-quality component library
- **Framer Motion**: Animation library for React
- **HTML Canvas**: For rendering the Game of Life simulation

## Getting Started

### Prerequisites

- Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Installation

```sh
# Clone the repository
git clone <repository-url>

# Navigate to the project directory
cd porfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

## Customization

### Game of Life Animation

The Conway's Game of Life animation in the hero section can be customized by modifying the following properties in `src/components/HeroSection.tsx`:

- `cellSize`: Controls the size of each cell in the grid
- `framesPerSecond`: Adjusts the animation speed (currently set to 2 fps for a slow, meditative pace)
- `primaryColor`: Background cells color
- `secondaryColor`: Active cells color (currently black with 0.8 opacity)
- `initialDensity`: Controls how many cells are initially active (0-1 range)

### Content

To update personal information and content, edit the relevant component files in `src/components/`:

- `AboutSection.tsx`: Personal bio
- `SkillsSection.tsx`: Technical skills
- `EducationSection.tsx`: Education history
- `ProjectsSection.tsx`: Project showcases
- `ContactSection.tsx`: Contact information

## Building for Production

```sh
# Build optimized production version
npm run build

# Preview production build locally
npm run preview
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For inquiries about this portfolio template, please reach out to Aleena Tahir.
