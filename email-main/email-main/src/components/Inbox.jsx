import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FaReply,
  FaForward,
  FaTrash,
  FaTimes,
  FaInbox,
  FaEnvelopeOpenText,
  FaUserShield,
  FaMusic,
} from "react-icons/fa";

const emails = [
  {
    id: 1,
    sender: "johndoe@example.com",
    name: "John Doe",
    subject: "Meeting Tomorrow",
    preview: "Hey, just wanted to confirm our meeting for tomorrow.",
    sentAt: "2025-05-10 10:00 AM",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    sender: "janedoe@example.com",
    name: "Jane Doe",
    subject: "Project Update",
    preview: "Here's the latest update on the project...",
    sentAt: "2025-05-09 2:45 PM",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
  },
];

const tabs = ["Inbox", "Drafts", "Spam", "Junk"];

export default function Inbox() {
  const [selectedTab, setSelectedTab] = useState("Inbox");
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [isReplying, setIsReplying] = useState(false);
  const [emailReply, setEmailReply] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
    setSelectedEmail(null);
  };

  const handleCardClick = (email) => {
    setSelectedEmail(email);
  };

  const handleReplyClick = () => setIsReplying(true);
  const handleReplyCancel = () => {
    setIsReplying(false);
    setEmailReply("");
  };

  const handleSendReply = () => {
    console.log("Reply Sent:", emailReply);
    setIsReplying(false);
    setEmailReply("");
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      {/* Top Navbar */}
      <nav className="flex space-x-8 items-center px-6 py-4 border-b border-gray-800 bg-gray-950 text-sm">
        <Link to="/" className="flex items-center space-x-2 hover:text-blue-400">
          <FaInbox /> <span>Dashboard</span>
        </Link>
        <Link to="/mail" className="flex items-center space-x-2 hover:text-blue-400">
          <FaEnvelopeOpenText /> <span>Mail</span>
        </Link>
        <Link to="/music" className="flex items-center space-x-2 hover:text-blue-400">
          <FaMusic /> <span>Music</span>
        </Link>
        <Link to="/signup" className="flex items-center space-x-2 hover:text-blue-400">
          <FaUserShield /> <span>Authentication</span>
        </Link>
      </nav>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-1/5 bg-gray-800 p-6 border-r border-gray-700">
          <h2 className="text-lg font-semibold mb-4">Mail Tabs</h2>
          <ul className="space-y-3">
            {tabs.map((tab) => (
              <li
                key={tab}
                onClick={() => handleTabClick(tab)}
                className={`cursor-pointer py-2 px-3 rounded-md text-sm font-medium ${
                  selectedTab === tab ? "bg-blue-600 text-white" : "hover:bg-gray-700 text-gray-300"
                }`}
              >
                {tab}
              </li>
            ))}
          </ul>
          {selectedTab === "Inbox" && (
            <div className="mt-8 border-t border-gray-700 pt-4 space-y-2">
              <button
                onClick={() => setSelectedTab("All Mail")}
                className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                  selectedTab === "All Mail" ? "bg-blue-600 text-white" : "hover:bg-gray-700 text-gray-300"
                }`}
              >
                All Mail
              </button>
              <button
                onClick={() => setSelectedTab("Unread")}
                className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                  selectedTab === "Unread" ? "bg-blue-600 text-white" : "hover:bg-gray-700 text-gray-300"
                }`}
              >
                Unread
              </button>
            </div>
          )}
        </aside>

        {/* Email List */}
        <main
          className={`bg-gray-900 p-6 overflow-y-auto ${
            selectedEmail ? "w-2/5" : "w-full"
          }`}
        >
          <h1 className="text-2xl font-bold mb-6">{selectedTab}</h1>
          {selectedTab === "Unread" ? (
            <p className="text-gray-500">No unread emails.</p>
          ) : (
            emails.map((email) => (
              <div
                key={email.id}
                onClick={() => handleCardClick(email)}
                className="flex items-start bg-gray-800 p-4 rounded-lg mb-4 hover:bg-gray-700 cursor-pointer"
              >
                <img
                  src={email.avatar}
                  alt="avatar"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold">{email.subject}</h3>
                    <span className="text-xs text-gray-400">{email.sentAt}</span>
                  </div>
                  <p className="text-sm text-gray-400">
                    <span className="font-medium text-white">{email.name}</span> - {email.preview}
                  </p>
                </div>
              </div>
            ))
          )}
        </main>

        {/* Email Details */}
        {selectedEmail && (
          <section className="w-2/5 bg-gray-850 p-6 border-l border-gray-700 overflow-y-auto">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-2xl font-bold">{selectedEmail.subject}</h2>
                <p className="text-sm text-gray-400">
                  From: {selectedEmail.name} ({selectedEmail.sender})
                </p>
                <p className="text-sm text-gray-500">{selectedEmail.sentAt}</p>
              </div>
              <div className="flex space-x-3 text-lg text-gray-400">
                <FaReply className="hover:text-white cursor-pointer" title="Reply" onClick={handleReplyClick} />
                <FaForward className="hover:text-white cursor-pointer" title="Forward" />
                <FaTrash className="hover:text-red-500 cursor-pointer" title="Delete" />
                <FaTimes className="hover:text-white cursor-pointer" title="Close" onClick={() => setSelectedEmail(null)} />
              </div>
            </div>
            <p className="text-white mb-6">{selectedEmail.preview}</p>

            {isReplying && (
              <div>
                <textarea
                  value={emailReply}
                  onChange={(e) => setEmailReply(e.target.value)}
                  className="w-full h-32 p-3 bg-gray-900 text-white border border-gray-600 rounded-md resize-none"
                  placeholder="Write your reply..."
                />
                <div className="flex space-x-3 mt-4">
                  <button
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
                    onClick={handleSendReply}
                  >
                    Send
                  </button>
                  <button
                    className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-md"
                    onClick={handleReplyCancel}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </section>
        )}
      </div>
    </div>
  );
}
