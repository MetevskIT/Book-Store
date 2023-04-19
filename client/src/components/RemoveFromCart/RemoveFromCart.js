import { useEffect, useContext } from 'react';

import { useNavigate, useParams } from 'react-router-dom';
import userService from '../../services/userService'
import { AuthContext } from '../../contexts/AuthContext';

const RemoveFromCart = () => {
    const navigate = useNavigate();
    const params = useParams('id')

    const { user } = useContext(AuthContext);

     useEffect(() => {      
        userService.removeFromCart(params.id,user.accessToken)
        console.log(user.accessToken);
        navigate('/cart');

    });

    return null;
}

export default RemoveFromCart;
