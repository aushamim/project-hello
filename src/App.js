import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AuthProvider from "./Hooks/AuthProvider/AuthProvider";
import Chats from "./Pages/Chats/Chats";
import ComingSoon from "./Pages/ComingSoon/ComingSoon";
import Friends from "./Pages/Friends/Friends";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import PrivateRoute from "./Pages/Login/PrivateRoute";
import NotFound from "./Pages/NotFound/NotFound";
import UserProfile from "./Pages/UserProfile/UserProfile";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<NotFound></NotFound>}></Route>
            <Route path="/coming" element={<ComingSoon></ComingSoon>}></Route>
            <Route path="/chats" element={<Chats></Chats>}></Route>
            <Route path="/friends" element={<Friends></Friends>}></Route>
            <Route path="/login" exact={true} element={<Login></Login>}></Route>
            <Route
              path="/user/:id"
              exact={true}
              element={<UserProfile></UserProfile>}
            ></Route>
            <Route
              path="/home"
              exact={true}
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />
            <Route path="/" exact={true} element={<Login></Login>}></Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
