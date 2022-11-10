import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Search from "./Search";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  );
};

export default AllRoutes;