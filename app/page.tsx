"use client";

import { Links } from "./components/Links";
import { Headline } from "./components/Headline";
import { useCallback, useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState("");
  const [isShow, setIsShow] = useState(true);
  const [array, setArray] = useState<string[]>([]);

  const handleClick = useCallback(
    (e: any) => {
      if (count < 10) {
        setCount((prevCount) => prevCount + 1);
      }
    },
    [count]
  );

  const handleChange = useCallback((e: any) => {
    if (e.target.value.length > 5) {
      alert("5文字以内で入力してください");
      return;
    }
    setText(e.target.value.trim());
  }, []);

  const handleShow = useCallback(() => {
    setIsShow((prevIsShow) => !prevIsShow);
  }, []);

  const handleAdd = useCallback(() => {
    setArray((prevArray) => {
      if (prevArray.some((item) => item === text)) {
        alert("同じ値が既に存在しています");
        return prevArray;
      }
      return [...prevArray, text];
    });
  }, [text]);

  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [count]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Headline
        path="app/page.tsx"
        number={11}
        obj={{ foo: "foo", bar: 15 }}
        bool={false}
      />
      {isShow ? <h1>{count}</h1> : null}
      <ul>
        {array.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <section className="flex gap-3">
        <button onClick={handleAdd}>配列ボタン</button>
        <button onClick={handleClick}>数字ボタン</button>
        <button onClick={handleShow}>真偽値ボタン</button>
        <input
          className="bg-gray-500 p-2 rounded-md"
          type="text"
          value={text}
          onChange={handleChange}
        />
        <Link href="/about">about</Link>
      </section>
      <Links />
    </main>
  );
}
