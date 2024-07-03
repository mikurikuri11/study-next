"use client";

import { Links } from "./components/Links";
import { Headline } from "./components/Headline";
import Link from "next/link";

import { useCounter } from "./hooks/useCounter";
import { useInputArray } from "./hooks/useInputArray";
import { useBgBlue } from "./hooks/useBgBlue";

export default function Home() {
  const { count, isShow, handleClick, handleShow } = useCounter();
  const { text, array, handleChange, handleAdd } = useInputArray();
  useBgBlue();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Headline
        path="app/page.tsx"
        number={11}
        obj={{ foo: "foo", bar: 15 }}
        bool={false}
      />

      <Link href="/about">about</Link>

      <section className="flex gap-3">
        {isShow ? <h1>{count}</h1> : null}
        <button onClick={handleClick}>数字ボタン</button>
        <button onClick={handleShow}>真偽値ボタン</button>
      </section>

      <section>
        <div>
          <ul>
            {array.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="flex gap-3">
          <button onClick={handleAdd}>配列ボタン</button>
          <input
            className="bg-gray-500 p-2 rounded-md"
            type="text"
            value={text}
            onChange={handleChange}
          />
        </div>
      </section>
      <Links />
    </main>
  );
}
