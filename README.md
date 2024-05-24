# About

This is a repo to reproduce the problem with the ion-checkbox with a link(s) and when clicking on a link also select/unselect the checkbox which should not happen based on this example from the ionic docs https://ionicframework.com/docs/api/checkbox#links-inside-of-labels

# Prerequisities

- [Node.js](http://nodejs.org/) - install node version 20.13.1 (see the installation instructions on the site) or issue `nvm install` (if nvm is used) which will install the required node version
  NOTE: It is recommended to install and use nvm (see https://github.com/creationix/nvm) and install node 18.13.0 by issuing `nvm install v20.13.1` or `nvm install` (the latter command will also install 20.13.1 as listed in .nvmrc)
- (if using nvm) Switch to node 20.13.1 by issuing `nvm use 20.13.1` (you may want to make this default node version) or issuing `nvm use` (the latter command will use 20.13.1 as listed in .nvmrc)
- [npm](https://www.npmjs.com/) - install the latest npm version 10.x (for example, 10.6.0 by issuing commands `npm install -g npm@10.6.0`)
- [Ionic CLI](http://ionicframework.com/docs/cli/install.html) - install the latest stable ionic cli version 7.2.x (for example, 7.2.0 by issuing commands `npm install -g @ionic/cli@7.2.0`)

# Initial setup

1. clone the source code repository
2. change to project repository directory (the directory where you cloned the repo)
3. execute the command `npm install`

# Steps to reproduce
1. issue ``ionic serve``
2. tap on the link in the checkbox on the home page
NOTE: the checkbox will be toggle, even though it should not based on the ionic docs - see https://ionicframework.com/docs/api/checkbox#links-inside-of-labels
