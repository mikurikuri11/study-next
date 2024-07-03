"use client";

import { Links } from "./components/Links";
import { Headline } from "./components/Headline";
import { useCallback, useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [foo, setFoo] = useState(1);

  const handleClick = useCallback((e: any) => {
    console.log(foo);
    if (foo < 10) {
      setFoo(foo => foo + 1);
    }
  }, [foo]);

  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";

    return () => {
      document.body.style.backgroundColor = "";
    }
  }, [foo])

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
