# Images Folder

This folder is for storing website images.

## Page Header Background Images

Each page has a large header section with a title. You can add custom background images for each page.

### Required Images:

Place the following images in this folder:

1. **header-about.jpg** - Background for "About Nordpore" page
2. **header-products.jpg** - Background for "Our Products" page
3. **header-solutions.jpg** - Background for "Application Solutions" page
4. **header-support.jpg** - Background for "Support & Resources" page
5. **header-news.jpg** - Background for "News & Updates" page
6. **header-contact.jpg** - Background for "Contact Us" page

### Recommended Specifications:

- **Size**: 1920 x 600 pixels (or similar ratio)
- **Format**: JPG or PNG
- **Quality**: High resolution for crisp display
- **Content**: Images related to the page topic (lab equipment, technology, team, etc.)

### How It Works:

The images are automatically applied via CSS in `styles/pages.css`. Each page has a semi-transparent white overlay (85% opacity) so the text remains readable.

### To Change Images:

Simply replace the image files in this folder with your own images using the same filenames, or update the CSS file:

```css
.page-header-about {
    background-image: url('../images/your-custom-image.jpg');
}
```

### Adjusting Overlay Opacity:

If you want to make the background image more or less visible, edit the overlay opacity in `styles/pages.css`:

```css
.page-header::before {
    background: rgba(255, 255, 255, 0.85); /* Change 0.85 to adjust (0 = fully transparent, 1 = fully opaque) */
}
```

## Home Page Carousel Images

The home page features a carousel with 4 rotating images. Place these images in this folder:

1. **carousel-1.jpg** - First slide (e.g., Cleanroom facility)
2. **carousel-2.jpg** - Second slide (e.g., Manufacturing process)
3. **carousel-3.jpg** - Third slide (e.g., Research & Development)
4. **carousel-4.jpg** - Fourth slide (e.g., Team photo)

**Recommended Specifications:**
- **Size**: 1000 x 500 pixels (2:1 ratio)
- **Format**: JPG or PNG
- **Quality**: High resolution

**Carousel Features:**
- Auto-advances every 5 seconds
- Left/right arrow buttons for manual navigation
- Dot indicators at the bottom
- Pauses when hovering over the carousel
- Each slide has a caption with title and description

**To customize captions:** Edit the text in `index.html` within each `carousel-caption` div.

## Home Page Use Cases Images

The Use Cases section on the home page displays 3 use case cards showing different solid-state nanopore sensing technologies. Place these images in this folder:

1. **usecase-ionic.jpg** - Ionic Current Sensing (monitoring ionic current through nanopores)
2. **usecase-tunneling.jpg** - Tunneling Current Sensing (quantum tunneling effect detection)
3. **usecase-optical.jpg** - Optical Readout (optical detection and monitoring)

**Recommended Specifications:**
- **Size**: 400 x 200 pixels (2:1 ratio)
- **Format**: JPG or PNG
- **Content**: Scientific diagrams or illustrations showing:
  - Ionic current: Ion flow and current measurements
  - Tunneling current: Electron tunneling detection
  - Optical: Light-based detection systems

**Features:**
- Images automatically scale to fit the card
- Hover effect: slight zoom animation
- Responsive design for all screen sizes

## Team Member Photos (About Page)

The About page displays 3 team members with circular profile photos. Place these images in this folder:

1. **team-xinxin.jpg** - Xinxin Liu (Founder)
2. **team-frank.jpg** - Frank Niklaus (Co-founder)
3. **team-valentin.jpg** - Valentin Dubois (Co-founder)

**Recommended Specifications:**
- **Size**: 300 x 300 pixels (square, 1:1 ratio)
- **Format**: JPG or PNG
- **Content**: Professional headshots or profile photos
- **Background**: Any background (will be cropped to circle)

**Features:**
- Photos automatically cropped to circular shape
- If photo is missing, gradient background displays as fallback
- Hover effect on entire card

## News Page Images

The News page features a story about receiving the KTH Innovation Grant. Place this image in the folder:

1. **innovation.jpg** - KTH Innovation Grant announcement or award ceremony

**Recommended Specifications:**
- **Size**: 600 x 400 pixels (3:2 ratio)
- **Format**: JPG or PNG
- **Content**: Image representing innovation, funding, or KTH collaboration

## About Page Images

The About page "Our Story" section features an image of the cleanroom facility. Place this image in the folder:

1. **cleanroom.jpg** - KTH cleanroom manufacturing facility

**Recommended Specifications:**
- **Size**: 600 x 400 pixels or larger (3:2 ratio preferred)
- **Format**: JPG or PNG
- **Content**: Photo of cleanroom, manufacturing equipment, or wafer fabrication

## Other Images

You can also add:
- Product images
- News/blog images
- Company photos
- Additional team member photos (if expanding the team)

Replace the gradient placeholders throughout the site with actual images by updating the CSS or HTML.

