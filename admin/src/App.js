import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import New from "./pages/newPage/New";
import Single from "./pages/singleUser/Single";
import List from "./pages/list/List";
import { userInputs, productInputs } from "./formSource";
import "../src/style/dark.scss"
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/AuthContext";

function App() {
  const {darkMode} = useContext(DarkModeContext) 

  const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext);

    if (!user || user === null) {
      return <Navigate to="/login" />;
    }

    console.log(user);

    return children;
  };


  return (
    <div className={darkMode ? "app dark" : "app"}>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/login" element={<Login /> } />
          <Route path="/users" element={<List />} />
          <Route path="users/:userId" element={<Single />} />
          <Route path="users/new" element={<New inputs={userInputs} title="Add New User" />} />
          <Route path="/products" element={<List />} />
          <Route path="/products/:productId" element={<Single />} />
          <Route path="/products/new" element={<New inputs={productInputs} title="Add New Product" />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
