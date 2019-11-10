import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

export default (views, config) => {
    config = {
        root: config.root || '',
        init: config.init || false,
    };
    const routes = [];
    const { root, init } = config;
    Object.keys(views).forEach(key =>
        routes.push({
            name: key,
            component: views[key].component,
            props: views[key].props,
            path: views[key].path || `/${key.toLowerCase()}`,
            exact: views[key].exact || false,
            restrict: views[key].restrict || false,
        })
    );

    const withRouter = child =>
        init ? <BrowserRouter>{child}</BrowserRouter> : child;

    return withRouter(
        <Switch>
            {routes.map(({ component, path, restrict, exact }, i) => (
                <Route
                    key={i}
                    exact={exact}
                    path={root + path}
                    render={props =>
                        restrict ? (
                            <Redirect
                                to={{
                                    pathname: '/',
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
