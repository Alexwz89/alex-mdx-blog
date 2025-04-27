import BlogList from "./ui/BlogList";

export default function Home() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">My Portfolio</h1>
      <p className="mb-4">
        {`I'm a Alex, a software engineer with a passion for building products that help people live better lives.`}
      </p>

      <div className="my-8">
        <BlogList />
      </div>
    </section>
  );
}
