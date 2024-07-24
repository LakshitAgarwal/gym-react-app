import { Link } from "react-router-dom";
import Confetti from "react-confetti";

const Success = () => {
  return (
    <div>
      <div className="h-fit w-[90%] md:w-fit mx-auto mt-36 md:px-20 py-6 bg-purple-100 rounded-2xl">
        <h1 className="text-4xl text-center mt-10">
          Thank you for your message!
        </h1>

        <p className="text-center mt-5">
          We will get back to you as soon as possible.
        </p>
        <Link
          className="text-xs my-4 text-purple-800 underline flex justify-center items-center"
          to="/"
        >
          Return to home page
        </Link>
      </div>
      <Confetti
        width={window.innerWidth}
        height={window.innerHeight}
        numberOfPieces={500}
        recycle={false}
        gravity={0.3}
      />
    </div>
  );
};

export default Success;
