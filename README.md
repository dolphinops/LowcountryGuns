This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

Open [http://localhost:3275](http://localhost:3275) with your browser to see the result (`npm run dev` uses port **3275**).

## Message of the day (MOTD) and Vercel KV

The banner text is stored in **Redis via `@vercel/kv`** (`lib/motd-kv.ts`): either legacy **`KV_REST_API_*`** env vars or Marketplace **Upstash** **`UPSTASH_REDIS_REST_*`**. Add a Redis integration from the [Vercel Marketplace](https://vercel.com/marketplace?category=storage&search=redis), connect it to the project, then run **`vercel env pull .env.local`**. Set **`MOTD_ADMIN_SECRET`** for `/admin`. See `.env.example` and the [KV → Redis migration note](https://vercel.com/docs/storage/vercel-kv/kv-reference).

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
