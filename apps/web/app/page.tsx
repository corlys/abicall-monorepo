"use client";

import { useForm, SubmitHandler } from "react-hook-form";

export default function Home() {

  const { register, handleSubmit } = useForm<{ abi: string }>();
  const abiSubmit: SubmitHandler<{ abi: string }> = (data) => console.log(data)

  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <h1 className="text-7xl">Abicall</h1>
      </div>
      <div className="flex items-center justify-center my-80">
        <div className="w-1/2">
          <h2 className="p-4">Enter your ABI down below!</h2>
          <div className="flex flex-col p-4 gap-4">
            <textarea {...register("abi", { required: true })} className="bg-neutral-300"></textarea>
            <button onClick={handleSubmit(abiSubmit)} className="px-4 py-2 bg-neutral-400 border-4 border-neutral-500 rounded-xl self-end">Submit</button>
          </div>
        </div>
      </div>
    </>
  )
}
