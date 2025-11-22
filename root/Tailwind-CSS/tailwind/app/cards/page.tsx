import Image from "next/image";
import avatar from "./avatar.png";

export default function Testing() {
  return (
    <>
      <h1>Hello, World!</h1>
      <hr />

      <hr />
      <div className="bg-indigo-700 h-45 w-80 p-4 rounded-lg text-white">
        <img src="/avatar.png" alt="" className="rounded-full size-16" />
        <p className=" font-bold">Alina Fallow</p>
        <p>Sent you a connection request</p>
        <div className="space-x-2">
          <button className="border border-b-emerald-700 h-8 w-20 rounded bg-white text-emerald-700 font-bold">
            Accept
          </button>
          <button className="border border-amber-200 rounded h-8 w-20 font-bold">
            Decline
          </button>
        </div>
      </div>
      <hr />
      <h1>My Blog</h1>
      <div>
        {/* <!-- Blog Post 1 --> */}
        <div>
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
            />
          </svg> */}

          <h2>How to Master Tailwind CSS</h2>
          <p>
            Learn how to efficiently use Tailwind CSS to create stunning designs
            with minimal effort...
          </p>
          <a href="#">Read more</a>
          <p>Most read article of the month</p>
        </div>

        {/* <!-- Blog Post 2 --> */}
        <div>
          <h2>Top Tips for Responsive Design</h2>
          <p>
            Responsive design is crucial in modern web development. Discover
            practical tips to improve your designs...
          </p>
          <a href="#">Read more</a>
        </div>

        {/* <!-- Blog Post 3 --> */}
        <div>
          <h2>Understanding Utility-First CSS</h2>
          <p>
            Dive into the utility-first CSS approach and see how it can simplify
            your workflow...
          </p>
          <a href="#">Read more</a>
        </div>

        {/* <!-- Blog Post 4 --> */}
        <div>
          <h2>Beginner`s Guide to Web Accessibility</h2>
          <p>
            Ensure your website is accessible to everyone with this guide...
          </p>
          <a href="#">Read more</a>
        </div>

        {/* <!-- Blog Post 5 --> */}
        <div>
          <h2>CSS Grid vs Flexbox</h2>
          <p>
            When should you use CSS Grid or Flexbox? Learn the key differences
            and best use cases...
          </p>
          <a href="#">Read more</a>
        </div>

        {/* <!-- Blog Post 6 --> */}
        <div>
          <h2>10 Must-Know HTML Tips</h2>
          <p>
            Boost your productivity with these 10 essential HTML tips for
            developers...
          </p>
          <a href="#">Read more</a>
        </div>

        <a href="#">Follow us on LinkedIn</a>
      </div>
    </>
  );
}
