# Ahyar Nur Ichwan - Portfolio Website

A modern, futuristic, and minimalist portfolio website built with Next.js, featuring a purple and black color scheme with dark/light mode toggle and smooth scrolling animations.

## ✨ Features

- **🎨 Modern Design**: Futuristic and minimalist UI with purple and black color scheme
- **🌙 Dark/Light Mode**: Seamless theme switching with system preference detection
- **📱 Responsive**: Fully responsive design that works on all devices
- **⚡ Performance**: Built with Next.js 14 and optimized for speed
- **🎭 Animations**: Smooth scroll-triggered animations using Framer Motion
- **🎯 Animated Text**: Custom scrolling text animation featuring your name and skills
- **🔧 TypeScript**: Fully typed for better development experience
- **🎨 Tailwind CSS**: Utility-first CSS framework for rapid styling

## 🚀 Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Theme**: next-themes
- **Icons**: Lucide React
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
│   ├── globals.css        # Global styles and Tailwind imports
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Main page component
├── components/            # React components
│   ├── navigation.tsx     # Navigation bar with theme toggle
│   ├── hero-section.tsx   # Hero section with profile
│   ├── animated-text.tsx  # Scrolling text animation
│   ├── about-section.tsx  # About section with skills
│   ├── experience-section.tsx # Timeline of experience/education
│   ├── projects-section.tsx   # Featured projects showcase
│   └── theme-provider.tsx # Theme context provider
├── lib/                   # Utility functions
│   └── utils.ts          # Tailwind class utilities
├── public/               # Static assets
│   └── git.png          # Profile image
└── ...config files       # Configuration files
```

## 🎨 Design Features

### Color Scheme
- **Primary**: Purple gradient (#a855f7 to #9333ea)
- **Dark**: Deep black (#0f172a) with dark grays
- **Light**: Clean whites with subtle grays
- **Accent**: Purple highlights and gradients

### Animations
- **Scroll Animations**: Elements animate into view as you scroll
- **Hover Effects**: Interactive hover states on buttons and cards
- **Theme Transitions**: Smooth transitions when switching themes
- **Text Animation**: Custom scrolling text with your name and skills

### Layout
- **Hero Section**: Large profile image with animated background
- **Animated Text**: Scrolling text bar with your name and skills
- **About Section**: Skills showcase with animated cards
- **Experience Timeline**: Animated timeline of your journey
- **Projects Grid**: Modern project cards with hover effects
- **Responsive Navigation**: Mobile-friendly navigation with theme toggle

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

## 🌙 Dark Mode

The website includes a sophisticated dark mode implementation:
- **System Preference**: Automatically detects user's system theme
- **Manual Toggle**: Theme toggle button in navigation
- **Smooth Transitions**: All elements transition smoothly between themes
- **Persistent**: Theme preference is saved and restored

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
