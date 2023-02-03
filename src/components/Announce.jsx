import React, { useState } from "react";
import { Close } from "@mui/icons-material";

function Announce() {
  const [announceStyle, setAnnounceStyle] = useState(
    "bg-[#894af3] font-bold text-white flex items-center justify-center"
  );

  const handlClose = () => {
    setAnnounceStyle(announceStyle + " hidden");
  };
  return (
    <div className={announceStyle}>
      <h2>Hurry up it's 40% off now</h2>
      <Close className="cursor-pointer" onClick={handlClose} />
    </div>
  );
}

export default Announce;
