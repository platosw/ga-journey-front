import { Link } from 'react-router-dom';

function Intro(props) {
    return (
        <div className="intro">
            <h1>Welcome to the GA Journey Blog</h1>
            <p>This is my blog of the GA SEIR Sep.7</p><br />
            <Link to='/blog'>
                <button>ENTER</button>
            </Link>
        </div>
    );
}

export default Intro;