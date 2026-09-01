import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function generateSite() {
  const rootDir = __dirname;
  const genDir = path.join(rootDir, 'generator');

  // Read CSS files
  const stylesCss = fs.readFileSync(path.join(genDir, 'styles.css'), 'utf-8');
  const stylesComponentsCss = fs.readFileSync(path.join(genDir, 'styles-components.css'), 'utf-8');

  // Read HTML partials
  const headerHtml = fs.readFileSync(path.join(genDir, 'header.html'), 'utf-8');
  const homeHtml = fs.readFileSync(path.join(genDir, 'home.html'), 'utf-8');
  const pagesPart1Html = fs.readFileSync(path.join(genDir, 'pages-part1.html'), 'utf-8');
  const pagesPart2Html = fs.readFileSync(path.join(genDir, 'pages-part2.html'), 'utf-8');
  const footerHtml = fs.readFileSync(path.join(genDir, 'footer.html'), 'utf-8');

  const headHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Asian Aviation | Travel Agency in Islamabad | Flights, Tours, Visas, Umrah & Hajj</title>
  
  <!-- SEO Meta Tags -->
  <meta name="description" content="Asian Aviation (Asian Group) is a premier travel agency in Phase 7 Bahria Town, Islamabad, Pakistan. Offering domestic & international flight ticketing, customized holiday tour packages, hotel bookings, visa assistance, Umrah & Hajj services.">
  <meta name="keywords" content="Travel Agency Islamabad, Asian Aviation, Asian Group, Flight Booking Islamabad, Umrah Packages Islamabad, Hajj Packages Pakistan, Visa Assistance Islamabad, Tour Packages Pakistan, Dubai Packages, Turkey Tours">
  <meta name="author" content="Asian Aviation">
  <meta name="robots" content="index, follow">
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://asiangroup.pk/">
  <meta property="og:title" content="Asian Aviation | Travel Agency in Islamabad">
  <meta property="og:description" content="Flights, holidays, hotels, visas, Umrah & personalized travel services — planned with care from Islamabad to destinations around the world.">
  <meta property="og:image" content="/assets/hero-travel.jpg">
  
  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Asian Aviation | Travel Agency in Islamabad">
  <meta name="twitter:description" content="Flights, holidays, hotels, visas, Umrah & personalized travel services — planned with care from Islamabad to destinations around the world.">
  <meta name="twitter:image" content="/assets/hero-travel.jpg">

  <!-- Favicon -->
  <link rel="icon" type="image/png" href="/assets/logo.png">

  <!-- Google Fonts: Poppins (Strict Single Typography) -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">

  <!-- Schema.org JSON-LD for LocalBusiness & TravelAgency -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Asian Aviation",
    "parentOrganization": {
      "@type": "Organization",
      "name": "Asian Group",
      "url": "https://asiangroup.pk/"
    },
    "image": "https://asiangroup.pk/assets/logo.png",
    "@id": "https://asiangroup.pk/",
    "url": "https://asiangroup.pk/",
    "telephone": ["+92-305-2227872", "+92-331-5382405"],
    "email": ["info@asiangroup.pk", "awais@asiangroup.pk", "fahad@asiangroup.pk"],
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Office No. 1 & 2, Butt Arcade Mini Commercial, Phase 7 Bahria Town",
      "addressLocality": "Islamabad",
      "postalCode": "46000",
      "addressCountry": "PK"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 33.5284,
      "longitude": 73.0934
    },
    "sameAs": [
      "https://www.facebook.com/asiangroup.pk/",
      "https://www.instagram.com/asian.aviation"
    ]
  }
  </script>

  <!-- Complete Inlined Production CSS -->
  <style>
${stylesCss}

${stylesComponentsCss}
  </style>
</head>
<body>
`;

  const fullHtml = [
    headHtml,
    headerHtml,
    '<main>',
    homeHtml,
    pagesPart1Html,
    pagesPart2Html,
    '</main>',
    footerHtml
  ].join('\n');

  fs.writeFileSync(path.join(rootDir, 'index.html'), fullHtml, 'utf-8');
  console.log('Successfully generated complete /index.html with', fullHtml.length, 'bytes');
}

generateSite();
