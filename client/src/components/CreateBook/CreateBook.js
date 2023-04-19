import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import bookService from "../../services/bookService";

const CreateBook = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const [categories, setCategories] = useState([])

    useEffect(() => {

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
            imageUrls
        } = Object.fromEntries(new FormData(e.target));
        bookService.createBook(title, price, description, genre, imageUrls, user.accessToken)
            .then(res => {
                console.log(res);
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

                    <label htmlFor="imageUrls">imageUrl</label><br />
                    <input type="text" id="imageUrls" name="imageUrls" placeholder="imageUrls" required /><br /><br />

                    <input type="submit" value="Submit" />
                </form>
            </div>
        </>
    );
}

export default CreateBook