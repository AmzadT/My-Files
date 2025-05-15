import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Inbox from "./components/Inbox";
import MailLayout from "./components/MailLayout";
import Drafts from "./components/Drafts";
import Spam from "./components/Spam";
import Junk from "./components/Junk";
import Signup from "./components/Signup";

export default function App() {
  return (
    <div className="bg-black min-h-screen text-white font-sans">
      <Navbar />
      <Routes>
        {/* Redirect root to /auth (Signup page) */}
        {/* <Route path="/" element={<Navigate to="/auth" replace />} /> */}
        
        {/* Signup page (authentication) */}
        <Route path="/" element={<Signup />} />
        
        {/* Mail layout with nested routes */}
        <Route path="/mail" element={<MailLayout />}>
          {/* Show Inbox by default when /mail is visited */}
          <Route index element={<Inbox />} />
          <Route path="inbox" element={<Inbox />} />
          <Route path="drafts" element={<Drafts />} />
          <Route path="spam" element={<Spam />} />
          <Route path="junk" element={<Junk />} />
        </Route>
      </Routes>
    </div>
  );
}
