import React from "react";

export default function CardDetailPost({ data }: any) {
  return (
    <div className="p-10">
      <h2 className="text-2xl font-semibold mb-5">{data.title}</h2>
      <p className="text-md font-normal">{data.body}</p>
    </div>
  );
}
