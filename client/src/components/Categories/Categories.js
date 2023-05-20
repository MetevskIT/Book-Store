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
                <br />
                {categories.map(x =>

                    <article key={x._id} className="category">
                        <Link to={x._id}>
                            <p className="info">{x.bookGenre}</p>
                        </Link>
                    </article>
                )}

            </div>
            <img className='bnrCover' src='cover2.jpg' />
           
        </>
    )

}

export default Categories;