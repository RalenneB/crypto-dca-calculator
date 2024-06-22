This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Other details
The backend project and the frontend one + DB were made in under 24h
The present project can still have tons of improvement
The backend is limited because I created the DB in a wrong way, with insufficient data
TDB - refactoring the db structure anbd think in a higher lever the db architecture
TBD - the UI/UX - for now it's very limited and buggy
TBD - refactor the backend as well, there is a lot of unused code, mostly created for me to test how exactly an API can be created and linked to a db, and the other way around
TO DO: add a cors disable extension to your browser
You can use as data for the Db/Backend the dcaInvestment.json file, there you have almost all you need
I would recommend you to test the app by selecting 01/01/2024 and DOT cryptocurency, the BTC has additional data that should be ignored.

## Utils
 example request, pay attention it's HTTP not HTTPS!
 http://localhost:5066/api/dca?CryptoType=BTC&StartDate=2024-06-22T07%3A28%3A25.867&EndDate=2024-06-22T07%3A28%3A25.867&InvestedAmount=0&CryptoPrice=232
