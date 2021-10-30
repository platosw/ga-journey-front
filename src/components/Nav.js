import { Link } from 'react-router-dom';

function Nav(props) {
    return (
        <nav className="nav">
            <Link to='/blog'>HOME</Link>
            <Link>HTML</Link>
            <Link>CSS</Link>
            <Link>JavaScript</Link>
            <Link>Node.js</Link>
            <Link>React</Link>
            <Link>Python</Link>
        </nav>
    );
}

export default Nav;