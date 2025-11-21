export default function Testing() {
  return (
    <>
      <h1>Hello, World!</h1> <hr />
      <div>
        <br />
        <p>
          Using this tool has simplified our workflow and boosted productivity.
          It`s incredibly intuitive, and we`ve seen noticeable improvements in
          efficiency across our entire team.
        </p>
        <p>Lea Burgot</p>
        <p>Team Lead</p>
      </div>
      <hr />
      <div className="p-8">
        <section className="p-8 border-2 border-indigo-500 rounded-xl">
          <h1 className="font-bold text-4xl/12 text-blue-600">
            Welcome to Tailwind CSS
          </h1>
          <span className="font-medium text-lg bg-amber-100 text-black">
            Rapidly build modern websites without ever leaving your HTML.
          </span>
          <p className="text-sm">
            Tailwind CSS is a utility-first CSS framework packed with classes
            like
            <code className="font-bold">flex</code>,
            <code className="font-bold">pt-4</code>,
            <code className="font-bold">text-center</code> and
            <code className="font-bold">rotate-90</code>
            that can be composed to build any design, directly in your markup.
          </p>
          <a
            className="underline underline-offset-4"
            href="https://www.tailwindcss.com"
          >
            Learn more
          </a>
        </section>
      </div>
    </>
  );
}
