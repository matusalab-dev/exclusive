import Button from "../components/Button";

const NotFound = () => {
  return (
    <section className="flex mt-24 text-center flex-col gap-4 justify-center items-center">
      <div className="flex flex-col gap-8">
        <h1 className="text-7xl font-bold">404 Not Found</h1>
        <p>Your visited page not found. You may go home page.</p>
      </div>
      <Button size="lg" color="red" children="back to home page" />
    </section>
  );
};

export default NotFound;
