import { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
    const { user } = useContext(UserContext);

    if (!user) {
        return (
            <div className="text-center text-orange-700"><h1>Please Login...</h1></div>
        );
    } else {
       return <div className="text-center text-green-800 "><h1>welcome {user.name}</h1></div>;
    }
}

export default Profile;
