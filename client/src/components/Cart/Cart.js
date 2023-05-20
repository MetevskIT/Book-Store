import { useEffect, useContext, useState} from 'react';
import userService from '../../services/userService'
import { AuthContext } from '../../contexts/AuthContext';
import Book from '../Book/Book';

const Cart = ()=>{
    const { user } = useContext(AuthContext);
    const [books, setBooks] = useState([]);
     useEffect(() => {      
        userService.getBooksFromCart(user.accessToken).then(res=>
            setBooks(res.cart)
            )

    },[]);
    
    return(
        <div className="newest-books">
        <h1 className="newest-books-title">Cart</h1>
        <section className="books">
            {books?.length>0?books.map(x => <Book key={x._id} id={x._id} title={x.title} description={x.description} price={x.price} imageUrl={x.imageUrl} />):<p>No items!</p>}
        </section>
        </div>
    )
}
export default Cart;