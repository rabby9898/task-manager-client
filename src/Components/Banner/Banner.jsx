import Container from "../Shared/Container/Container";

const Banner = () => {
  return (
    <Container>
      <div className="flex justify-between flex-col-reverse md:flex-row items-center gap-10 py-10">
        <div className="w-full flex-1">
          <div className="text-5xl uppercase font-semibold">
            <h1 className="text-[#7850ff]">Effective</h1>
            <h1 className="my-4">Time management</h1>
          </div>
          <div>
            <p className="text-base my-8 text-gray-500 italic">
              Empower your productivity with our intuitive task manager.
              Streamline your workflow, prioritize tasks, and achieve your goals
              seamlessly with our user-friendly platform.
            </p>
          </div>
          <button className="btn h-auto bg-[#7850ff] text-white px-12 py-5 mt-8 uppercase hover:text-[#7850ff] rounded-lg">
            Lets Explore
          </button>
        </div>
        <div className="w-ull flex-1">
          <img
            className="w-full h-full lg:w-[700px] lg:h-[500px]"
            src="https://i.ibb.co/yRrwHT2/banner.jpg"
            alt="banner"
          />
        </div>
      </div>
    </Container>
  );
};

export default Banner;
