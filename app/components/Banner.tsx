import Link from "next/link";

const Banner = () => {
  return (
    <article
      className="bg-cover bg-no-repeat bg-center py-36 relative max-w-"
      style={{ backgroundImage: 'url("/images/banner-bg.jpg")' }}
    >
      <div className="container max-w-[1200px]">
        <h1 className="xl:text-6xl md:text-5xl text-4xl text-gray-800 font-semibold mb-4">
          Best Collction For <br className="hiddem sm:block" /> Home Decoration
        </h1>
        <p className="text-base tex-gray-600 leading-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste dolore
          veniam quibusdam cupiditate asperiores magnam odio amet ipsa,{" "}
          <br className="hiddem sm:block" /> quidem, voluptatem earum, magni
          dolorum minima deserunt modi vel vero? Natus, at.
        </p>
        <div className="mt-12 ">
          <Link
            href="/shop"
            className="bg-primary border border-primary text-white px-8 py-3 font-medium rounded-md uppercase hover:bg-transparent hover:text-primary transition"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Banner;
