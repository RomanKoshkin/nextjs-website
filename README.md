# [Roman.Koshkin.me](https://roman.koshkin.me)

# Notes

- transitioned to ReactJS 18
- if you clone and get errors, you might need to run
  `npx @next/codemod new-link . --force` from the project folder. Maybe even several times until the errors disappear.

# next.js course

https://www.youtube.com/watch?v=mTz0GXj8NN0&t=3698s

# TODO

- make Research, Blog, Projects beautiful

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fakellbl4%2Fpavel.mineev.me)

From the very start to not so long ago my site was just several links to my social media and contacts. Since I started to write about development I decided to have my place where I can write what I want. So, I decided to use Next.js, Tailwind, and MDX as the base for my website.

## Overview

- `src/pages/api/*` - [API routes](https://nextjs.org/docs/api-routes/introduction) makes Now Playing in my Spotify work as well as counting numbers of views with Redis.
- `src/pages/blog/*` - Static pre-rendered blog pages using [MDX](https://github.com/mdx-js/mdx).
- `src/pages/*` - All other static pages.

## Run on local machine

```bash
$ git clone https://github.com/akellbl4/pavel.mineev.me.git
$ cd pavel.mineev.me
$ yarn
$ yarn dev
```

If you want to make work counting view and Spotify features you need to copy config and put credentials there.

```
$ cp .env.example .env.local
```

### Built Using

- [Next.js](https://nextjs.org/)
- [MDX](https://github.com/mdx-js/mdx)
- [Tailwind CSS](https://tailwindcss.com/)

Hosted on [Vercel](https://vercel.com), accelerated by [Cloudflare](https://cloundflare.com)


# My notes

```bash
yarn dev
```

- You can used the `ProjectWithBadges` component for projects both without MDX (as in localhost:3000/test) or with MDX (as in Projects)

- **Routing** don't need the page to be in a router, you can just acces it by directly goint to /that_page (as long as it's in the `pages` folder)