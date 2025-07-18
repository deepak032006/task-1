import React, { useState, useEffect } from "react";
import {
  getUsers,
  addUser,
  claimPoints,
  getLeaderboard,
  getClaimHistory,
} from "./api/api";
import UserSelector from "./components/UserSelector";
import ClaimButton from "./components/ClaimButton";
import Leaderboard from "./components/Leaderboard";
import ClaimHistory from "./components/ClaimHistory";

export default function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [claimedPoints, setClaimedPoints] = useState(null);
  const [leaderboard, setLeaderboard] = useState([]);
  const [history, setHistory] = useState([]);

  const fetchData = async () => {
    const usersRes = await getUsers();
    const leaderboardRes = await getLeaderboard();
    const historyRes = await getClaimHistory();
    setUsers(usersRes.data);
    setLeaderboard(leaderboardRes.data);
    setHistory(historyRes.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleClaim = async () => {
    if (!selectedUser) return;
    const res = await claimPoints(selectedUser);
    setClaimedPoints(res.data.points);
    fetchData();
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">🏆 Leaderboard System</h1>
      <UserSelector users={users} setSelectedUser={setSelectedUser} reload={fetchData} />
      <ClaimButton handleClaim={handleClaim} claimedPoints={claimedPoints} />
      <Leaderboard users={leaderboard} />
      <ClaimHistory history={history} />
    </div>
  );
}