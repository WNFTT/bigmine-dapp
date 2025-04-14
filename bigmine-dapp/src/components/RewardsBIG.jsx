import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { usePrivy } from "@privy-io/react-auth";

const contractAddress = "0x09ee83d8fa0f3f03f2aefad6a82353c1e5de5705";
const abi = ["function pendingRewards(address) view returns (uint256)"];
const tokenPrice = 5.84;

export default function RewardsBIG() {
  const { user } = usePrivy();
  const [reward, setReward] = useState(0);

  useEffect(() => {
    if (user?.wallet?.address) {
      const provider = new ethers.providers.JsonRpcProvider("https://rpc.ankr.com/eth");
      const contract = new ethers.Contract(contractAddress, abi, provider);
      contract.pendingRewards(user.wallet.address).then((res) => setReward(parseFloat(ethers.utils.formatUnits(res, 18))));
    }
  }, [user]);

  return (
    <div>
      <h3>BIG Pending: {reward.toFixed(6)} BIG</h3>
      <p>約 ${(reward * tokenPrice).toFixed(4)} USDT</p>
    </div>
  );
}