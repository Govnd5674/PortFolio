# Modern Portfolio Website

A dynamic and interactive portfolio website built with React, featuring smooth animations, responsive design, and modern UI components.

## 🚀 Features

- Animated welcome screen with loading bar
- Smooth scroll navigation
- Interactive 3D elements and animations
- Responsive design for all devices
- Dark theme with custom color scheme (#804D3E, #7E497D)
- Multiple sections:
  - Hero/Welcome
  - About
  - Services
  - Projects showcase
  - Contact form
  - Social media integration

## 🛠️ Technologies Used

- React.js
- Tailwind CSS
- GSAP Animations
- React Three Fiber
- Framer Motion
- React Icons
- React Spinners

## 🏗️ Project Structure

```
src/
├── components/
│   ├── pages/
│   │   ├── Page1.jsx (Hero)
│   │   ├── Page2.jsx (About)
│   │   ├── Page3.jsx (Services)
│   │   ├── Page4.jsx (Projects)
│   │   └── Page5.jsx (Contact)
│   ├── nav.jsx
│   └── WelcomeText.jsx
├── blocks/
│   ├── Components/
│   ├── TextAnimations/
│   └── 3DElements/
├── assets/
├── App.jsx
└── index.css
```

## ⚙️ Setup Instructions

1. Clone the repository

```bash
git clone [repository-url]
```

2. Install dependencies

```bash
npm install
```

3. Start development server

```bash
npm run dev
```

4. Build for production

```bash
npm run build
```

## 📦 Dependencies & Libraries

### Core Libraries

- **React 18+**: Frontend framework
- **Vite**: Build tool and development server
- **Tailwind CSS**: Utility-first CSS framework

### Animation Libraries

- **GSAP (GreenSock)**: Advanced animations
  - Used in scroll triggers
  - Text animations
  - Smooth transitions
- **Framer Motion**: React animation library
  - Page transitions
  - Hover effects
  - Loading animations
- **React Spring**: Physics-based animations
  - Used in interactive elements
  - Smooth state transitions

### 3D Libraries

- **Three.js/React Three Fiber**: 3D graphics
  - 3D model rendering
  - Interactive 3D elements
  - Background effects
- **@splinetool/react-spline**: 3D design integration
  - Custom 3D models
  - Interactive scenes

### UI Components

- **React Icons**: Icon library
  - FA icons for social links
  - Navigation icons
- **React Spinners**: Loading animations
  - BarLoader for initial loading
  - Custom loading states

## 🧩 Custom Components

### Text Animations

- **SplitText**: Animated text reveals
- **GradientText**: Color-changing text effects
- **TypewriterEffect**: Typing animations

### Interactive Elements

- **InfiniteMenu**: Scrolling project showcase
- **3DCard**: Interactive card components
- **ParallaxBackground**: Scrolling effects

### Navigation

- **Nav**: Responsive navigation bar
- **ScrollTrigger**: Scroll-based animations
- **SmoothScroll**: Custom scroll behavior

## 🔧 VS Code Extensions

### Essential

- **ES7+ React/Redux/React-Native snippets**
- **Tailwind CSS IntelliSense**
- **PostCSS Language Support**
- **Live Server**

### Recommended

- **Pretty TypeScript Errors**
- **Error Lens**
- **ESLint**
- **Prettier**
- **Auto Rename Tag**
- **GitLens**

## 💻 Development Environment

### Requirements

- Node.js 16+
- npm/yarn
- VS Code (recommended)

### Environment Variables

```env
VITE_APP_TITLE=Portfolio
VITE_APP_API_URL=your-api-url
```

## 📱 Contact

- GitHub: [github.com/Govnd5674](https://github.com/Govnd5674)
- LinkedIn: [linkedin.com/in/govind-chudari](https://www.linkedin.com/in/govind-chudari/)
- Email: govindchudari@email.com
- Phone: +919383860325

## 📄 License

MIT License - feel free to use this project for your own portfolio!
