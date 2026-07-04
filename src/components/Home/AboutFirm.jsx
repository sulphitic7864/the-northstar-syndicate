export default function AboutFirm() {
  return (
    <section className="bg-[#f5f5f5] py-28">
      <div className="max-w-7xl mx-auto md:px-8 px-4">

        {/* Top Label */}
        <div className="flex flex-col items-center">
          <div className="w-14 h-[2px] bg-black mb-8"></div>

          <span className="uppercase tracking-[3px] text-sm">
            About The Firm
          </span>
        </div>

        {/* Main Heading */}
        <div className="text-center mt-12">
          <h2
            className="
              text-4xl
              md:text-5xl
              font-light
              leading-tight
            "
          >
            Infrastructure for the Future
          </h2>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-24 md:mt-28 mt-16">

          {/* Left Side */}
          <div className="max-w-xl">
            <h3 className="md:text-4xl text-2xl font-light md:mb-10 mb-5">
              About Us
            </h3>

            <p className="md:text-base text-sm leading-[2] text-gray-500">
              We deliver the infrastructure needed to power tomorrow's technology. Data Centers are our main priority. The NorthStar Syndicate makes sure Cloud Computing, AI, and Large Language Model Companies have the latency needed to deliver better quality to the end user by building a house for Colocations and Hyperscalers. We are the compass to success.            </p>


            {/* Learn More */}
            <button className="group flex items-center gap-5 md:mt-16 mt-5">
              <span className="text-2xl">
                Learn More
              </span>

              <span className="w-12 h-12 rounded-full border border-black flex items-center justify-center transition-all duration-300 group-hover:bg-black group-hover:text-white">
                →
              </span>
            </button>
          </div>

          {/* Right Side */}
          <div className="flex flex-col justify-start lg:items-start">
            <img
              src="/about-datacenter.png"
              alt="Modern enterprise data center supporting cloud computing and AI infrastructure"
              className="w-full max-w-xl h-[500px] object-cover rounded-lg shadow-lg"
            />
          </div>

        </div>
      </div>
    </section>
  );
}