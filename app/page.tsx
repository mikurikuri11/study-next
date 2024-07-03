"use client";

import { Links } from "./components/Links";
import { Headline } from "./components/Headline";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  // let foo = 1;

  const [foo, setFoo] = useState(1);
  const handleClick = (e: any) => {
    setFoo(foo => foo + 1);
    console.log(foo);
  };

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
      <h1>{foo}</h1>
      <section className="flex gap-3">
        <button onClick={handleClick}>ボタン</button>
        <Link href="/about">about</Link>
      </section>
      <Links />
    </main>
  );
}
