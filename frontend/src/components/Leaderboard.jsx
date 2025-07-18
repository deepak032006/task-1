import React from "react";
import { Card, CardContent } from "./ui/card";
import { Trophy, Star, Flame, Crown } from "lucide-react";

const ranks = [
  {
    category: "Wealth Ranking",
    icon: <Crown className="text-yellow-500" />, 
    topThree: [
      { name: "Bindas", points: "8****8" },
      { name: "Mystery billionaire", points: "9****9" },
      { name: "COOL BOY", points: "6****5" },
    ],
  },
  {
    category: "Live Ranking",
    icon: <Star className="text-purple-500" />,
    topThree: [
      { name: "Swetambari", points: "10.229.695" },
      { name: "Shyla", points: "10.005.725" },
      { name: "GLOBAL KING", points: "9.444.665" },
    ],
  },
  {
    category: "Hourly Ranking",
    icon: <Flame className="text-orange-500" />,
    topThree: [
      { name: "SIYA", points: "1,814" },
      { name: "Singh", points: "832" },
      { name: "Heartfeel Music", points: "690" },
    ],
  },
  {
    category: "Party Ranking",
    icon: <Trophy className="text-amber-500" />,
    topThree: [
      { name: "PRITESH", points: "1.614.546" },
      { name: "Rimjhim", points: "1.134.590" },
      { name: "KRISHU RAJP", points: "942.034" },
    ],
  },
];

export default function RankingUI() {
  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-6">
      {ranks.map((rank, index) => (
        <Card key={index} className="rounded-2xl shadow-md">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">{rank.category}</h2>
              {rank.icon}
            </div>
            <div className="grid grid-cols-3 gap-4">
              {rank.topThree.map((user, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center justify-center bg-gradient-to-br from-yellow-100 to-white p-3 rounded-xl shadow"
                >
                  <div className="w-14 h-14 bg-yellow-300 rounded-full mb-2 flex items-center justify-center font-bold">
                    #{idx + 1}
                  </div>
                  <span className="text-sm font-medium text-center">
                    {user.name}
                  </span>
                  <span className="text-xs text-gray-500">{user.points}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
