export default function Junk() {
  const junkEmails = [{ id: 1, subject: "Junk Email" }]; // Add junk data here
  return (
    <div>
      <h1>Junk</h1>
      {junkEmails.length === 0 ? <p>No junk emails</p> : junkEmails.map(email => <div key={email.id}>{email.subject}</div>)}
    </div>
  );
}
