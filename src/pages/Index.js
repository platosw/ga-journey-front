import {Link} from 'react-router-dom';

function Index(props) {
    // loaded function
    const loaded = () => {
        return props.blogs.map((blog) => (
            <div key={blog._id} className="blog">
                <Link to={`/blog/${blog._id}`}>
                    <h1>{ blog.title }</h1>
                </Link>
            </div>
        ));
    };

    const loading = () => {
        return <h1>Reading data...</h1>
    };

    return props.blogs ? loaded() : loading();;
}

export default Index;