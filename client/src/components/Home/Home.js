import { useEffect, useState } from "react";
import bookService from '../../services/bookService'
import './Home.css'
import Book from '../Book/Book'

const Home = () => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        bookService.getLastThenBooks()
            .then(result => {
                console.log(result);
                setBooks(result)
            })
    }, [])
    return (
        <>
            <div className="cover">
                <img src='cover.jpg' />
            </div>
            <div className="newest-books">
                <h1 className="newest-books-title">Newest Books</h1>
                <section className="books">
                    {books.length>0?
                    books.map(x => 
                        <Book key={x._id} id={x._id} title={x.title} description={x.description} price={x.price} imageUrl={x.imageUrls} details={true} />
                        
                    ):<p>No books</p>}
                </section>
            </div>
        </>
    )
}

export default Home