import {Link} from 'react-router-dom';

function Index(props) {
    return (
        <div className="index">
            <h1>Home</h1>
            <input type="text" placeholder="Title" />
            <input type="text" placeholder="Contents" />
            <input type="text" placeholder="Image URL" />
            <input type="submit" value="CREATE" /><br />
            <Link to='/blog/:id'>
            <button>SHOW PAGE</button>
            </Link>
        </div>
    );
}

export default Index;