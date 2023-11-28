import React from "react";
import { BlogType } from "@/types/blog";
import { splitString } from "@/helpers/formatString";

export default function CardListPost({ datas, setIds }: any) {
  return (
    <div className="w-1/3 flex flex-wrap gap-4 items-center justify-center h-screen overflow-y-auto">
      {datas?.map((data: BlogType) => (
        <a
          key={data.id}
          className="rounded-sm w-full grid grid-cols-12 bg-white shadow p-3 gap-2 items-center hover:shadow-lg transition delay-150 duration-300 ease-in-out hover:scale-105 transform"
          onClick={() => setIds(data.id)}
        >
          <div className="col-span-12 md:col-span-1"></div>

          <div className="col-span-11 xl:-ml-5">
            <p className="text-blue-600 font-semibold"> {data.title}</p>
          </div>
          <div className="md:col-start-2 col-span-11 xl:-ml-5">
            <p className="text-sm text-gray-800 font-light">
              {splitString(data.body)}
            </p>
          </div>
        </a>
      ))}
    </div>
  );
}
