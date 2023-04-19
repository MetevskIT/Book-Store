import { Link, useParams } from 'react-router-dom';
import bookService from '../../services/bookService';
import { useState, useEffect } from 'react'
import './Details.css'

const Details = ()=>{

    const [book, setBook] = useState([]);
    const params = useParams('id')

    useEffect(() => {
        bookService.getBookDetails(params.id).then(
            res => {
                setBook(res)
            }
        )
    }, [])

    return(
        <div className="details">
        <img src={book.imageUrls} alt=""/>
        <div className="info">
            <h2>{book.title}</h2>
            <p>{book.description}</p>
            <p>Price:{book.price}</p>
            <Link to={"/addToCart/"+book._id}>AddToCart</Link>
        </div>
    </div>
    )
}

export default Details;