export default function Spam() {
  const spamEmails = [{ id: 1, subject: "Spam Email" }]; // Add spam data here
  return (
    <div>
      <h1>Spam</h1>
      {spamEmails.length === 0 ? <p>No spam emails</p> : spamEmails.map(email => <div key={email.id}>{email.subject}</div>)}
    </div>
  );
}
