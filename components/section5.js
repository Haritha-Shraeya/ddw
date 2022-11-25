import Interactive from "./_child/interactive";

const section5 = () => {
  // const bg = {
  //   background: "url('/images/bg3.png') no-repeat",
  //   backgroundPosition: "top",
  // };
  return (
    <section className="pt-20 pb-10 items-center ">
      {/* style={bg} */}
      <div className="container mx-auto py-5 px-20 bg-gray-100 items-center">
        {/* container md:px-20 */}
        <h1 className=" text-2xl uppercase text-center pb-5">Prediction</h1>

        {Slide()}
      </div>
    </section>
  );
};
export default section5;

const Slide = () => {
  return (
    <div className="grid sm:grid-cols-1 gap-x-12">
      {/* 2 div tages since two columns */}

      <div className="details justify-center">
        <div className="title">
          <p className="font-medium text-gray-800 text-center text-md sm:text-md">
            Enter sample values for each feature
          </p>
        </div>
      </div>
      <div>
        <Interactive></Interactive>
      </div>
    </div>
  );
};
