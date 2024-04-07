import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import About from "./components/About/About";
import BlogPage from "./components/BlogPage/BlogPage";
import NavBar from "./components/NavBar/NavBar";
// import SingleBook from "./components/SingleBook/SingleBook";
import DashboardLayout from "./dashboard/DashboardLayout";
import DashBoard from "./dashboard/DashBoard";
import UploadBook from "./dashboard/UploadBook";
import ManageBook from "./dashboard/ManageBook";
import EditBooks from "./dashboard/EditBooks";
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/Login/Login";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import LogOut from "./components/LogOut/LogOut";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<BlogPage />} />

          {/* <Route
            path="/book/:id"
            element={<SingleBook />}
            loader={async ({ params }) => {
              const response = await fetch(
                `http://localhost:8000/book/${params.id}`
              );
              const data = await response.json();
              return { _id: data._id };
            }}
          /> */}
          <Route
            path="/admin/dashboard"
            element={
              <PrivateRoute>
                <DashBoard />
              </PrivateRoute>
            }
          >
            <Route path="/admin/dashboard" element={<DashBoard />}></Route>
            <Route
              path="/admin/dashboard/upload"
              element={<UploadBook />}
            ></Route>
            <Route
              path="/admin/dashboard/manage"
              element={<ManageBook />}
            ></Route>
            <Route
              path="/admin/dashboard/edit-books/:id"
              element={<EditBooks />}
              // loader={(params) =>
              //   fetch(`http://localhost:8000/book/${params.id}`)
              // }
            ></Route>
          </Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/logout" element={<LogOut />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
