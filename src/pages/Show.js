import { useState } from 'react';


function Show (props) {
    const id = props.match.params.id;
    const blogs = props.blogs;
    const blog = blogs.find((b) => b._id === id);

    // state for form
    const [editForm, setEditForm] = useState(blog);

    // handleChange function for form
    const handleChange = (e) => {
        setEditForm((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    }

    // handleSubmit for form
    const handleSubmit = (e) => {
        e.preventDefault();
        props.updateBlog(editForm, blog._id);
        // redirect blogs back to index
        props.history.push('/blog');
    };

    return <h1>Show</h1>;
}

export default Show;