import React from "react";
import WalletSection from "./components/WalletSection";
import RewardsMINE from "./components/RewardsMINE";
import RewardsBIG from "./components/RewardsBIG";
import ClaimAllButton from "./components/ClaimAllButton";

export default function App() {
  return (
    <div style={{ padding: 30, fontFamily: "monospace", backgroundColor: "#111", color: "#0f0" }}>
      <h1>BigMine DApp</h1>
      <WalletSection />
      <hr />
      <RewardsMINE />
      <RewardsBIG />
      <ClaimAllButton />
    </div>
  );
}