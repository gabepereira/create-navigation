import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

const withRouter = child => <BrowserRouter>{child}</BrowserRouter>;

export default (views, config = Object) => {
    Object.assign(config, {
        root: config.root || '',
        exact: config.exact || false,
        restrict: {
            is: false,
            redirect: '/',
        },
    });
    const routes = [];
    const { root, exact, restrict } = config;
    Object.keys(views).forEach(i => {
        routes.push({
            name: i,
            component: views[i].component,
            props: views[i].props,
            path: views[i].path || `/${i.toLowerCase()}`,
            exact: views[i].exact || exact,
            restrict:
                views[i].restrict instanceof Object
                    ? {
                          is: views[i].restrict.is || restrict.is,
                          redirect: views[i].restrict.redirect || null,
                      }
                    : views[i].restrict
                    ? {
                          ...restrict,
                          is: true,
                      }
                    : restrict,
        });
    });

    return (
        <Switch>
            {routes.map(({ component, path, restrict, exact }, i) => (
                <Route
                    key={i}
                    exact={exact}
                    path={root + path}
                    render={props =>
                        restrict.is ? (
                            <Redirect
                                to={{
                                    pathname: restrict.redirect,
                                    state: { from: props.location },
                                }}
                            />
                        ) : (
                            React.cloneElement(component, { ...props })
                        )
                    }
                />
            ))}
        </Switch>
    );
};

export { withRouter };
