import { Link } from 'react-router-dom'
import './Book.css'

const Book = (props) => {
    return (
        <Link to={props.details ? "/details/" + props.id : "/removeFromCart/" + props.id}>
            <article className="new-book">
                <img src={props.imageUrl} />
                {props.imageUrl}
                <p className="title">{props.title}</p>
                <p className="description">{props.description}</p>
                <p className="price">{props.price}$</p>
            </article>
        </Link>
    )
};

export default Book;