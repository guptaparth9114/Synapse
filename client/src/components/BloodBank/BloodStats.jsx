const BloodStats = () => {
    return (
      <div className="flex justify-between mx-20 my-8  ">
        <div className="bg-white w-50 h-50 p-6 rounded-lg text-red-600 text-center flex flex-col justify-center items-center shadow-xl transition duration-300">
          <p className="text-4xl font-bold">123</p>
          <p>Approved Camps</p>
        </div>
        <div className="bg-white w-50 h-50 p-6 rounded-lg text-red-600 text-center flex flex-col justify-center items-center shadow-xl transition duration-300">
          <p className="text-4xl font-bold">456</p>
          <p>Blood Unit Collected</p>
        </div>
        <div className="bg-white w-50 h-50 p-6 rounded-lg text-red-600 text-center flex flex-col justify-center items-center shadow-xl transition duration-300">
          <p className="text-4xl font-bold">789</p>
          <p>Donors Registered</p>
        </div>
        <div className="bg-white w-50 h-50 p-6 rounded-lg text-red-600 text-center flex flex-col justify-center items-center shadow-xl transition duration-300">
          <p className="text-4xl font-bold">1011</p>
          <p>Blood Units Collected</p>
        </div>
      </div>
    );
  };
  export default BloodStats;