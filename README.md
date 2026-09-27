# Ahyar Nur Ichwan - Portfolio Website

A modern, futuristic, and minimalist portfolio website built with Next.js, featuring a dark monochrome color scheme with a cybersecurity-green accent and smooth scrolling animations.

## ✨ Features

- **🎨 Modern Design**: Futuristic and minimalist UI with a monochrome dark theme and cyber-green accents
- **📱 Responsive**: Fully responsive design that works on all devices
- **⚡ Performance**: Built with Next.js 16 (App Router, Turbopack) and optimized for speed
- **🎭 Animations**: Smooth scroll-triggered animations using Framer Motion / Motion
- **🧊 WebGL Hero**: Interactive dot-screen shader background with mouse trail (react-three-fiber)
- **🎯 Animated Text**: Custom scrolling text animation featuring name and skills
- **📄 Dynamic CV**: Generated on the fly as a PDF via the `/api/cv` route
- **🔧 TypeScript**: Fully typed for better development experience
- **🎨 Tailwind CSS**: Utility-first CSS framework for rapid styling

## 🚀 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion / Motion
- **3D**: react-three-fiber + drei + three
- **PDF**: pdf-lib
- **Icons**: Lucide React, React Icons
- **Components**: Custom components with 21st.dev inspiration

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd gbtt
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
├── app/                    # Next.js app directory
│   ├── api/cv/route.ts    # PDF CV generator (pdf-lib)
│   ├── globals.css        # Global styles and Tailwind imports
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Main page component
├── components/            # React components
│   ├── horizontal-navigation.tsx # Floating nav (desktop) + mobile menu
│   ├── welcome-intro.tsx  # Splash intro (commits-grid)
│   ├── hero-section.tsx   # Hero section with WebGL shader
│   ├── animated-text.tsx  # Scrolling text animation
│   ├── about-section.tsx  # About section with skills
│   ├── stack-section.tsx  # Tech stack feature cards
│   ├── experience-section.tsx # Timeline of experience
│   ├── education-section.tsx  # Education cards
│   ├── projects-section.tsx   # Featured projects showcase
│   ├── contact-section.tsx    # Contact and social links
│   └── ui/                # Reusable UI primitives
├── lib/                   # Utility functions
│   └── utils.ts          # Tailwind class utilities
├── public/               # Static assets
│   └── image/           # Profile images
└── ...config files       # Configuration files
```

## 🎨 Design Features

### Color Scheme
- **Base**: Near-black (#0a0a0a / #121212) with dark grays
- **Foreground**: Clean whites and light grays
- **Accent**: Cybersecurity green (HSL 140 100% 45%)

### Animations
- **Scroll Animations**: Elements animate into view as you scroll
- **Hover Effects**: Interactive hover states on buttons and cards
- **WebGL Shader**: Mouse-reactive dot grid in the hero
- **Text Animation**: Custom scrolling text bar with name and skills

### Layout
- **Hero Section**: Full-screen WebGL shader background with terminal motif
- **Animated Text**: Scrolling text bar with name and skills
- **About Section**: Photo showcase, journey story, and skill cards
- **Stack Section**: Feature cards describing the tech stack
- **Experience Timeline**: Animated timeline of experience
- **Projects Grid**: Modern project cards with hover effects
- **Contact Section**: Contact info and social links
- **Responsive Navigation**: Floating desktop nav + mobile bottom menu

## 🔧 Customization

### Adding New Projects
Edit `components/projects-section.tsx` and add new project objects to the `projects` array.

### Modifying Colors
Update the color scheme in `tailwind.config.js` under the `colors` section.

### Changing Animations
Modify animation configurations in individual component files or update the global animations in `tailwind.config.js`.

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Desktop**: Full layout with side-by-side content
- **Tablet**: Adapted grid layouts and spacing
- **Mobile**: Stacked layouts with touch-friendly interactions

## 🚀 Deployment

The website is ready for deployment on platforms like:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **GitHub Pages**
- **Any static hosting service**

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to contribute to this project by:
1. Forking the repository
2. Creating a feature branch
3. Making your changes
4. Submitting a pull request

## 📧 Contact

- **GitHub**: [@Ahyarnur](https://github.com/Ahyarnur)
- **LinkedIn**: [Ahyar Nur Ichwan](https://www.linkedin.com/in/hyrichwan/)
- **Instagram**: [@ahyarrrrrrrrrr](https://www.instagram.com/ahyarrrrrrrrrr/)

---

Built with ❤️ by Ahyar Nur Ichwan
