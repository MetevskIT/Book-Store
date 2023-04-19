import './Login.css'
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import userService, { login } from '../../services/userService'
import { AuthContext } from "../../contexts/AuthContext";

const Login = () => {
    const [error, setError] = useState("");
    const { userLogin } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();
        const {
            email,
            password,
        } = Object.fromEntries(new FormData(e.target));

        userService.login(email, password)
            .then(res => {
                if (res.message) {
                    setError(res.message)
                } else {
                    userLogin(res);
                    navigate('/')
                }
            });
    }

    return (
        <>
            <div className="formData">
                <h1 className="form-title">Login</h1>
                <form onSubmit={onSubmit}>
                    <p className='error-message'>{error}</p>
                    <label htmlFor="email">Email:</label><br />
                    <input type="text" id="email" name="email" placeholder="Email" required /><br />
                    <label htmlFor="password">Password:</label><br />
                    <input type="text" id="password" name="password" placeholder="Password" required /><br /><br />
                    <input type="submit" value="Submit" />
                    <a href="/register">Dont have an account?</a>
                </form>
            </div>
        </>
    );
}
export default Login