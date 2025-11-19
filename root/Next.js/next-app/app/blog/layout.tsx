import Link from "next/link";

export default function LayoutPage({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ul>
        <li>
          <Link href="/blog/essay">Essay</Link>
        </li>
        <li>
          <Link href="/blog/article">Article</Link>
        </li>
      </ul>
      {children}
    </>
  );
}
