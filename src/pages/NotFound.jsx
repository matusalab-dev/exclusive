import Button from "../components/Button";

const NotFound = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-4 mt-24 text-center">
      <div className="flex flex-col gap-8">
        <h1 className="font-bold text-7xl">404 Not Found</h1>
        <p>Your visited page not found. You may go home page.</p>
      </div>
      <Button
        as="Link"
        to="/"
        size="lg"
        color="red"
        children="back to home page"
      />
    </section>
  );
};

export default NotFound;
