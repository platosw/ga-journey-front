import { Route, Switch, Link } from 'react-router-dom';
import Index from '../pages/Index.js';
import Show from '../pages/Show.js';
import Intro from '../pages/Intro.js';
// import Nav from '../components/Nav.js';

function Main(props) {
    return (
        <div className="main">
            <main>
                <Switch>
                    <Route exact path='/'>
                        <Intro />
                    </Route>
                    <Route exact path='/blog'>
                        {/* <Nav /> */}
                        <Index />
                    </Route>
                    <Route path='/blog/:id' render={(rp) => <Show {...rp} />}>
                    </Route>
                </Switch>
            </main>
        </div>
    );
}

export default Main;