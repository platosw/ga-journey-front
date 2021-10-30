import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Index from '../pages/Index.js';
import Show from '../pages/Show.js';
import Intro from '../pages/Intro.js';
// import Nav from '../components/Nav.js';

function Main(props) {
    const [blogs, setBlogs] = useState(null);

    const URL = 'https://ga-journey.herokuapp.com/blog';

    const getBlogs = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setBlogs(data);
    };

    const createBlog = async (blog) => {
        // make post request to create blog
        await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json',
            },
            body: JSON.stringify(blog),
        });
        // update list of blogs
        getBlogs();
    };

    useEffect(() => getBlogs(), []);

    return (
        <main>
            <Switch>
                <Route exact path='/'>
                    <Intro />
                </Route>
                <Route exact path='/blog'>
                    {/* <Nav /> */}
                    <Index blogs={blogs} createBlog={createBlog}>
                    </Index>
                </Route>
                <Route path='/blog/:id' render={(rp) => <Show {...rp} />}>
                </Route>
            </Switch>
        </main>
    );
}

export default Main;