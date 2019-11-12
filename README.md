<div align="center">
<br/>
<br/>
<h2><strong>🚀 create-navigation 😄</strong></h2>
<p>An easy way to add <strong>routing</strong> to your React application!</p>
<br/>
<br/>
</div>

![npm code size in bytes](https://img.shields.io/bundlephobia/min/create-navigation)
![npm](https://img.shields.io/npm/dw/create-navigation)
![GitHub stars](https://img.shields.io/github/stars/gabepereira/create-navigation?style=social)

## Getting started

**create-navigation** is a basic yet amazing component to make routing an easy task.
First of all, install it into your project using npm or yarn:

```ssh
npm install create-navigation --save

yarn add create-navigation
```

Import **create-navigation** into your application and start routing:

```jsx
import createNavigation, { withRouter } from 'create-navigation';
import { Home, About, Login } from './my-awesome-views';

const App = () => {
    return withRouter(
        createNavigation({
            Home: {
                path: '/home',
                component: <Home props="foo" />,
            },
            About: {
                restrict: true,
                component: <About />,
            },
            Login: {
                path: '/',
                exact: true,
                component: <Login />,
            },
        })
    );
};

export default App;
```

That's it! Now just access the path of the components and see them being rendered.

## Documentation

## Authors

-   **Gabriel Pereira** - [gabepereira](https://github.com/gabepereira)
