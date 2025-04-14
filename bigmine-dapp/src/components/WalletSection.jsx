import React from "react";
import { usePrivy } from "@privy-io/react-auth";

export default function WalletSection() {
  const { ready, authenticated, login, logout, user } = usePrivy();
  const address = user?.wallet?.address;

  return (
    <div>
      {!authenticated ? (
        <button onClick={login}>登入錢包</button>
      ) : (
        <>
          <p>已登入錢包：{address}</p>
          <button onClick={logout}>登出</button>
        </>
      )}
    </div>
  );
}