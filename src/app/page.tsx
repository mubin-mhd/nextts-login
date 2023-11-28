"use client";
import { supabase } from "./api/supabase/supabase";

export default function Home() {
  console.log("supabase", supabase);
  return (
    <div>
      <p className="text-sky-500 font-semibold">Learn Next.js 13</p>
      <button className="mt-10 ml-10 bg-blue-600 text-white px-5 py-2 rounded-lg">
        Klik 1
      </button>
      <button className="mt-10 ml-10 bg-yellow-60 0 text-white px-5 py-[6px] rounded-lg">
        Klik 2
      </button>
    </div>
  );
}
