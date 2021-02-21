import { Route, Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Data from './pages/Data';
import F0F from './pages/404';
import AreaSelect from './pages/AreaSelect';
import AddTime from './pages/AddTime';

export const browserHistory = createBrowserHistory();

export default function App() {
    return (
        <Router history={browserHistory}>
            <Switch>
                <Route path="/data">
                    <Data />
                </Route>
                <Route path="/area-select">
                    <AreaSelect />
                </Route>

                <Route path="">
                    <AddTime />
                </Route>
            </Switch>
        </Router>
    );
}
