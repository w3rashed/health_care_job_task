import React from "react";
import pieChart from "../../public/image/pieChart.png";
import Image from "next/image";

const OverView = () => {
  return (
    <div className="w-full">
        {/*  left */}
      <div className="w-[216px] h-[312px] border p-5 rounded-3xl flex-1">
        <div>
          <h2 className="font-semibold text-4xl">90%</h2>
          <p className="text-sm mt-2 mb-6">
            Patient satisfaction rate, reflecting our commitment.
          </p>
        </div>
        <Image width={130} height={130} src={pieChart} alt="" />
      </div>
      <div></div>
      <div className="w-[216px] h-[312px] border p-5 rounded-3xl flex-1">
        <div>
          <h2 className="font-semibold text-4xl">90%</h2>
          <p className="text-sm mt-2 mb-6">
            Patient satisfaction rate, reflecting our commitment.
          </p>
        </div>
        <Image width={130} height={130} src={pieChart} alt="" />
      </div>
    </div>
  );
};

export default OverView;
