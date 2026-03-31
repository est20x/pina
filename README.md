This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Deployment

This repo includes a GitHub Actions workflow at `.github/workflows/deploy-pages.yml` that deploys the app to GitHub Pages on every push to `main`.

This deployment uses a static Next.js export. GitHub Pages cannot run Next.js API routes, so the contact form must submit to an external HTTP endpoint.

Required GitHub repository secret:

- `NEXT_PUBLIC_FORM_ENDPOINT`

The workflow builds the site with `BASE_PATH=/<repo-name>`, which matches the default GitHub Pages project URL format:

```
https://<username>.github.io/<repo-name>/
```

If you later switch to a custom domain, change the `BASE_PATH` value in the workflow to an empty string.

The external form endpoint must accept `POST` requests with JSON and allow CORS from your GitHub Pages domain.

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on GitHub Pages

Enable GitHub Pages in the repository settings and choose `GitHub Actions` as the source.
