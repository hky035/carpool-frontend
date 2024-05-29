import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="" element={<Main />} />
            <Route path="carpool" element={<Carpool />} />
            <Route path="post" element={<Post />} />
            <Route path="mileage" element={<Mileage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
