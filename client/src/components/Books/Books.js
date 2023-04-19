import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import bookService from '../../services/bookService';
import Book from '../Book/Book';
import './Books.css'

const Books = () => {
    const [books, setBooks] = useState([]);
    const params = useParams('id')

    useEffect(() => {
        bookService.getBooksByCategories(params.id).then(
            res => {
                setBooks(res)
            }
        )
    }, [])

    return (
        <div className="newest-books">
        <h1 className="newest-books-title">Books</h1>
        <section className="books">
            {books.map(x => <Book key={x._id} id={x._id} title={x.title} description={x.description} price={x.price} imageUrl={x.imageUrls[0]} details={true} />)}
        </section>
        </div>
    )
}
export default Books;