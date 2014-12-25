Plain simple TODO app
===

Written with [AngularJS](http://angularjs.org), styled with [Bootstrap](http://getbootstrap.com/), [Flatly theme](http://bootswatch.com/flatly/).

[Live demo](http://tracau.nhanh.de/todogular/)

![Screenshot](./screenshot2.png)

### Install

Install [nvm](https://github.com/creationix/nvm)

```
curl https://raw.githubusercontent.com/creationix/nvm/v0.21.0/install.sh | bash
```

Install stable [nodejs](http://nodejs.org/) version:

```
nvm install stable
nvm use stable
```

(Optional) Update [npm](https://www.npmjs.com/) to latest version:

```
npm install npm -g
```

Install dependent packages:

```
npm install
```


### Run tests

End-to-end tests:

```
npm run protractor
```
	
 Unit tests:

```
npm test
```

### Generate optimized version


Install [grunt](http://gruntjs.com/):

```
npm install -g bower
bower install grunt
```

Generate optimized app into `dist` folder:

```
grunt
```