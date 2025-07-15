import Link from "next/link";

export default function NotFound() {
  return (
    <main className="h-[calc(100vh-56px-56px)] mt-14 flex items-center justify-center flex-col gap-8">
      <h2 className="text-8xl">Not Found</h2>
      <Link
        href="/"
        className="bg-white text-black p-2 rounded-lg disabled:bg-gray-400 hover:bg-blue-300 hover:cursor-pointer"
      >
        Return Home
      </Link>
    </main>
  );
}
