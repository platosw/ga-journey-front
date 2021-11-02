import { Link } from 'react-router-dom';

function Intro(props) {
    return (
        <div className="intro">
            <h1 style={{ color: '#61dafb' }}>Welcome to the GA Journey Blog</h1>
            <p style={{ color: '#61dafb' }}>This is my blog of the GA SEIR Sep.7</p><br />
            <button>
                <Link to='/blog' id='enter'>ENTER</Link>
            </button>
        </div>
    );
}

export default Intro;