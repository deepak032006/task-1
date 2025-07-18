export default function ClaimHistory({ history }) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Claim History</h2>
      <table className="w-full border">
        <thead>
          <tr>
            <th className="border px-4 py-2">User</th>
            <th className="border px-4 py-2">Points</th>
            <th className="border px-4 py-2">Time</th>
          </tr>
        </thead>
        <tbody>
          {history.map((entry) => (
            <tr key={entry._id}>
              <td className="border px-4 py-2">{entry.userName}</td>
              <td className="border px-4 py-2">{entry.pointsClaimed}</td>
              <td className="border px-4 py-2">{new Date(entry.claimedAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
