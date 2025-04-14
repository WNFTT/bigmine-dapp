import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { usePrivy } from "@privy-io/react-auth";

const contractAddress = "0xdc5f7aed25a04d5004efcb0d61175924424479c4";
const abi = ["function pendingRewards(address) view returns (uint256)"];
const tokenPrice = 0.0697;

export default function RewardsMINE() {
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
      <h3>MINE Pending: {reward.toFixed(6)} MINE</h3>
      <p>約 ${(reward * tokenPrice).toFixed(4)} USDT</p>
    </div>
  );
}