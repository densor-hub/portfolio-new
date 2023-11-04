import React from "react";
const CurvedArrow = () => {
  return (
    <main
      data-testid="curved_arrow"
      className="w-[300px] h-[170px] rounded-[50%] bg-transparent boreder-0 border-r-4   border-b-4 border-slate-500 relative"
    >
      <div className="w-[110%] h-[60px]    bg-[#0f0e0e] absolute top-0  "></div>
      <div className="w-[90px] h-[110%]    bg-[#0f0e0e] absolute left-0  "></div>
      <div className="bg-transparent w-fit relative top-[94%] lg:top-[95%] left-[28%] lg:left-[29%] rotate-[14deg] lg:rotate-[0deg]">
        <div className="w-5 h-1 -rotate-45 bg-slate-500 relative bottom-1"></div>
        <div className="w-5 h-1 rotate-45  bg-slate-500 relative top-1"></div>
      </div>
    </main>
  );
};

export default CurvedArrow;
