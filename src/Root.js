
import { Routes, Route } from "react-router-dom";

import Layout from "./components/common/Layout";
import Home from "./pages/Home";
import OurStory from "./pages/OurStory";
import Pricing from "./pages/Pricing";
import Terms from "./pages/Terms";
import Account from "./pages/Account";
import App from "./pages/App";
import ContactUs from "./pages/ContactUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function Root() {
  return (
    <>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/terms&conditions" element={<Terms />} />
          <Route path="/account" element={<Account />} />
          <Route path="/app" element={<App />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Route>
      </Routes>


    </>
  );
}

export default Root;
