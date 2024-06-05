import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Main from "./component/main/Main";
import GlobalStyle from "./style/GlobalStyles.styles";
import Carpool from "./component/carpool/Carpool";
import Post from "./component/post/Post";
import Mileage from "./component/mileage/Mileage";
import Login from "./component/login/Login";
import Register from "./component/login/Register";
import axios from "axios";

function App() {


  return (
    
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="" element={<Main/>} />
            <Route path="carpool" element={<Carpool />} />
            <Route path="post" element={<Post />} />
            <Route path="mileage-shop" element={<Mileage />} />
            <Route path="login" element={<Login/>} />
            <Route path="register" element={<Register/>} />
          </Route>
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
