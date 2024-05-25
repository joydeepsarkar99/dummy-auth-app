import { createContext, useState } from "react";
import Login from "./login.js";
import Profile from "./profile.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const UserInfoContext = createContext();

function App() {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  return <>
    <UserInfoContext.Provider value={{ username, setUsername, password, setPassword}}>
      <BrowserRouter>
        <Routes>
          <Route path="" element={
            <div className="container">
              <Login />
            </div>
          } />
          <Route path="profile" Component={Profile} />
        </Routes>
      </BrowserRouter>
    </UserInfoContext.Provider>
  </>
}

export default App;
