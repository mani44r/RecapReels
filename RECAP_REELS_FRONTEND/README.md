# RecapReels - B2B Short-Form Video Content Services

A modern, premium website for RecapReels, a startup providing professional short-form video content services for businesses.

## Features

- **Modern Design**: Clean, professional interface with smooth animations
- **B2B Focus**: Content and messaging tailored for businesses, not consumers
- **Responsive**: Fully responsive design that works on all devices
- **Performance**: Built with Next.js 16 for optimal performance
- **TypeScript**: Type-safe codebase for better development experience

## Pages

- **Home**: Hero section, services overview, and call-to-action
- **Services**: Detailed service offerings
- **How It Works**: Step-by-step process explanation
- **Why RecapReels**: Benefits and value proposition
- **Industries**: Industries we serve
- **About**: Company story, mission, vision, and values
- **Contact**: Contact form and business inquiry

## Tech Stack

- **Next.js 16**: React framework with App Router
- **TypeScript**: Type safety
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Smooth animations and transitions

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
recapreels/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Home page
│   ├── services/          # Services page
│   ├── how-it-works/      # How It Works page
│   ├── why-recapreels/    # Why RecapReels page
│   ├── industries/        # Industries page
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── Navigation.tsx    # Navigation component
│   ├── Footer.tsx         # Footer component
│   └── Button.tsx         # Button component
└── public/                # Static assets
```

## Design System

- **Primary Color**: #0066ff (Blue)
- **Neutral Colors**: Black, white, and neutral grays
- **Typography**: Inter font family
- **Spacing**: Consistent spacing scale
- **Animations**: Smooth fade-in and slide animations

## Customization

To customize the website:

1. **Colors**: Update color values in `app/globals.css`
2. **Content**: Edit page content in respective page files
3. **Components**: Modify components in the `components/` directory
4. **Styling**: Adjust Tailwind classes or add custom CSS

## License

Private project for RecapReels.
