import bookService from '../../services/bookService'
import { Link, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react'
import './Categories.css'

const Categories = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {

        bookService.getCategories().then(res => {
            setCategories(res)
        })
    }, [])


    return (
        <>
            <div className="categories">

                {categories.map(x =>

                    <article className="category">
                        <Link to={x._id}>
                            <p className="info">{x.bookGenre}</p>
                        </Link>
                    </article>
                )}

            </div>
            <img src='cover.jpg' />
        </>
    )

}

export default Categories;