import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex justify-center flex-col items-center h-screen">
        <h1 className="text-3xl">Zustand TodoList</h1>
        {/* Link to the 2 pages */}
        <div className="flex flex-col">
          <Link href={"/intro"}>Intro</Link>
          <Link href={"/todo"}>TodoList</Link>
        </div>
      </div>
    </>
  );
}
