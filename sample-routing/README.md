# HCL DX React Script App Routing Example

## Overview

This example app shows how routing in React can be used in Script App portlets.

React supports two methods of routing, hash routing and browser roouting:

### Hash Routing
Uses a URL hash such as example.com/#/react/route. This puts no limitations on supported browsers or web server. Since server-side routing is independent from client-side routing this is the preferred method on HCL DX.

On the client side, window.location.hash is parsed by the React router and renders the component it was configured to render.


### Browser Routing
Uses the history API and is therefore unavailable for legacy browsers (IE 9 and lower and contemporaries). Client-side React application is able to maintain clean routes like example.com/react/route but this means all routes have to be configured on the web server to point to the appropriate page in DX.

On client side, window.location.pathname is parsed by React router and then renders the component that it was configured to render for the route.

Since this type of routing requires potentially complex configuration on the ingress point and may also lead to other complexities with HCL DX dynamic nature, Hash Routing is recomended.

For more information see [React Hash Router](https://reactrouter.com/en/main/router-components/hash-router) and [React Browser Router](https://reactrouter.com/en/main/router-components/browser-router).

This simple sample uses Hash Router as seen in the [index.jsx](src/index.jsx):

```
import React from 'react'
import { render } from 'react-dom'
import { HashRouter } from 'react-router-dom'
import App from './components/App.jsx';

render((
  <HashRouter>
    <App />
  </HashRouter>
), document.getElementById('dxroutingroot'));
```
and the [Main.jsx](src/components/Main.jsx):
```
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Posts from './Pages/Posts.jsx'
import About from './Pages/About.jsx'

const Main = () => (
  <main>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/posts' element={<Posts/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
  </main>
)

export default Main
```

For more information on deployment see the [basic sample](../sample-basic/README.md).

The project structure is as follows:

- **build**
  - _Output folder. This location needs to be pointed to by the dxContentRoot variable in the .dxclient.env file._
- **src**
  - **assets**
    - _Images etc._
  - **css**
    - _CSS Files_
  - **components**
    - _React Components_
  - vendor.js < _Load 3rd party libraries here_

Run `npm start` to start a local Webpack dev server. Alternatively you can use the run option in the HCL DX Web Developer Dashboard.

Run `npm run build` to build to the build folder.

The example uses the HCL DX 9.5 docker container but any DX instance can be used.

## Caution

Before version 201 there were some issues that have since been addressed as well as needing to add React and React Dom to your theme manually.

If you would like to add your own React files or need instructions for environments before CF 201 please review this document: [PRE-CF201.md](../sample-basic/PRE-CF201.md)

## Setup

1. Ensure you have run the basic installation steps see the main [README.md](../README.md)

2. Run npm install at the root of the project to install Babel and its dependencies. _You may need to run `npm install --legacy-peer-deps` and `npx -p npm@6 npm audit fix `_ to install the dependencies.

3. Adjust the dx variables in `.dxclient.env` to your environment (Review the dxContentRoot especially. An example is included for both Windows and Linux/Mac):

```
dxProtocol=http
dxHostName=localhost
dxPort=10039
dxUserName=wpsadmin
dxPassword=wpsadmin
dxContentHandlerPath=/wps/mycontenthandler
dxVirtualPortalContext=
dxProjectContext=
dxMainHtmlFile=index.html
dxSiteArea=Script Application Library/Script Applications/
dxContentName=sampleReactApplication
dxContentTitle=Sample React Script Application
# dxContentRoot=/Users/me/git/sample-react-script-application/build
dxContentRoot=C:\dx\sample-react-script-application\build
verbose=false
```

4. Ensure the following scripts are defined in your `package.json`:

```
  "scripts": {
    "start": "webpack-dev-server --config  webpack.dev.js --open",
    "check-env": "node -e 'console.log(process.env)' | grep npm",
    "build": "webpack --config  webpack.prod.js",
    "dx:deploy": "node dxclient.mjs "
  },
```

5. Run:

   - `npm run start` to run the project in a local lightweight http server
   - `npm run build` to build to the build folder
   - `npm run dx:deploy` to build and deploy the project to your dx server

6. Log into your HCL DX server and create a new page. Choose the `Deferred with React` theme profile that includes React (depending on you CF level this may change or you may provide your [own module](../sample-basic/PRE-CF201.md)) in the advanced page settings. You should see the react-meme application listed under Script Applications. Add it to the page and exit edit mode.

TODO: New Images here

![web developer dashboard themes](../sample-basic/img/wdd-profile-1.png)
![web developer dashboard themes](../sample-basic/img/wdd-profile-2.png)
![web developer dashboard themes](../sample-basic/img/wdd-profile-3.png)
![web developer dashboard themes](../sample-basic/img/wdd-profile-4.png)

7. Edit the code and run `npm run dx:deploy`. Your changes will be uploaded to the server.

**Notes:**

You can edit the scrip application on the portal server, but since we are a packager/minifier, you may want to change the webpack.prod.js file before debugging inside DX. Change:

    mode: "production",

to

    mode: "development",
    devtool: "none",

and remove the `optimization:` section.
