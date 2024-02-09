This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

API KEYS :

```
NEXT_PUBLIC_MAPBOX_API_KEY=
```

```
npm install --save @mapbox/mapbox-gl-geocoder
```

External Data : OS Open Built Up Areas

CSV (Comma Separated Values), Size:39.08 MB is available here:

`https://github.com/jonas-kgomo/real-estate-api`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

```
Built Up Areas
[
  {
    "gsscode": "E63003246",
    "name1_text": "Abberley",
    "name1_language": "",
    "name2_text": "",
    "name2_language": "",
    "areahectares": "21.44",
    "geometry_area_m": "214375.0",
    "geometry\r": "\"MULTIPOLYGON (((374400 267625"
  },

]
Built Up Extents
[
  {
    "relatedtogsscode": "E63003246",
    "name1_text": "Abberley",
    "name1_language": "",
    "name2_text": "",
    "name2_language": "",
    "areahectares": "20.56",
    "geometry_area_m": "205625.0",
    "geometry\r": "\"MULTIPOLYGON (((374400 267625"
  },

]
Non Built Up Extents
[
  {
    "relatedtogsscode": "E63003246",
    "name1_text": "Abberley",
    "name1_language": "",
    "name2_text": "",
    "name2_language": "",
    "areahectares": "0.88",
    "geometry_area_m": "8750.0",
    "geometry\r": "\"MULTIPOLYGON (((374625 267475"
  },

```
# map
# price-comparison
