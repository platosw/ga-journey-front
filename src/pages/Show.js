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

    const removeBlog = () => {
        props.deleteBlog(blog._id);
        props.history.push('/blog');
    };

    return (
        <div className="blog">
            <h1>{blog.title}</h1>
            <button id='delete' onClick={removeBlog}>
                DELETE
            </button>
            <p>{blog.text}</p>
            <img src={blog.img} alt={blog.title} />
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    value={editForm.title}
                    name="title"
                    placeholder="Title"
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    value={editForm.text}
                    name="text"
                    placeholder="Contents"
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    value={editForm.img}
                    name="img"
                    placeholder="Image URL"
                    onChange={handleChange}
                />
                <input type="submit" value="Update Blog" />
            </form>
        </div>
    );
}

export default Show;