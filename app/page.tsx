"use client";

import { Links } from "./components/Links";
import { Headline } from "./components/Headline";
import { useCallback } from "react";

export default function Home() {
  const handleClick = useCallback((e: any) => {
    e.preventDefault();
    alert("ボタンがクリックされました");
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Headline
        path="app/page.tsx"
        number={11}
        obj={{ foo: "foo", bar: 15 }}
        bool={false}
      />
      <button onClick={handleClick}>ボタン</button>
      <Links />
    </main>
  );
}
