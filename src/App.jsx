import UserContextProvider from "./context/UserContextProvider";
import Login from "./Component/Login";
import Profile from "./Component/Profile";

function App() {
    return (
        <UserContextProvider>
            <div className="w-full h-screen flex justify-center items-center  bg-gray-700">
                <div className="w-60 h-80 bg-gray-500">
                    <h1 className="text-center">Context API</h1>
                    <Login />
                    <Profile />
                </div>
            </div>
        </UserContextProvider>
    );
}

export default App;
