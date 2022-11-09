const Hero = () => {
  return (
    <div className="grid h-screen mb-12 bg-fixed bg-center bg-cover relative custom-img">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/40 z-[2]" />
      <div className="container p-5 mx-auto text-white z-[2] flex flex-col items-left justify-center">
        <h1 className="text-5xl md:text-8xl">Resources</h1>
        <p className="py-5 text-lg md:text-2xl">
          In publishing and graphic design, Lorem ipsum is a<br /> placeholder
          text commonly used to demonstrate.
        </p>
      </div>
    </div>
  );
};

export default Hero;
