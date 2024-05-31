import { Route, Routes } from "react-router-dom";
import B1 from "./components/B1";
import B2 from "./components/B2";
import B3 from "./components/B3";
import B4 from "./components/B4";
import B5 from "./components/B5";
import B6 from "./components/B6/B6";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Product from "./components/Product";
import Detail from "./components/Detail";
import B7 from "./components/B7/B7";
import Admin from "./components/Admin";
import Account from "./components/Account";
import B8 from "./components/B8/B8";
import CustomLink from "./components/CustomLink";
import HomePage from "./components/HomePage";
import ListUser from "./components/ListUser";
import UserDetail from "./components/UserDetail";

export default function App() {
  return (
    <>
    <Routes>
      <Route path="" element={<B1/>}></Route>
      <Route path="/contact" element={<B2/>}></Route>
      <Route path="/login" element={<B3/>}></Route>
      <Route path="/register" element={<B4/>}></Route>
      <Route path="*" element={<B5/>}></Route>
      <Route path="/B6" element={<B6/>}>
        <Route index element={<Home/>}></Route>
        <Route path="/B6/contacts" element={<Contact/>}></Route>
      </Route>
      <Route path="/B7" element={<B7/>}>
        <Route index element={<Home/>}></Route>
        <Route path="/B7/product" element={<Product/>}></Route>
        <Route path="/B7/detail" element={<Detail/>}></Route>
      </Route>
      <Route path="/B8" element={<B8/>}>
        <Route index element={<Admin/>}></Route>
        <Route path="/B8/account" element={<Account/>}></Route>
        <Route path="/B8/product" element={<Product/>}></Route>
      </Route>
      <Route path="/" element={<CustomLink/>}>
        <Route path="/home-page" element={<HomePage/>}></Route>
        <Route path="*" element={<B5/>}></Route>
      </Route>
      <Route path="/listuser" element={<ListUser/>}></Route>
      <Route path="/userdetail" element={<UserDetail/>}></Route>
    </Routes>
    </>
  )
}
