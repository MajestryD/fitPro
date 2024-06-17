import React, { useEffect } from "react"
import { useDispatch } from 'react-redux';
import { setUser } from "../../../features/login/facebook/authSlice";
import { useFacebookProfileQuery } from "../../../features/login/facebook/facebookApiSlice"

const Login = () => {
    const { isLoading, error, data } = useFacebookProfileQuery();
    const dispatch = useDispatch();


    const handleLogin = (e) => {
        e.preventDefault();
        window.open ('http://localhost:2500/auth/facebook');
    }

    useEffect(() => {
        if (data) {
            dispatch(setUser(data));
        }
    }, [data,dispatch]);

    return (
        <div>
            <button onClick={handleLogin} disabled={isLoading}>
                Login with Facebook
            </button>
            {error && <div>Error logging in</div>}

            {data && <div>{JSON.stringify(data)}</div>}
        </div>
    )
}
export default Login;