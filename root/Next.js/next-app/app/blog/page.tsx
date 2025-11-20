import Image from "next/image";
import LayoutPage from "./layout";
import orangeOrchard from "./orange-orchard.png";

export default function BlogPage() {
  return (
    <>
      <LayoutPage />
      <h1 className="text-4xl">Blog Page</h1>
      <Image
        src={orangeOrchard}
        alt="Description"
        width={1000}
        height={760}
        // unoptimized
      />
    </>
  );
}
