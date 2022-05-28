
import { Routes, Route } from "react-router-dom";

import Layout from "./components/common/Layout";
import Home from "./pages/Home";
import UserAuth from "./pages/UserAuth";
import OurStory from "./pages/OurStory";
import Pricing from "./pages/Pricing";
import Terms from "./pages/Terms";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function Root() {
  return (
    <>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/user-authentication" element={<UserAuth />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/terms&conditions" element={<Terms />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Route>
      </Routes>


    </>
  );
}

export default Root;
