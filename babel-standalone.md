# Running Babel standalone in a WCM component

## Add @babel/standalone to the theme
In addition to [adding React and ReactDOM](./README.md#add-react), we will also need to add babel to the theme so we can use JIT transpiling on the browser.
It is recommended to use Node to pre-compile your React components / JSX. See the [@babel/standalone documentation](https://babeljs.io/docs/en/babel-standalone) for more information.

- Create a new folder for the babel javascript file (Download from https://unpkg.com/@babel/standalone/babel.min.js or https://unpkg.com/@babel/standalone/babel.js) in your theme folder.

    ![web developer dashboard babel 1](./img/wdd-babel-1.png)

- Add the module to your React profile (Here I made a separate React-Babel Profile) and push the theme to the server.

    ![web developer dashboard babel 2](./img/wdd-babel-2.png)    
    
    ![web developer dashboard babel 3](./img/wdd-babel-3.png)

- Make a new page on your portal server and associate the new profile.

    ![web developer dashboard babel 4](./img/wdd-babel-4.png)
    
    ![web developer dashboard babel 5](./img/wdd-babel-5.png)

- Add a new HTML component to WCM, add your code and reference it on the new page.

    ![web developer dashboard babel 6](./img/wdd-babel-6.png)
    
    ![web developer dashboard babel 7](./img/wdd-babel-7.png)

    ![web developer dashboard babel 8](./img/wdd-babel-8.png)
