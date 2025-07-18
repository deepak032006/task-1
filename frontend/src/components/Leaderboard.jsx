export default function Leaderboard({ users }) {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Leaderboard</h2>
      <table className="w-full border">
        <thead>
          <tr>
            <th className="border px-4 py-2">Rank</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Total Points</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user._id}>
              <td className="border px-4 py-2">{index + 1}</td>
              <td className="border px-4 py-2">{user.name}</td>
              <td className="border px-4 py-2">{user.totalPoints}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
