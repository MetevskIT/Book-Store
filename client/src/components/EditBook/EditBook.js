import { useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import bookService from "../../services/bookService";

const EditBook = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const [categories, setCategories] = useState([])
    const [current, setCurrent] = useState({})

    const params = useParams('id');
    useEffect(() => {
        if (user.role != "Admin") {
            navigate('/unauthorize')
        }
        bookService.getBookDetails(params.id).then(res => setCurrent(res))
        bookService.getCategories().then(res => {
            setCategories(res)
        })
    }, [])

    const onSubmit = (e) => {
        e.preventDefault();
        const {
            title,
            description,
            price,
            genre,
            imageUrl
        } = Object.fromEntries(new FormData(e.target));
        bookService.editBook(params.id, title, price, description, genre, imageUrl)
            .then(res => {
                navigate(`/details/${res._id}`)
            });
    }

    return (
        <>
            <div className="formData">
                <h1 className="form-title">EditBook</h1>
                <form onSubmit={onSubmit}>
                    <label htmlFor="title">Title</label><br />
                    <input type="text" id="title" name="title" placeholder="Title" required defaultValue={current.title} /><br />

                    <label htmlFor="price">Price</label><br />
                    <input type="text" id="price" name="price" placeholder="Price" required defaultValue={current.price}/><br />

                    <label htmlFor="description">Description</label><br />
                    <input type="text" id="description" name="description" placeholder="Description" required defaultValue={current.description}/><br />

                    <label htmlFor="genre">Choose a gente:</label>
                    <select id="genre" name="genre">
                        {categories.map(x => <option key={x._id} value={x._id}>{x.bookGenre}</option>)}


                    </select>

                    <label htmlFor="imageUrl">imageUrl</label><br />
                    <input type="text" id="imageUrl" name="imageUrl" placeholder="imageUrl" required defaultValue={current.imageUrl} /><br /><br />

                    <input type="submit" value="Submit" />
                </form>
            </div>
        </>
    );
}

export default EditBook