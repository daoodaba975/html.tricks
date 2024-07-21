import Link from "next/link";
import Image from "next/image";
import React from "react";
import Header from "@/components/Header";

const tips = [
  { name: "Abbreviation tag", path: "abbreviation-tag" },
  { name: "Auto refresh", path: "auto-refresh" },
  { name: "Content editable", path: "content-editable" },
  { name: "Details tag", path: "details-tag" },
  { name: "File directory", path: "file-directory" },
  { name: "Input Color picker", path: "input-color-picker" },
  { name: "Marquee tag", path: "marquee-tag" },
  { name: "Meter tag", path: "meter-tag" },
  { name: "Quote tag", path: "quote-tag" },
  { name: "Reversed list", path: "reversed-list" },
];

export default function Home() {
  return (
    <>
      <Header />
      <div className="container mx-auto p-8 m-2">
        <h1 className="text-4xl font-bold mb-4">HTML Tricks</h1>
        <p className="mb-6">
          Some cool HTML tricks that many developers ignore.
          <br />
          Most are little known HTML tags and rarely used attributes.
        </p>

        <table className="table-auto w-full mb-6">
          <thead className="text-left">
            <tr className="bg-gray-200">
              <th className="px-4 py-2">Tag</th>
              <th className="px-4 py-2">Code</th>
            </tr>
          </thead>
          <tbody>
            {tips.map((tip) => (
              <tr key={tip.path} className="border-b">
                <td className="px-4 py-2">{tip.name}</td>
                <td className="px-4 py-2">
                  <Link
                    href={`/tips/${tip.path}`}
                    className="text-blue-500 hover:underline"
                  >
                    View code
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <Link href="https://www.buymeacoffee.com/daoodaba975" target="_blank">
          <Image
            className="rounded-full"
            src="/lato.png"
            alt="Buy Me A Coffee"
            height={51}
            width={217}
          />
        </Link>
      </div>
    </>
  );
}
