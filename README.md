# Tournament Schema Website

## 🚀 Quick start

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```sh
    cd path-to-qb-schema/
    yarn && yarn develop
    ```

1.  **Open the source code and start editing!**

    The site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `qb-schema` directory in your code editor of choice and edit `src/pages/index.md`. Save your changes and the browser will update in real time!

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see.

    .
    ├── node_modules
    ├── src
    ├── static
    ├── svg
    ├── .eslintrc.json
    ├── .gitignore
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── LICENSE
    ├── now.json
    ├── package.json
    ├── README.md
    ├── schema.graphql
    └── yarn.lock

1.  **`/node_modules`**: This directory contains all of the modules of code that this project depends on (npm packages) that are automatically installed.

1.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of the site (what you see in the browser) including the page templates and HTML layouts. `src` is a convention for “source code”.

1.  **`/static`**: This directory contains files available for download from the site.

1.  **`/svg`**: This directory contains a couple of small icons seen on the site.

1.  **`.eslintrc.json`**: This is the configuration file for [ESLint](https://eslint.org). ESLint is a tool to enforce JavaScript coding standards.

1.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

1.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where information about the site (metadata) like the site title and description live, along with which Gatsby plugins it includes, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

1.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/). This site uses these APIs to dynamically create additional pages.

1.  **`LICENSE`**: This site is licensed under the MIT license.

1.  **`now.json`**: This is the configuration file for deploying the site to [now.sh](https://now.sh). See "Deploy" below.

1.  **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for the project.

1.  **`README.md`**: This file!

1.  **`schema.graphql`**: Probably the most important file! This is where the schema itself is defined in the [GraphQL Schema language](https://graphql.org/learn/schema/). Edit this file and restart the development server to see changes on your local site.

1.  **`yarn.lock`** (See `package.json` above). This is an automatically generated file based on the exact versions of the npm dependencies that were installed for your project. **(You won’t change this file directly).**

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on its website](https://www.gatsbyjs.org/). Here are some places to start:

- **For most developers, they recommend starting with their [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to their documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## 💫 Deploy

The main repository is configured to automatically deploy the `master` branch to [schema.quizbowl.technology](https://schema.quizbowl.technology) on every change. You can deploy your own copy once you have `now` [configured for yourself](https://zeit.co/now/):

```sh
$ now
```
