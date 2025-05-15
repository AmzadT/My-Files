import { useParams } from "react-router-dom";

const emailData = [
  {
    id: 1,
    sender: "johndoe@example.com",
    name: "John Doe",
    subject: "Meeting Tomorrow",
    body: "Hey, just wanted to confirm our meeting for tomorrow at 10 AM.",
    sentAt: "2025-05-10 10:00 AM",
  },
  {
    id: 2,
    sender: "janedoe@example.com",
    name: "Jane Doe",
    subject: "Project Update",
    body: "Here's the latest update on the project. We are on track to finish by next week.",
    sentAt: "2025-05-09 2:45 PM",
  },
  // Add more email objects here if needed
];

export default function MailDetail() {
  const { id } = useParams();
  const email = emailData.find((email) => email.id === parseInt(id));

  if (!email) {
    return <div>Email not found.</div>;
  }

  return (
    <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
      <h1 className="text-2xl font-semibold text-white">{email.subject}</h1>
      <div className="text-sm text-gray-400 mt-2">
        <p>From: {email.name} ({email.sender})</p>
        <p>Sent: {email.sentAt}</p>
      </div>
      <p className="text-white mt-4">{email.body}</p>
      <div className="mt-4 space-x-4">
        <button className="text-blue-500">Reply</button>
        <button className="text-blue-500">Forward</button>
        <button className="text-gray-500">Menu</button>
      </div>
    </div>
  );
}
