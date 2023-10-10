## 🚀 Quick start

1.  **Start developing.**

    Navigate into the site’s directory and start it up.

    ```shell
    cd schema/
    npm install
    npm run develop
    ```

1.  **Open the code and start customizing!**

    Your site is now running at http://localhost:8000!

    Edit any of the files in `src/pages` or `schema` to see the site update in real time.

1.  **Learn more about Gatsby**

    - [Documentation](https://www.gatsbyjs.com/docs/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)

    - [Tutorials](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)

    - [Guides](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)

    - [API Reference](https://www.gatsbyjs.com/docs/api-reference/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)

    - [Plugin Library](https://www.gatsbyjs.com/plugins?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)

    - [Cheat Sheet](https://www.gatsbyjs.com/docs/cheat-sheet/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see.

    .
    ├── .cache
    ├── node_modules
    ├── public
    ├── schema
    ├── src
    ├── static
    ├── svg
    ├── .gitignore
    ├── gatsby-config.ts
    ├── gatsby-node.ts
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    ├── README.md
    └── tsconfig.json

1.  **`/.cache`**: This directory contains Gatsby's build cache. You can ignore it/try deleting it if you're having issues.

1.  **`/node_modules`**: This directory contains all of the modules of code that this project depends on (npm packages) that are automatically installed.

1.  **`/public`**: If you run `npm run build`, the production build of the site ends up here.

1.  **`/schema`**: Probably the most important files! This is where the schema itself is defined in the [GraphQL Schema language](https://graphql.org/learn/schema/). Edit the files within to see changes on your local site.

1.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of the site (what you see in the browser) including the page templates and HTML layouts. `src` is a convention for “source code”.

1.  **`/static`**: This directory contains files available for download from the site.

1.  **`/svg`**: This directory contains a couple of small icons seen on the site.

1.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

1.  **`gatsby-config.ts`**: This is the main configuration file for a Gatsby site. This is where information about the site (metadata) like the site title and description live, along with which Gatsby plugins it includes, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

1.  **`gatsby-node.ts`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/). This site uses these APIs to dynamically create additional pages.

1.  **`LICENSE`**: This site is licensed under the MIT license.

1.  **`package-lock`** (See `package.json` below). This is an automatically generated file based on the exact versions of the npm dependencies that were installed for the project. **(You won’t change this file directly).**

1.  **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for the project.

1.  **`README.md`**: This file!

1.  **`tsconfig.json`**: Configures the [TypeScript](https://www.typescriptlang.org/) compiler with normal default options.

## 💫 Deploy

The repository is configured to automatically deploy the `master` branch to [schema.quizbowl.technology](https://schema.quizbowl.technology) on every change; any branch you create will also be deployed to a unique URL every time you push to it.

There's probably no case in which you need to do this, but you can deploy your own local copy to another URL once you have `vercel` [configured for yourself](https://vercel.com/):

```sh
$ vercel
```
