import axios from "axios";
import { useEffect, useState } from "react";
import ShowUserData from "./showUserData";
import { Link } from "react-router-dom";

const Profile = () => {
    const [apiStatus, setApiStatus] = useState("init");
    const [userData, setUserData] = useState(null);

    const fetchUserData = async () => {
        const userInfo = localStorage.getItem("userInfo");
        const userId = JSON.parse(userInfo);
        try {
            const response = await axios({
                url: `https://dummyjson.com/users/${userId.id}`,
                method: "GET",
            });
            return { success: true, data: response.data };
        }
        catch (error) {
            return { success: false };
        }
    }

    useEffect(() => {
        (async function () {
            setApiStatus("pending");
            try {
                const { success, data } = await fetchUserData();
                if (success) {
                    setApiStatus("success");
                    setUserData(data);
                }
                else {
                    setApiStatus("error");
                }
            }
            catch (error) {
                setApiStatus("error");
                alert("Failed to fetch User Profile");
            }
        })();
    }, []);

    return <div className="profile">
        <div className="profile-header">
            <h1>Profile Page</h1>
            <Link to="/" className="route-link">Click here for Login Page</Link>
        </div>
        <div className="display">{apiStatus === "error" ?
            <button onClick={fetchUserData}>Retry</button> : apiStatus === "pending" || apiStatus === "init" ?
                <div className="loading">Loading ...</div> : <ShowUserData userData={userData} />}
        </div>
    </div>
}
export default Profile;