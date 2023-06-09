import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import bookService from "../../services/bookService";

const CreateBook = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const [categories, setCategories] = useState([])

    useEffect(() => {
        if (user.role!="Admin") {
            navigate('/unauthorize')
        }

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
        bookService.createBook(title, price, description, genre, imageUrl, user.accessToken)
            .then(res => {
                navigate(`/details/${res._id}`)
            });
    }

    return (
        <>
            <div className="formData">
                <h1 className="form-title">CreateBook</h1>
                <form onSubmit={onSubmit}>
                    <label htmlFor="title">Title</label><br />
                    <input type="text" id="title" name="title" placeholder="Title" required /><br />

                    <label htmlFor="price">Price</label><br />
                    <input type="text" id="price" name="price" placeholder="Price" required /><br />

                    <label htmlFor="description">Description</label><br />
                    <input type="text" id="description" name="description" placeholder="Description" required /><br />

                    <label htmlFor="genre">Choose a gente:</label>
                    <select id="genre" name="genre">
                        {categories.map(x => <option value={x._id}>{x.bookGenre}</option>)}


                    </select>

                    <label htmlFor="imageUrl">imageUrl</label><br />
                    <input type="text" id="imageUrl" name="imageUrl" placeholder="imageUrl" required /><br /><br />

                    <input type="submit" value="Submit" />
                </form>
            </div>
        </>
    );
}

export default CreateBook