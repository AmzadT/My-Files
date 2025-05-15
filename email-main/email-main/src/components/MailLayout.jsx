import React, { useState } from "react";
import {
  FaReply,
  FaForward,
  FaTrashAlt,
  FaExclamationCircle,
  FaTimes,
} from "react-icons/fa";

// Sample emails
const emails = [
  {
    id: 1,
    subject: "Welcome to our service",
    sender: "service@example.com",
    preview: "Hey, just wanted to confirm our meeting for tomorrow.",
    sentAt: "2025-05-10 10:00 AM",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    read: false,
  },
  {
    id: 2,
    subject: "Your account has been updated",
    sender: "no-reply@example.com",
    preview: "Here's an important update about your account.",
    sentAt: "2025-05-09 2:45 PM",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    read: true,
  },
  // Add more emails here
];

const tabs = ["All Mails", "Unread"];

export default function MailLayout() {
  const [selectedTab, setSelectedTab] = useState("All Mails");
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [replyMode, setReplyMode] = useState(false);

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
    setSelectedEmail(null);
  };

  const handleMailClick = (email) => {
    setSelectedEmail(email);
  };

  const closeMailDetails = () => {
    setSelectedEmail(null);
    setReplyMode(false);
  };

  const handleReply = () => {
    setReplyMode(true);
  };

  return (
    <div className="flex">
      {/* Left Sidebar */}
      <div className="w-1/6 h-screen bg-gray-700 p-4 text-white">
        <h2 className="text-xl font-semibold mb-4">Mail Navigation</h2>
        <ul className="space-y-3">
          <li className="cursor-pointer hover:text-gray-400">Inbox</li>
          <li className="cursor-pointer hover:text-gray-400">Drafts</li>
          <li className="cursor-pointer hover:text-gray-400">Spam</li>
          <li className="cursor-pointer hover:text-gray-400">Junk</li>
        </ul>
      </div>

      {/* Middle Section */}
      <div
        className={`w-${selectedEmail ? "2/5" : "3/5"} bg-gray-800 p-4 overflow-y-auto`}
      >
        <h1 className="text-xl font-bold mb-4 text-white">Inbox</h1>
        <div className="flex mb-4 border-b-2 border-gray-600">
          {tabs.map((tab) => (
            <div
              key={tab}
              className={`cursor-pointer px-6 py-2 text-white text-lg font-medium rounded-t-lg ${
                selectedTab === tab
                  ? "bg-gray-900 border-b-4 border-blue-500"
                  : "bg-gray-700 hover:bg-gray-600"
              }`}
              onClick={() => handleTabClick(tab)}
            >
              {tab}
            </div>
          ))}
        </div>

        {selectedTab === "Unread" ? (
          <p className="text-gray-400">No unread emails.</p>
        ) : (
          emails.map((email) => (
            <div
              key={email.id}
              className={`bg-gray-700 p-4 mb-4 rounded-md cursor-pointer ${
                email.read ? "" : "border-l-4 border-blue-500"
              }`}
              onClick={() => handleMailClick(email)}
            >
              <div className="flex justify-between">
                <div>
                  <h3 className="text-white font-semibold">{email.subject}</h3>
                  <p className="text-gray-400">{email.sender}</p>
                </div>
                <span className="text-gray-500 text-sm">{email.sentAt}</span>
              </div>
              <p className="text-gray-300 mt-2">{email.preview}</p>
            </div>
          ))
        )}
      </div>

      {/* Right Sidebar: Email Details */}
      {selectedEmail && (
        <div className="w-1/3 bg-gray-800 p-6 overflow-y-auto">
          {/* Header: Avatar and Sender Info */}
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center">
              <img
                src={selectedEmail.avatar}
                alt="Avatar"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h2 className="text-xl font-bold text-white">{selectedEmail.subject}</h2>
                <p className="text-sm text-gray-300">{selectedEmail.sender}</p>
                <p className="text-sm text-gray-500">{selectedEmail.sentAt}</p>
              </div>
            </div>
            {/* Action Icons */}
            <div className="flex space-x-4 text-white text-lg">
              <button onClick={handleReply} title="Reply" className="hover:text-blue-400">
                <FaReply />
              </button>
              <button title="Forward" className="hover:text-blue-400">
                <FaForward />
              </button>
              <button title="Delete" className="hover:text-red-500">
                <FaTrashAlt />
              </button>
              <button onClick={closeMailDetails} title="Close" className="hover:text-gray-400">
                <FaTimes />
              </button>
            </div>
          </div>

          {/* Email Body */}
          <div className="text-white mb-6">
            <p>{selectedEmail.preview}</p>
          </div>

          {/* Reply Section */}
          {replyMode && (
            <div className="bg-gray-700 p-4 rounded-md">
              <h3 className="text-lg text-white mb-2">Reply:</h3>
              <textarea
                className="w-full p-2 bg-gray-800 text-white rounded-md mb-2"
                rows="4"
                placeholder="Write your reply here..."
              />
              <div className="flex space-x-2">
                <button className="bg-blue-500 text-white py-1 px-4 rounded-md">
                  Send
                </button>
                <button
                  className="bg-gray-600 text-white py-1 px-4 rounded-md"
                  onClick={() => setReplyMode(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
