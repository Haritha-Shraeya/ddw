import Link from "next/link";
import Image from "next/image";

const section2 = () => {
  return (
    <section className="container mx-auto px-20 py-10">
      <h1 className="text-2xl uppercase text-center pb-12 py-12">
        Visualization
      </h1>
      <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-14">
        {" "}
        {post1()}
        {post2()}
        {post3()}
        {post4()}
      </div>
    </section>
  );
};
export default section2;

const post1 = () => {
  return (
    <div className="post">
      <div className="image">
        <Image
          src="/images/Binary.png"
          className="rounded"
          width={500}
          height={350}
        />
      </div>
      <div className="info flex flex-col justify-center py-4">
        <div className="title mt-2">
          <p className="font-medium text-gray-800 text-xl sm:text-lg">
            Scatter Plot of Binary Categorical vs Percentage of Undernourishment
            Prevalence (3-Year Average)
          </p>
        </div>
      </div>
    </div>
  );
};

const post2 = () => {
  return (
    <div className="post">
      <div className="image">
        <Image
          src="/images/gdp.png"
          className="rounded"
          width={500}
          height={350}
        />
      </div>
      <div className="info flex flex-col justify-center py-4">
        <div className="title mt-2">
          <p className="font-medium text-gray-800 text-xl sm:text-lg pt-3">
            Scatter Plot of GDP per Capita (USD) vs Percentage of
            Undernourishment Prevalence (3-Year Average)
          </p>
        </div>
      </div>
    </div>
  );
};

const post3 = () => {
  return (
    <div className="post">
      <div className="image">
        <Image
          src="/images/inflation.png"
          className="rounded"
          width={500}
          height={350}
        />
      </div>
      <div className="info flex flex-col justify-center py-4">
        <div className="title mt-2">
          <p className="font-medium text-gray-800 text-xl sm:text-lg">
            Annual Inflation Rate (%) vs Percentage of Undernourishment
            Prevalence (3-Year Average)
          </p>
        </div>
      </div>
    </div>
  );
};

const post4 = () => {
  return (
    <div className="post">
      <div className="image">
        <Image
          src="/images/foodpred.png"
          className="rounded"
          width={500}
          height={350}
        />
      </div>
      <div className="info flex flex-col justify-center py-4">
        <div className="title mt-2">
          <p className="font-medium text-gray-800 text-xl sm:text-lg pt-12">
            Gross per capita Production Index Number (2014-2016 = 100) vs
            Percentage of Undernourishment Prevalence (3-Year Average)
          </p>
        </div>
      </div>
    </div>
  );
};
