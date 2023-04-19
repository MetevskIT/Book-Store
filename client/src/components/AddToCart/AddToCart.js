import { useEffect, useContext } from 'react';

import { useNavigate, useParams } from 'react-router-dom';
import userService from '../../services/userService'
import { AuthContext } from '../../contexts/AuthContext';

const AddToCart = () => {
    const navigate = useNavigate();
    const params = useParams('id')

    const { user } = useContext(AuthContext);

     useEffect(() => {
        if (!user.email) {
            navigate('/login');
        }
        else{
        userService.addToCart(params.id,user.accessToken)
        navigate('/cart');
        }

    });

    return null;
}

export default AddToCart;
