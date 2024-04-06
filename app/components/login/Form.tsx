const Form = () => {
  return (
    <form className="flex flex-col gap-5">
      {/* AVATAR */}
      <div className="flex flex-col xl:flex-row gap-5">
        <div className="form-control w-full">
          <label htmlFor="" className="label">
            <span className="label-text text-lg">What is your name?</span>
          </label>
          <input
            type="text"
            placeholder="Username"
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="form-control w-full">
          <label htmlFor="" className="label">
            <span className="label-text text-lg">Put your email</span>
          </label>
          <input
            type="text"
            placeholder="Email"
            className="input input-bordered w-full"
            required
          />
        </div>
      </div>
    </form>
  );
};

export default Form;
