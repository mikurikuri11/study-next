import { Links } from "./components/Links";
import { Headline } from "./components/Headline";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Headline
        path="app/page.tsx"
        number={11}
        obj={{ foo: "foo", bar: 15 }}
        bool={false}
      />
      <Links />
    </main>
  );
}
