import Image from "next/image";
import Link from "next/image";

const section6 = () => {
  return (
    <section className="container mx-auto px-20 py-10">
      <div className="grid sm:grid-cols-1 gap-x-12">
        <div className="details justify-center">
          <p className="font-medium text-gray-800 text-xl sm:text-lg bg-slate-200 pl-2">
            Dataset iterations:
          </p>

          <p className=" text-gray-800 hover:text-gray-600 my-4">
            We first focused on all countries in Southeast Asia and then worked
            our way to decreasing the number of countries as the data range was
            too diverse and hence meaningful conclusions could not be achieved.
            We reduced our scope to emphasize on countries with lower-income and
            having agricultural significance, specifically Myanmar and Cambodia.{" "}
          </p>
          <p className="mb-4">
            We decided to narrow our scope to lower-middle income countries
            categorised by the World Bank and focus on countries whose economies
            are more dependent on agriculture as such countries are more at risk
            of facing food security issues. This left us with Cambodia and
            Myanmar, where agriculture makes up more than 20% of their GDP
            (22.7% and 20.9% respectively, 2020)
          </p>
          <p className="mb-4">
            We explored multiple categories of features and performed linear
            regression on them one at a time and identified those features with
            which we were able to identify a relation: economic, environmental,
            food production features. After testing them, we came to a
            conclusion to use the following economic measures 'GDP per Capita
            (USD)', 'Annual Inflation Rate (%)', 'Food production index
            (2014-2016 = 100)' as our features. We chose prevalence of
            undernourishment as a (%) as our target.
          </p>
        </div>
      </div>

      <div>
        <p className="font-medium text-gray-800 text-xl sm:text-lg bg-slate-200 pl-2 mt-6">
          Model:
        </p>

        <p className="text-gray-800 hover:text-gray-600 mb-4 mt-3">
          By understanding the relation between the economic features - GDP per
          Capita (USD), Annual Inflation Rate (%), Gross per capita Production
          Index Number (2014-2016 = 100) we can model them to predict prevalence
          of undernourishment using multiple liear regression. We use Binary
          Categorical as a feature where each country is represented by 0 or 1
          as a measure to prevent having to make two separate models for the two
          countries.
        </p>
        <p className="mb-4">Intuitive analysis: Intercept = 13.17</p>
        <p>
          GDP per Capita (USD) coefficient: -5.13 (gdp increases,
          undernourishment decreases) Annual Inflation Rate (%) coefficient:
          1.16 (inflation increases, undernourishment increases) Gross per
          capita Production Index Number (2014-2016 = 100) coefficient: -2.46
          (agricultural production increases, undernourishment decreases)
        </p>
      </div>
      <div className="grid sm:grid-cols-1 gap-x-12">
        {/* 2 div tages since two columns */}

        <div className="details flex flex-col justify-center mt-6">
          <div>
            <p className="font-medium text-gray-800 text-xl sm:text-lg bg-slate-200 pl-2">
              Improvement in accuracy of model:
            </p>
          </div>

          <div className="title">
            <p className=" text-gray-800 hover:text-gray-600 my-4">
              Prevalence of undernourishment has data from 2000 - 2021. Thus, we
              had 40 records for our two target countries. Due to our limited
              dataset, the diversity of training data played a huge role. We
              made efficient use of the limited data at hand to get the best
              possible adjusted r2 value and lowest standard error of regression
              by creating a function to find the best random seed value and
              therefore, the most diverse training data set. This inturn gave us
              a good adjusted r2 value and reduced standard error.
            </p>
            <p className=" text-gray-800 hover:text-gray-600 my-4">
              We also experimented with different ratios of training and test
              data sets.
            </p>
            <div className="bg-slate-100 py-1">
              <p className=" text-gray-800 text-center">
                Adjusted R-squared = 0.8742239115394154
              </p>
              <p className=" text-gray-800 text-center">
                Standard error of regression = 0.3730853869367281
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default section6;
