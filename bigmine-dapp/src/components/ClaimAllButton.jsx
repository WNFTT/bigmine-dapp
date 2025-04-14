import React from "react";
import { ethers } from "ethers";
import { useWallets } from "@privy-io/react-auth";

const mineAddress = "0xdc5f7aed25a04d5004efcb0d61175924424479c4";
const bigAddress = "0x09ee83d8fa0f3f03f2aefad6a82353c1e5de5705";
const abi = ["function claimRewards()"];

export default function ClaimAllButton() {
  const { wallet } = useWallets();

  const claimAll = async () => {
    const signer = await wallet.getEthersSigner();
    const mine = new ethers.Contract(mineAddress, abi, signer);
    const big = new ethers.Contract(bigAddress, abi, signer);
    await mine.claimRewards();
    await big.claimRewards();
    alert("一鍵領取完成！");
  };

  return <button onClick={claimAll}>🎁 一鍵領取 MINE + BIG</button>;
}