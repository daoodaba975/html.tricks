import { useRouter } from "next/router";
import Link from "next/link";
import fs from "fs";
import path from "path";
import { useEffect, useState } from "react";

export default function Tip({ tipHtml, tipPath }) {
  const router = useRouter();
  const { tip } = router.query;
  const [htmlContent, setHtmlContent] = useState("");

  useEffect(() => {
    if (tipHtml) {
      setHtmlContent(tipHtml);
    }
  }, [tipHtml]);

  return (
    <div className="container mx-auto p-8 m-2">
      <Link href="/" className="text-2xl mb-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-undo-2"
        >
          <path d="M9 14L4 9l5-5" />
          <path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11" />
        </svg>
      </Link>
      <h1 className="text-3xl font-bold uppercase mb-6">{tip}</h1>
      <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-4">
        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold mb-4">View</h2>
          <iframe
            src={`/src/${tipPath}.html`}
            className="w-full h-96 border rounded-md"
          ></iframe>
        </div>
        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold mb-4">Code</h2>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            <code>{htmlContent}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const tips = [
    "abbreviation-tag",
    "auto-refresh",
    "content-editable",
    "details-tag",
    "file-directory",
    "input-color-picker",
    "marquee-tag",
    "meter-tag",
    "quote-tag",
    "reversed-list",
  ];

  const paths = tips.map((tip) => ({
    params: { tip },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const tipPath = params.tip;
  const filePath = path.join(process.cwd(), "public", "src", `${tipPath}.html`);
  const tipHtml = fs.readFileSync(filePath, "utf8");

  return {
    props: {
      tipHtml,
      tipPath,
    },
  };
}
