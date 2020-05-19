# NH Proposal Generator

<a href="https://app.netlify.com/start/deploy?repository=https://github.com/northhighland/proposal-gen&amp;stack=cms"><img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify"></a>

[![Netlify Status](https://api.netlify.com/api/v1/badges/df323891-3174-4904-a1df-d86fbe051f80/deploy-status)](https://app.netlify.com/sites/nh-proposal-gen/deploys)

This repo contains an example proposal website that is built with [Gatsby](https://www.gatsbyjs.org/), and [Netlify CMS](https://www.netlifycms.org): **[Demo Link](https://hungry-saha-c402bb.netlify.app/)**.

It follows the [JAMstack architecture](https://jamstack.org) by using Git as a single source of truth, and [Netlify](https://www.netlify.com) for continuous deployment, and CDN distribution.

## To Do

- mobile view fixes if needed

## Features

- A simple landing page built with Netlify CMS
- Editabe Pages
- Basic directory organization
- Blazing fast loading times thanks to pre-rendered HTML and automatic chunk loading of JS files
- Uses `gatsby-image` with Netlify-CMS preview support
- Separate components for everything
- Netlify deploy configuration
- Netlify function support, see `lambda` folder
- Perfect score on Lighthouse for SEO, Accessibility and Performance (wip:PWA)
- ..and more

## Prerequisites

- Node (I recommend using v8.2.0 or higher)
- [Gatsby CLI](https://www.gatsbyjs.org/docs/)
- [Netlify CLI](https://github.com/netlify/cli)

## Getting Started (Recommended) ✅

Netlify CMS can run in any frontend web environment, but the quickest way to try it out is by running it on a pre-configured starter site with Netlify. Use the deploy button above to build and deploy your own copy of this repository.

After clicking that button, you’ll authenticate with GitHub and choose a repository name. Netlify will then automatically create a repository in your GitHub account with a copy of the files from the template.

Next, it will build and deploy the new site on Netlify, bringing you to the site dashboard when the build is complete.

Next, you’ll need to set up Netlify’s Identity service to authorize users to log in to the CMS.

### Access and Run Locally

Pulldown a local copy of this repo

```terminal
yarn
netlify dev # or ntl dev
```

This uses the new [Netlify Dev](https://www.netlify.com/products/dev/?utm_source=blog&utm_medium=netlifycms&utm_campaign=devex) CLI feature to serve any functions you have in the `lambda` folder.

To test the CMS locally, you'll need to run a production build of the site:

```terminal
npm run build
netlify dev # or ntl dev
```

## Getting Started (Without Netlify)

```terminal
yarn
yarn develop
```

### Setting up the CMS

Follow the [Netlify CMS Quick Start Guide](https://www.netlifycms.org/docs/quick-start/#authentication) to set up authentication, and hosting.

### Netlify Commands

`ntl init` to run through setup

`netlify open --admin` opens netlify admin

`netlify open --site` opens site url

## Debugging

Windows users might encounter `node-gyp` errors when trying to npm install.
To resolve, make sure that you have both Python 2.7 and the Visual C++ build environment installed.

```terminal
npm config set python python2.7
npm install --global --production windows-build-tools
```

[Full details here](https://www.npmjs.com/package/node-gyp 'NPM node-gyp page')

MacOS users might also encounter some errors, for more info check [node-gyp](https://github.com/nodejs/node-gyp). We recommend using the latest stable node version.
