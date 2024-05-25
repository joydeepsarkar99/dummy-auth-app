import { useContext, useState } from "react";
import { UserInfoContext } from "./App";
import { useNavigate } from "react-router-dom";
import authentication from "./authentication ";

const Login = () => {
    const [apiStatus, setApiStatus] = useState("init");
    const { username, setUsername, password, setPassword} = useContext(UserInfoContext);
    const navigate = useNavigate();

    async function goToProfilePage() {
        setApiStatus("pending");
        try {
            const { success } = await authentication(username, password);
            if (success) {
                setApiStatus("success");
                navigate("/profile");
            }
            else{
                setApiStatus("error");
            }
        }
        catch (error) {
            console.log(error.message);
        }
    }

    return <div className="login">
        {apiStatus === "pending" ?
            <div className="loading">Loading ...</div> :
            <div className="form">
                <h2>Login Page</h2>
                <label htmlFor="username">Username : </label>
                <input type="text" id="username" name="username" placeholder="Input Your Username" required
                    onChange={(e) => setUsername(e.target.value.trim())}>
                </input>
                <label htmlFor="password">Password : </label>
                <input type="password" id="password" name="password" placeholder="Input Your Password" required
                    onChange={(e) => setPassword(e.target.value.trim())}>
                </input>
                <button onClick={goToProfilePage}>Login</button>
            </div>
        }
    </div>
}

export default Login;