import React from "react";

export default function page() {
  return (
    <div className="grid h-full grid-cols-2 grid-rows-2 gap-4">
      <div className="flex items-center justify-center rounded-xl border-2">
        1
      </div>
      <div className="flex items-center justify-center rounded-xl border-2">
        2
      </div>
      <div className="col-span-2 flex items-center justify-center rounded-xl border-2">
        3
      </div>
    </div>
  );
}
