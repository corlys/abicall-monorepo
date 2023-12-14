import { trpc } from "@web/app/trpc";

export default async function Home() {
  const { greeting } = await trpc.hello.query({ name: "Piers Morgan Sucks Donkey Ballz" });
  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <h1 className="text-7xl">Abicall</h1>
      </div>
      <div className="flex items-center justify-center my-80">
        <div className="w-1/2">
          <h2 className="p-4">Enter your ABI down below!</h2>
          <div className="flex flex-col p-4 gap-4">
            <textarea className="bg-neutral-300"></textarea>
            <button className="px-4 py-2 bg-neutral-400 border-4 border-neutral-500 rounded-xl self-end">Submit</button>
          </div>
        </div>
      </div>
    </>
  )
}
