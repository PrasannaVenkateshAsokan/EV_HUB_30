import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import OwnerManagement from "./pages/OwnerManagement";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import LanguagePreference from "./pages/LanguagePreference";
import AddOwner from "./pages/AddOwner";
import EditOwnerChain from "./pages/EditOwnerChain";
import EditOwnerGarage from "./pages/EditOwnerGarage";
import ChainManagement from "./pages/ChainManagement";
import ChainManagementEditScreen from "./pages/ChainManagementEditScreen";
import GarageManagement from "./pages/GarageManagement";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/profile":
        title = "";
        metaDescription = "";
        break;
      case "/edit-profile":
        title = "";
        metaDescription = "";
        break;
      case "/language-preference":
        title = "";
        metaDescription = "";
        break;
      case "/add-owner":
        title = "";
        metaDescription = "";
        break;
      case "/edit-owner-chain":
        title = "";
        metaDescription = "";
        break;
      case "/edit-owner-garage":
        title = "";
        metaDescription = "";
        break;
      case "/chain-management":
        title = "";
        metaDescription = "";
        break;
      case "/chain-management-edit-screen":
        title = "";
        metaDescription = "";
        break;
      case "/garage-management":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<OwnerManagement />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/edit-profile" element={<EditProfile />} />
      <Route path="/language-preference" element={<LanguagePreference />} />
      <Route path="/add-owner" element={<AddOwner />} />
      <Route path="/edit-owner-chain" element={<EditOwnerChain />} />
      <Route path="/edit-owner-garage" element={<EditOwnerGarage />} />
      <Route path="/chain-management" element={<ChainManagement />} />
      <Route
        path="/chain-management-edit-screen"
        element={<ChainManagementEditScreen />}
      />
      <Route path="/garage-management" element={<GarageManagement />} />
    </Routes>
  );
}
export default App;
