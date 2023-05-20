import { Link, useParams } from 'react-router-dom';
import bookService from '../../services/bookService';
import { useState, useEffect } from 'react'
import { useAuthContext } from '../../contexts/AuthContext';
import './Details.css'

const Details = () => {
    const { user } = useAuthContext();

    const [book, setBook] = useState([]);
    const params = useParams('id')

    useEffect(() => {
        bookService.getBookDetails(params.id).then(
            res => {
                setBook(res)
            }
        )
    }, [])

    return (
        <div className="details">
            <img src={book.imageUrl} alt="" />
            <div className="info">
                <h2>Title: {book.title}</h2>
                <p>Description: {book.description}</p>
                <p>Price:{book.price}</p>
                <Link to={"/addToCart/" + book._id}>AddToCart</Link>
                {
                    user.role == "Admin" ?
                        <div className='admin-btns'>
                            <Link to={"/deleteBook/" + book._id}>Delete</Link>
                            <Link to={"/editBook/" + book._id}>Edit</Link>
                        </div>
                        : null
                }
            </div>
        </div>
    )
}

export default Details;