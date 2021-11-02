import { Link } from 'react-router-dom';

function Nav(props) {
    return (
        <nav className="nav">
            <Link to='/blog'>HOME</Link>
            <Link to='/blog/block'>HTML</Link>
            <Link to='/blog/block'>CSS</Link>
            <Link to='/blog/block'>JavaScript</Link>
            <Link to='/blog/block'>Node.js</Link>
            <Link to='/blog/block'>React</Link>
            <Link to='/blog/block'>Python</Link>
        </nav>
    );
}

export default Nav;