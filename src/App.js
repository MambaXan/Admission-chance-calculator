import React from "react";
import {Route, Routes, Router, Link} from 'react-router-dom';
import Layout from "./Layout/Layout";
import Main from "./pages/Main/Main.jsx";
import About from "./pages/About/About";
import Admission from './pages/Admission/Admission';
import Services from './pages/Services/Services';
import Contacts from './pages/Contacts/Contacts';
import Subscription from './pages/Subscription/Subscription';
import FAQ from "./pages/FAQ/Faq";
import Blog from './pages/Blog/Blog';
import Privacy from './pages/Privacy/Privacy'

function App() {
  return (
    <>
      <Routes>
        <Route path={'/'} element={<Layout />}>
          <Route path={''} element={<Main />} />
          <Route path={'about'} element={<About/>}/>
          <Route path={'admission'} element={<Admission/>}/>
          <Route path={'services'} element={<Services/>}/>
          <Route path={'contacts'} element={<Contacts/>}/>
          <Route path={'subscription'} element={<Subscription/>}/>
          <Route path={'faq'} element={<FAQ/>}/>
          <Route path={'blog'} element={<Blog/>}/>
          <Route path={'privacy'} element={<Privacy/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
