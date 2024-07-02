import { Links } from "../components/Links";
import { Headline } from "../components/Headline";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Headline
        path="app/about/page.tsx"
        number={11}
        obj={{ foo: "foo", bar: 12 }}
        bool
      />
      <Links />
    </main>
  );
}
