import React, { useState } from "react";
import { addUser } from "../api/api";

export default function UserSelector({ users, setSelectedUser, reload }) {
  const [newName, setNewName] = useState("");

  const handleAddUser = async () => {
    if (!newName) return;
    await addUser(newName);
    setNewName("");
    reload();
  };

  return (
    <div className="mb-4">
      <select
        className="border rounded p-2 mr-2"
        onChange={(e) => setSelectedUser(e.target.value)}
      >
        <option value="">Select a User</option>
        {users.map((user) => (
          <option key={user._id} value={user._id}>{user.name}</option>
        ))}
      </select>
      <input
        className="border p-2 mr-2"
        placeholder="Add user"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleAddUser}>Add</button>
    </div>
  );
}

