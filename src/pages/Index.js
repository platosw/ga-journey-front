import { useState } from 'react';
import { Link } from 'react-router-dom';

function Index(props) {
    // state to hold formdata
    const [newForm, setNewForm] = useState({
        title: "",
        text: "",
        img: "",
    });

    // handleChange function for form
    const handleChange = (e) => {
        setNewForm((prevState) => ({
            ...prevState,
            [e.target.title]: e.target.value,
        }));
    };

    // handle submit function for form
    const handleSubmit = (e) => {
        e.preventDefault();
        props.createBlog(newForm);
        setNewForm({
            title: "",
            text: "",
            img: "",
        });
    };

    // loaded function
    const loaded = () => {
        return props.blogs.map((blog) => (
            <div key={blog._id} className="blog">
                <Link to={`/blog/${blog._id}`}>
                    <h1>{blog.title}</h1>
                </Link>
            </div>
        ));
    };

    const loading = () => {
        return <h1>Reading data...</h1>
    };

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    value={newForm.title}
                    name="title"
                    placeholder="Title"
                    onChange={handleChange}
                />
                <input 
                    type="text" 
                    value={newForm.text}
                    name="text"
                    placeholder="Contents"
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    value={newForm.img}
                    name="img"
                    placeHolder="Image URL"
                    onChange={handleChange}
                />
                <input type="submit" value="Create Contents" />
            </form>
            {props.blogs ? loaded() : loading()}
        </section>
    );
}

export default Index;