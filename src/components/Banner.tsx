import bannerVideo from "../../public/banner.mp4";

const Banner = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={bannerVideo} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

      {/* Text Content */}
      <div className="relative text-center text-white px-6">
        <p className="text-sm md:text-lg uppercase pb-2">Driven by performance</p>
        <h1 className="text-3xl md:text-5xl font-semibold mt-2">
          Soft trims and{" "}
          <span className="text-blue-400">NVH solutions</span> <br/>
          <span className="text-white font-light">for seamless rides</span>
        </h1>
      </div>
    </section>
  );
};

export default Banner;
