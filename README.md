# Webpack-Workflow
This is just a repository in which I try to build my own Webpack workflow.

## Changes 23rd of October, 2017
- Removed a bunch of unnecessary stuff from Git's tracking
- Added MaterializeCSS, uncomment in base.scss if you want to use it.
 - Also added HammerJS manually, Materialize depends on it.
 - also added jQuery, Materialize also depends on this.
- Added Webpack aliases
 - Use a tilde `~` in Sass files if you want Webpack to process the path.
 - Use a tilde `~` in Pug files if you want Webpack to process the path.
- Added support for including standard CSS files
- Running `npm run build:network` will now allow you to access your files on your local network if you don't block this in your firewall.
- Removed a bunch of unnecessary JavaScript that I was messing around with.
- Updated packages

## The develop branch
The develop branch is most likely the most up-to-date version of this repository at all times. I will only push to master when I am happy with the implementation of something.