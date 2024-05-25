
const ShowUserData = ({ userData }) => {
    return <div className="userInfoList">
        <ul>
            {Object.entries(userData).map(([key, value], index) => (
                <li key={index}>
                    <b>{key} :</b> {JSON.stringify(value)}
                </li>
            ))}
        </ul>
    </div>
}
export default ShowUserData;