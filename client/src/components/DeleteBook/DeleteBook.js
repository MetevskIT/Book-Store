import { useEffect, useContext } from 'react';

import { useNavigate, useParams } from 'react-router-dom';
import bookService from '../../services/bookService'
import { AuthContext } from '../../contexts/AuthContext';

const DeleteBook = () => {
    const navigate = useNavigate();
    const params = useParams('id')

    const { user } = useContext(AuthContext);

    useEffect(() => {
        if (user.role != "Admin") {
            navigate('/unauthorize');
        }
        else {
            bookService.deleteBook(params.id)
            navigate('/categories')
        }

    });

    return null;
}

export default DeleteBook;