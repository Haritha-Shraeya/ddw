import { useForm } from "react-hook-form";
import React from "react";

const interactive = () => {
  const { register, handleSubmit, errors } = useForm();
  const [result, setResult] = React.useState(0);
  function onSubmitForm(values) {
    console.log(values);
    const result =
      34.07453805 +
      values.binary * -0.693800946 +
      values.gdp * -0.012426527 +
      values.inflation * 0.179411062 +
      values.foodprod * -0.130917221;
    console.log(result);
    setResult(result);
  }
  return (
    <div className="pt-10 items-center justify center">
      <form onSubmit={handleSubmit(onSubmitForm)} className="flex ">
        <div className="flex pb-2">
          <input
            type="text"
            placeholder="Binary"
            {...register("binary", { required: true })}
            className="mr-5"
          />
        </div>
        <div className="flex pb-2">
          <input
            type="text"
            placeholder="GDP per capita (USD)"
            {...register("gdp", { required: true })}
            className="mr-5"
          />
        </div>
        <div className="flex pb-2">
          <input
            type="text"
            placeholder="Annual Inflation Rate (%)"
            {...register("inflation", { required: true })}
            className="mr-5"
          />
        </div>
        <div className="flex pb-2">
          <input
            type="text"
            placeholder="Food Production Index"
            {...register("foodprod", { required: true })}
            className="mr-5"
          />
        </div>
        <button type="submit" className="bg-slate-200 rounded px-2 py-1">
          Submit
        </button>
      </form>
      <p className="pt-5">
        Predicted Percentage of Undernourishment Prevalence: {result}
      </p>
    </div>
  );
};
export default interactive;
