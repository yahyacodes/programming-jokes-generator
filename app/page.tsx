import JokesGenerator from "@/components/jokes-generator";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <JokesGenerator />
    </main>
  );
}
