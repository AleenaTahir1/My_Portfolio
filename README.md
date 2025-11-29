# Saqlain Abbas - Brutalist Portfolio

A modern, brutalist-inspired personal portfolio website featuring terminal-style UI, monospace typography, and raw, developer-centric aesthetics.

## 🎨 Design Philosophy

This portfolio embraces **brutalism** — a design movement characterized by:
- High contrast (black & white)
- Monospace typography only
- Sharp, rectangular shapes
- Minimal animations
- Terminal/command-line inspired interface
- Raw, unpolished aesthetic
- Focus on content over decoration

Inspired by [Polar.sh](https://polar.sh), [Linear.app](https://linear.app/company), and terminal-based UIs.

## ✨ Features

### 🎮 Hero Section - "Life of Game"
- Terminal-style typewriter effect
- Monospace fonts (JetBrains Mono, Space Mono, IBM Plex Mono)
- Blinking cursor animation
- Command-line style CTAs
- Status indicator with pulse animation

### 🧠 About Section
- Terminal-style info blocks
- Numbered feature cards with brutalist styling
- Border animations on hover
- Clean grid layout

### 💼 Projects Section
- 2-column grid with project cards
- Grayscale hover effects (ready for project images)
- Technology stack tags
- GitHub links with brutalist buttons
- Terminal-style project metadata

### 📬 Contact Section
- Terminal-style contact form
- Formspree integration for submissions
- Input fields styled as command-line interface
- Alternative contact methods display
- Keyboard shortcuts guide

### 🧭 Navigation
- Fixed navbar with numbered sections (00, 01, 02, 03)
- Smooth scroll to sections
- Mobile-responsive hamburger menu
- Minimal, functional design

## 🛠️ Tech Stack

- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS (custom brutalist configuration)
- **Animations**: Framer Motion
- **Forms**: Formspree React
- **Fonts**: JetBrains Mono, Space Mono, IBM Plex Mono
- **Deployment**: GitHub Pages

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install --legacy-peer-deps

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Deploy to GitHub Pages
npm run deploy
```

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── HeroSection.tsx       # Terminal-style hero with typewriter
│   │   ├── Navbar.tsx            # Numbered section navigation
│   │   ├── AboutSection.tsx      # Bio and feature cards
│   │   ├── ProjectsSection.tsx   # Project grid with brutalist cards
│   │   └── ContactSection.tsx    # Terminal-style contact form
│   ├── App.tsx                   # Main app component
│   ├── index.css                 # Tailwind + custom brutalist styles
│   └── main.tsx                  # Entry point
├── tailwind.config.js            # Brutalist design system
├── postcss.config.js             # PostCSS configuration
└── package.json                  # Dependencies
```

## 🎨 Design System

### Colors
```css
brutalist-black: #0a0a0a     /* Main background */
brutalist-darkgray: #1a1a1a  /* Card backgrounds */
brutalist-gray: #2a2a2a      /* Accents */
white: #ffffff               /* Text and borders */
```

### Typography
- **Primary Font**: JetBrains Mono
- **Fallback**: Space Mono, IBM Plex Mono, Consolas, Monaco
- **Style**: Monospace only, varying weights (400-700)

### Components

#### Brutalist Button
```tsx
className="btn-brutalist"
// Features: Bold, uppercase, 2px white border, hover color inversion
```

#### Card Brutalist
```tsx
className="card-brutalist"
// Features: 2px border, shadow on hover, translate effect
```

#### Terminal Input
```tsx
className="terminal-input"
// Features: Transparent bg, white border, focus shadow
```

### Animations
- **Blink**: Cursor effect (1s step-end)
- **Fade In**: Simple opacity transition (0.5s)
- **Slide In**: X-axis slide with opacity (0.5s)
- **Typewriter**: Width expansion (2s steps)

## 🔧 Customization

### Update Contact Form
Replace the Formspree ID in `ContactSection.tsx`:
```tsx
const [state, handleSubmit] = useForm("YOUR_FORMSPREE_ID");
```

### Add Project Images
Add grayscale images to project cards:
```tsx
<img 
  src="project-image.jpg" 
  alt="Project" 
  className="grayscale-hover w-full"
/>
```

### Modify Navigation Sections
Edit `navItems` array in `Navbar.tsx`:
```tsx
const navItems = [
  { id: "home", label: "00. Home" },
  { id: "about", label: "01. About" },
  // Add more sections...
];
```

## 📱 Responsive Design

- **Mobile**: < 768px (stacked layout, mobile menu)
- **Tablet**: 768px - 1024px (2-column grids)
- **Desktop**: > 1024px (full layout)

All components use Tailwind's responsive utilities (`sm:`, `md:`, `lg:`) for seamless adaptation.

## ⚡ Performance

- **Font Loading**: Preconnect to Google Fonts
- **Lazy Loading**: Motion components with viewport detection
- **CSS**: Tailwind purged for minimal bundle size
- **Animations**: Reduced motion support for accessibility

## 🌐 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

MIT License - feel free to use this design for your own portfolio!

## 👤 Author

**Saqlain Abbas**
- GitHub: [@Razee4315](https://github.com/Razee4315)
- LinkedIn: [saqlain-abbas](https://linkedin.com/in/saqlain-abbas)
- Email: saqlainabbas315@gmail.com

## 🙏 Acknowledgments

Design inspiration:
- [Polar.sh](https://polar.sh) - Clean brutalist SaaS design
- [Linear.app](https://linear.app/company) - Minimal, functional UI
- Terminal emulators - Command-line aesthetics
- Brutalism movement - Raw, honest design

---

**Built with passion. Designed with purpose.**

```
$ npm run dev
> Building. Breaking. Learning. Repeating.