# This is my Personal Portfolio Website

Have a browse around at [`My Site`](https://www.genei180.de)
Powered by [`Svelte`](https://github.com/sveltejs/cli).

## Main Concept

The Main Idea, was to create a Personal Blog that has two Differnt Post Types.
One Single Entry Blog Post. And on Project Posts that Accumulates Multiple Posts under a Common Goal.

The Goal was to make it Possible to just render Markdown Files in either one of those Categorys and in a Way that its easy to just drag and drop Markdown Files from my Favorite Markdown Editor with some minor Editing.

This Allows me to Document Projects as Extensivly and easy as i want, while still beeing able to Showcase it easily.

Thanks to Mdsvex i can even Render Svelte Components inside the Markdown Files again if Wanted, giving me even more creative Freedom.
For an Example see the 3D Rendering Blog Post, where i included the Javascript Canvas Renderer in the Markdown Post.

# Getting Started Developing Locally

Once you've installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building / Releasing

### Automatic Deploy to netlify

For now: [![Netlify Status](https://api.netlify.com/api/v1/badges/8a76cfad-7fb2-42b4-a6ae-2b5d5685fe25/deploy-status)](https://app.netlify.com/projects/genei180/deploys)

### Future upgrade to Containers and Selfhosting 

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

### Using a Docker Container Instead

In order to build and run this Website in a Docker Container run:

Build:
```bash
docker build -t genei180-website .
```

Run:
```bash
docker run -p 3000:3000 genei180-website
```

Now you should be able to visit locally in your Browser:
```bash
http://localhost:3000
```

