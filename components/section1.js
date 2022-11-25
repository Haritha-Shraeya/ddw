import Image from "next/image";
import Link from "next/link";

const section1 = () => {
  // const bg = {
  //   background: "url('/images/bg3.png') no-repeat",
  //   backgroundPosition: "top",
  // };
  return (
    <section className="pt-20 pb-20 ">
      {/* style={bg} */}
      <div
        className="container mx-auto py-10 px-20 bg-local bg-no-repeat bg-cover bg-center
      bg-[url('/images/section1bg.jpg')]"
      >
        {/* container md:px-20 */}
        <h1 className=" text-2xl uppercase text-center pb-12">
          Problem Statement
        </h1>
        {Slide()}
      </div>
    </section>
  );
};
export default section1;

const Slide = () => {
  return (
    <div className="grid sm:grid-cols-2 gap-x-12 items-center">
      {/* 2 div tages since two columns */}
      <div className="image">
        <Image src="/images/pic.png" width={500} height={600} />
        {/* path is not /public/images/sample.jpg :(( */}
      </div>
      <div className="details justify-center">
        <div className="title mt-2">
          <p className="font-medium text-gray-800 text-md sm:text-md">
            We aim to predict the future of food safety and security in
            countries of the lower income bracket like Cambodia and Myanmar
            through the prediction of amount of undernourishment as it
            encapsulates percentage of people whose food requirements are not
            satisfied.
          </p>
          <div className="font-medium uppercase text-gray-800 text-lg pt-7 pb-2 text-center">
            Relevance
          </div>
          <p className="font-medium text-gray-800 text-md sm:text-md">
            Southeast Asia is a diverse, fast-growing region, making remarkable
            progress in terms of improving food security, going from 31%
            undernourishment in the 1990s to below 10% by 2014-2016 . Although
            undernourishment has been decreasing, food security is still a
            concern when accounting for the fast-growing population in Southeast
            Asia, projected to grow from 640 million to more than 710 million by
            2030
          </p>
        </div>
      </div>
    </div>
  );
};
