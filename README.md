# Nordpore - Company Website

A modern, responsive website for Nordpore - a solid-state nanopore manufacturing company built on KTH cleanroom infrastructure.

## Overview

This website showcases Nordpore's ultrathin, geometry-tunable solid-state nanopore chips and ready-to-use flow cells for sequencing, molecular diagnostics, and nanoparticle analytics.

## Features

- **Multi-page Structure**: 7 comprehensive pages covering all aspects of the business
- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations and transitions
- **Rich Content**: Detailed information about samples, solutions, support, and company news

## Pages

1. **Home (index.html)**: Landing page with hero section, features overview, and applications showcase
2. **About (about.html)**: Company story, mission, vision, values, team, and careers
3. **Samples (samples.html)**: Sample catalog with technical specifications and ordering information
4. **Solutions (solutions.html)**: Application-specific solutions for various research domains
5. **Support (support.html)**: Documentation, FAQ, resources, and support channels
6. **News (news.html)**: Latest company news, publications, events, and newsletter signup
7. **Contact (contact.html)**: Contact forms, location information, and quote requests

## Technology Stack

- **HTML5**: Semantic markup for all pages
- **CSS3**: Modern styling with CSS Grid, Flexbox, and custom properties
- **JavaScript**: Interactive features including mobile navigation, FAQ accordion, and form validation
- **Google Fonts**: Inter and Space Grotesk for typography

## File Structure

```
nordpore/
├── index.html              # Home page
├── about.html              # About page
├── samples.html            # Samples page
├── solutions.html          # Solutions page
├── support.html            # Support page
├── news.html               # News page
├── contact.html            # Contact page
├── styles/
│   ├── main.css           # Main stylesheet with base styles
│   └── pages.css          # Page-specific styles
├── scripts/
│   └── main.js            # JavaScript for interactivity
└── README.md              # This file
```

## Design System

### Color Palette

- **Primary Blue**: #2563eb
- **Secondary Blue**: #0ea5e9
- **Accent Purple**: #8b5cf6
- **Text Primary**: #1e293b
- **Text Secondary**: #64748b
- **Background**: #ffffff, #f8fafc

### Typography

- **Headings**: Space Grotesk (500, 600, 700)
- **Body**: Inter (300, 400, 500, 600, 700)

### Key Components

- Navigation bar with mobile hamburger menu
- Hero sections with gradient backgrounds
- Feature cards with hover effects
- Application cards with gradient images
- FAQ accordion
- Contact forms with validation
- Responsive tables for specifications
- Footer with multiple columns

## Customization Guide

### Updating Content

1. **Company Information**: Edit text content in each HTML file
2. **Contact Details**: Update email, phone, and address in `contact.html` and footer sections
3. **Team Members**: Modify team section in `about.html`
4. **Samples**: Update sample cards and specifications in `samples.html`
5. **News**: Add new news items to `news.html`

### Styling Changes

1. **Colors**: Modify CSS custom properties in `:root` section of `main.css`
2. **Fonts**: Change Google Fonts imports in HTML `<head>` sections
3. **Layout**: Adjust grid and flexbox properties in CSS files
4. **Animations**: Modify transition and animation properties

### Adding Images

Replace placeholder gradient backgrounds with actual images:

```css
.image-placeholder {
    background: url('path/to/image.jpg') center/cover;
}
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Getting Started

1. Open `index.html` in a web browser to view the website
2. Navigate through pages using the navigation menu
3. All pages are static HTML and can be hosted on any web server

## Deployment

This is a static website that can be deployed to:

- GitHub Pages
- Netlify
- Vercel
- Traditional web hosting (Apache, Nginx)
- AWS S3 + CloudFront
- Any static hosting service

Simply upload all files to your hosting provider maintaining the directory structure.

## Future Enhancements

Consider adding:

- Backend integration for contact forms
- Content Management System (CMS)
- Blog functionality
- Customer portal
- E-commerce integration
- Analytics tracking
- SEO optimization
- Multilingual support

## Contact Information

**Nordpore**
- Email: xinxinl@kth.se
- Phone: +46 8 123 456 78
- Address: KTH Royal Institute of Technology, Kista, Stockholm, Sweden

## License

© 2025 Nordpore. All rights reserved.

---

**Note**: This website contains placeholder content. Update all text, images, contact information, and links with actual company data before deployment.

