import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Main from "./component/main/Main";
import GlobalStyle from "./style/GlobalStyles.styles";
import Carpool from "./component/carpool/Carpool";
import Post from "./component/post/Post";
import Mileage from "./component/mileage/Mileage";
import Login from "./component/login/Login";
import Register from "./component/login/Register";
import AuthProvider from "./AuthProvider";
import AddPostPage from "./component/post/AddPostPage";
import RegisterCarpoolPage from "./component/carpool/RegisterCarpoolPage";
import AddCarpool from "./component/carpool/AddCarpool";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "./layout/ErrorPage";

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="" element={<Main />} />
              <Route path="carpool" element={<Carpool />} />
              <Route path="carpool/:id" element={<RegisterCarpoolPage />} />
              <Route path="post" element={<Post />} />
              <Route element={<PrivateRoute />}>
                <Route path="carpool/add" element={<AddCarpool />} />
                <Route path="post/add" element={<AddPostPage />} />
              </Route>
              <Route path="mileage-shop" element={<Mileage />} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="*" element={<ErrorPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
