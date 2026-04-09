# Smarter Dart Shirts

React + Vite web app for [smarterdartshirts.co.uk](https://smarterdartshirts.co.uk) — a UK bespoke dart apparel brand endorsed by PDC World Champion Luke Humphries MBE.

## Setup

```bash
npm install
npm run dev
```

## Pages

| Route | Page |
|---|---|
| `/` | Homepage — hero, carousel, Luke quote, process steps, testimonials |
| `/shirts` | Full shirt catalogue with filter tabs |
| `/why-smarter` | Brand story, founder background, ambassador section |
| `/contact` | Contact form and details |

## Tech Stack

- React 18 + Vite
- Tailwind CSS v3
- React Router v6

## Adding Real Images

Place shirt images in `src/assets/shirts/` and update the `image` field in `src/data/shirts.js`.
Place Luke Humphries' headshot at `src/assets/luke-headshot.jpg` and update `src/components/LukeQuote.jsx` to use it with `import lukeSrc from '../assets/luke-headshot.jpg'`.

## Build

```bash
npm run build
```
