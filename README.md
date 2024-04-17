# Overview

A fully-featured personal website with a blog in Next.js.

- `src/pages/blog/*` - Static pre-rendered blog pages using [MDX](https://github.com/mdx-js/mdx).
- `src/pages/*` - All other static pages.

## Run on local machine

```bash
$ git clone https://github.com/RomanKoshkin/nextjs-website.git
$ cd nextjs-website
$ yarn
$ yarn dev
$ cp .env.example .env.local
```
Edit the `.env.local`: specify the URL, port and password to your Redis database. I'm hosting mine on an [AWS EC2](https://aws.amazon.com/pm/ec2/?gclid=Cj0KCQjwztOwBhD7ARIsAPDKnkBNwCckd88iZw_ImrQtJ6NdJtz0urX3r8iVv5l8Y1pMtaZLswwbYYgaAjWBEALw_wcB&trk=8d7982dd-fe3b-4952-ae11-337e59d552aa&sc_channel=ps&ef_id=Cj0KCQjwztOwBhD7ARIsAPDKnkBNwCckd88iZw_ImrQtJ6NdJtz0urX3r8iVv5l8Y1pMtaZLswwbYYgaAjWBEALw_wcB:G:s&s_kwcid=AL!4422!3!530706572075!e!!g!!aws%20ec2!13705463409!124614255496) micro instance. You can host Redis anywhere, just make sure you can access it.

## Built Using

- [Next.js](https://nextjs.org/)
- [MDX](https://github.com/mdx-js/mdx)
- [Tailwind CSS](https://tailwindcss.com/)

Hosted on [Vercel](https://vercel.com), accelerated by [Cloudflare](https://cloundflare.com)


# Notes

- You can use the `ProjectWithBadges` component for projects both without MDX (as in localhost:3000/test) or with MDX (as in Projects)

- **Routing** doesn't need the page to be in a router, you can just acces it by directly going to /that_page (as long as it's in the `pages` folder)


[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FRomanKoshkin%2Fnextjs-website%2F)

From the very start to not so long ago my site was just several links to my social media and contacts. Since I started to write about development I decided to have my place where I can write what I want. So, I decided to use Next.js, Tailwind, and MDX as the base for my website.

# Credits

This website was built off Pavel Mineev's work. Check out his [GitHub](https://github.com/akellbl4). 