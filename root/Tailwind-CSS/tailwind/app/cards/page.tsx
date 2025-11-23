import Image from "next/image";
import avatar from "./avatar.png";

export default function Testing() {
  return (
    <>
      <h1>Hello, World!</h1>
      <hr />

      <hr />
      <div className="bg-indigo-700 h-45 w-80 p-4 rounded-lg text-white m-10">
        <Image
          src={avatar}
          alt=""
          className="rounded-full object-cover size-16"
        />
        <p className=" font-bold">Alina Fallow</p>
        <p>Sent you a connection request</p>
        <div className="space-x-2 mt-2">
          <button className="border border-b-emerald-700 h-8 w-20 rounded bg-white text-blue-700 font-bold">
            Accept
          </button>
          <button className="border border-amber-200 rounded h-8 w-20 font-bold">
            Decline
          </button>
        </div>
      </div>
      <hr />
      <h1 className="font-bold text-3xl text-center">Services</h1>
      <div className="mt-6 flex flex-col space-y-2">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
            />
          </svg>
          <span> Photo Shoot </span>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
            />
          </svg>
          <span> Video Production </span>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
            />
          </svg>
          <span> Graphics & Animation</span>
        </div>
      </div>
      <hr />
      <h1>My Blog</h1>
      <div className="grid grid-cols-3 gap-1 grid-flow-row-dense">
        {/* <!-- Blog Post 1 --> */}
        <div className=" relative rounded p-4 border border-indigo-800 mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-4 absolute right-4 top-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
            />
          </svg>

          <h2 className="font-bold">How to Master Tailwind CSS</h2>
          <p>
            Learn how to efficiently use Tailwind CSS to create stunning designs
            with minimal effort...
          </p>
          <a href="#" className="underline underline-offset-2  text-blue-800">
            Read more
          </a>
          <p>Most read article of the month</p>
        </div>

        {/* <!-- Blog Post 2 --> */}
        <div className="rounded p-4 border border-indigo-800">
          <h2 className="font-bold">Top Tips for Responsive Design</h2>
          <p>
            Responsive design is crucial in modern web development. Discover
            practical tips to improve your designs...
          </p>
          <a href="#" className="underline underline-offset-2  text-blue-800">
            Read more
          </a>
        </div>

        {/* <!-- Blog Post 3 --> */}
        <div className="rounded p-4 border border-indigo-800 mt-4">
          <h2 className="font-bold">Understanding Utility-First CSS</h2>
          <p>
            Dive into the utility-first CSS approach and see how it can simplify
            your workflow...
          </p>
          <a href="#" className="underline underline-offset-2  text-blue-800">
            Read more
          </a>
        </div>

        {/* <!-- Blog Post 4 --> */}
        <div className="rounded p-4 border border-indigo-800 mt-4">
          <h2 className="font-bold">Beginner`s Guide to Web Accessibility</h2>
          <p>
            Ensure your website is accessible to everyone with this guide...
          </p>
          <a href="#" className="underline underline-offset-2  text-blue-800">
            Read more
          </a>
        </div>

        {/* <!-- Blog Post 5 --> */}
        <div className="rounded p-4 border border-indigo-800 mt-4">
          <h2 className="font-bold">CSS Grid vs Flexbox</h2>
          <p>
            When should you use CSS Grid or Flexbox? Learn the key differences
            and best use cases...
          </p>
          <a href="#" className="underline underline-offset-2  text-blue-800">
            Read more
          </a>
        </div>

        {/* <!-- Blog Post 6 --> */}
        <div className="rounded p-4 border border-indigo-800 mt-4">
          <h2 className="font-bold">10 Must-Know HTML Tips</h2>
          <p>
            Boost your productivity with these 10 essential HTML tips for
            developers...
          </p>
          <a href="#" className="underline underline-offset-2  text-blue-800">
            Read more
          </a>
        </div>

        <a
          href="#"
          className=" bg-blue-800 rounded-full text-sm text-white font-bold px-6 py-2 fixed bottom-2 right-2"
        >
          Follow us on LinkedIn
        </a>
      </div>
    </>
  );
}
