import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Index from '../pages/Index.js';
import Show from '../pages/Show.js';
import Intro from '../pages/Intro.js';
import Block from '../pages/Block.js';
// import Nav from '../components/Nav.js';

function Main(props) {
    const [blogs, setBlogs] = useState(null);

    // const URL = 'https://ga-journey.herokuapp.com/blog';
    const URL = 'http://localhost:3001/blog';

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
            body: JSON.stringify(blog), // 이 코드가 무엇인지 찾아볼 것
        });
        // update list of blogs
        getBlogs();
    };

    const updateBlog = async (blog, id) => {
        // make put request to create blog
        await fetch(`${URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'Application/json',
            },
            body: JSON.stringify(blog),
        });
        // update list of blogs
        getBlogs();
    };

    const deleteBlog = async (id) => {
        // make delete request to create people
        await fetch(`${URL}/${id}`, {
            method: 'DELETE',
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
                <Route exact path='/blog/block'>
                    <Block />
                </Route>
                <Route path='/blog/:id' render={(rp) => (
                    <Show
                        blogs={blogs}
                        updateBlog={updateBlog}
                        deleteBlog={deleteBlog}
                        {...rp} 
                    />
                )}>
                </Route>
            </Switch>
        </main>
    );
}

export default Main;