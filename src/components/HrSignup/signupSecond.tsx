const SignupTwo = ({
  handleImageChange,
  handleSubmit,
  register,
  onSubmit,
  errors,
  setValue,
}: any) => {
  return (
    <div className="main min-h-vhcalc225px bg-[url(../assets/images/Pattern.png)] bg-no-repeat bg-top px-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="form-2 pb-10 flex flex-col max-w-md m-auto justify-center "
      >
        <div className="flex items-center gap-2">
          <div>
            <h1 className="text-center flex justify-center">
              <img src="/assets/images/Custom-icon.png" width={'88px'} height={'88px'} />
            </h1>
          </div>
          <div>
            <h2 className="text-main-heading text-2xl font-medium mb-1">
              Personal Information
            </h2>
            <p className="text-gray-dark">
              Provide essential information to proceed.
            </p>
          </div>
        </div>
        <hr className="my-6"></hr>
        <div className="flex items-start content-center gap-5 mb-6">
          <div
            className={`${
              errors?.image ? "border rounded-full border-red-500" : ""
            }`}
          >
            <h1>
              <img src="/assets/images/Avatar1.png" />
            </h1>
          </div>
          <div>
            <h3 className="text-main-heading font-medium text-start">
              Upload Image:
            </h3>
            <p className="text-gray-dark font-normal text-start mt-1">
              Min 400x400px, PNG or JPEG
            </p>
            <div className="relative flex mt-3">
              <input
                type="file"
                id="image-upload"
                accept="image/*"
                onChange={(e) => {
                  handleImageChange(e);
                  setValue("image", e.target.files);
                }}
                className="relative z-10 w-20 opacity-0 block"
              />
              <div className="border absolute top-0 left-0 p-2 leading-5 text-gray-dark rounded-lg text-sm">Upload</div>
            </div>
            {errors?.image && (
              <p className="text-red-500 text-sm mt-2">
                {errors?.image?.message}
              </p>
            )}
          </div>
        </div>

        <label
          className="block text-main-heading text-sm font-medium mb-2"
          htmlFor="first_name"
        >
          First Name*
        </label>
        <input
          className={`shadow appearance-none border  rounded-[10px] w-full py-2.5 px-2.5 text-input-text leading-tight focus:outline-none focus:shadow-outline ${
            errors.first_name ? "border-[#F04438]" : "border-slate-300"
          }`}
          id="first_name"
          type="text"
          placeholder="James"
          {...register("first_name")}
        />
        {errors?.first_name && (
          <p className="text-red-500 text-sm mt-2">
            {errors?.first_name?.message}
          </p>
        )}
        <div className="my-3">
          <label
            className="block text-main-heading text-sm font-medium mb-2"
            htmlFor="last_name"
          >
            Last Name*
          </label>
          <input
            className={`shadow appearance-none border  rounded-[10px] w-full py-2.5 px-2.5 text-input-text leading-tight focus:outline-none focus:shadow-outline ${
              errors.last_name ? "border-[#F04438]" : "border-slate-300"
            }`}
            id="last_name"
            type="text"
            placeholder="Brown"
            {...register("last_name")}
          />
          {errors?.last_name && (
            <p className="text-red-500 text-sm mt-2">
              {errors?.last_name?.message}
            </p>
          )}
        </div>
        <div>
          <label
            className="block text-main-heading text-sm font-medium mb-2"
            htmlFor="phone_no"
          >
            Phone Number*
          </label>
          <input
            className={`shadow appearance-none border  rounded-[10px] w-full py-2.5 px-2.5 text-input-text leading-tight focus:outline-none focus:shadow-outline ${
              errors.phone_no ? "border-red-500" : "border-slate-300"
            }`}
            id="phone_no"
            type="number"
            placeholder="(555) 000-0000"
            {...register("phone_no")}
          />
          {errors?.phone_no && (
            <p className="text-red-500 text-sm mt-2">
              {errors?.phone_no?.message}
            </p>
          )}
        </div>

        <button
          className="rounded-lg w-full mt-6 bg-blue-600 hover:bg-purple-700 py-2.5 px-2.5 text-white font-semibold "
          type="submit"
        >
          Continue
        </button>
      </form>
    </div>
  );
};

export default SignupTwo;
