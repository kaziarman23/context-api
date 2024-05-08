import { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function Login() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const {setUser} = useContext(UserContext);

    const hendelSubmit = (e) => {
        e.preventDefault();
        setUser({name, password});
        setName("")
        setPassword("")
    };

    return (
        <>
            <div>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                    className="p-2 mb-4 mt-4 block mx-auto my-1"
                />
                <br />
                <input
                    type="text"
                    value={password}
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    className="p-2 mb-4 block mx-auto my-1"
                />
                <br />
                <button className="bg-blue-500 hover:bg-blue-600 text-black p-2 rounded-xl mb-3 ml-4 "  type="submit" onClick={hendelSubmit}>Submit</button>
            </div>
        </>
    );
}

export default Login;
