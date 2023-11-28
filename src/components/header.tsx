import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex justify-between p-10 bg-slate-200">
      <h1>NextLearn</h1>
      <ul className="flex justify-arround gap-2">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/produk">Produk</Link>
        </li>
      </ul>
    </div>
  );
}
