import axios from "axios";

const authentication = async (username, password) => {
    try {
        const response = await axios({
            url: "https://dummyjson.com/auth/login",
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            data: {  //sending the request payload
                username,
                password,
            },
        });
        const userInfo = {
            id: response.data.id,
            token: response.data.token,
        }
        localStorage.setItem("userInfo", JSON.stringify(userInfo));
        return { success: true };
    }
    catch (error) { //checking was the error due to bad request or invalid credentials
        alert(error.response.status === 404 ?
            `Failed to login, ${error.message}` : `Failed to login, ${error.response.data.message}`);
        return { success: false };
    }
}
export default authentication;