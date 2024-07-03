"use client";

import { Links } from "./components/Links";
import { Headline } from "./components/Headline";
import { useCallback, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const handleClick = useCallback((e: any) => {
    e.preventDefault();
    alert("ボタンがクリックされました");
  }, []);

  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";

    return () => {
      document.body.style.backgroundColor = "";
    }
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Headline
        path="app/page.tsx"
        number={11}
        obj={{ foo: "foo", bar: 15 }}
        bool={false}
      />
      <section className="flex gap-3">
        <button onClick={handleClick}>ボタン</button>
        <Link href="/about">about</Link>
      </section>
      <Links />
    </main>
  );
}
