import React from 'react'
import { HashRouter, Route,Switch,Redirect } from 'react-router-dom';
import Bundle from './bundle'
const AppContainer = () => (
    <Bundle load={() => import('../container/AppContainer/AppContainer')}>
        {(AppContainer) => <AppContainer />}
    </Bundle>
)
const NotFoundPage = () => (
    <Bundle load={() => import('../container/NotFoundPage/NotFoundPage')}>
        {(NotFoundPage) => <NotFoundPage />}
    </Bundle>
)
const RootRouter = () => (
    <HashRouter>
            <Switch>
                <Route  path="/" exact component={AppContainer} />
                <Route path="/NotFoundPage" exact component={ NotFoundPage }/>
                <Redirect to="/" />
            </Switch>
    </HashRouter>
);
export default RootRouter;