import React from "react";
import pieChart from "../../public/image/pieChart.png";
import videoIcon from "../../public/image/video icon.png";
import Image from "next/image";

const OverView = () => {
  return (
    <div className="flex">
      {/*  left */}
      <div className="w-[216px] h-[312px] border p-5 rounded-3xl flex-1">
        <div>
          <h2 className="font-semibold text-[40px]">90%</h2>
          <p className="text-sm mt-2 mb-6">
            Patient satisfaction rate, reflecting our commitment.
          </p>
        </div>
        <Image width={130} height={130} src={pieChart} alt="" />
      </div>
      <div></div>
      {/* right */}
      <div className="w-[216px] h-[312px] border p-5 rounded-3xl flex-1">
        <div>
          <h2 className="font-semibold text-[40px]">50+</h2>
          <p className="text-sm mt-2 mb-6">Free lession video for patient</p>
        </div>
        <Image width={130} height={130} src={videoIcon} alt="" />
      </div>
    </div>
  );
};

export default OverView;
