# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator. 


## Development Workflow
See CONTRIBUTING.md for contribution guidelines. 

This repo is connected to an Amplify application that deploys when the main branch is updated. 

In order to run the website locally and make updates:
1. Be sure you are using node version 18.0.0 or later, perhaps by running `nvm use v18.0.0`
2. Clone the repo
3. run `npm install` to install dependencies
4. run `npm run start` to launch a local web server and run the site (hosted on localhost:3000)

### Publishing changes
1. run `git checkout -B my-new-feature` 
2. make changes as needed in your own branch
3. run `npm run build` to be sure that the site builds without error
4. push your changes and create a new pull request to have them reviewed and merged
