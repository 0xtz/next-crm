import React from "react";

export default function page() {
  return (
    <div className="grid h-full grid-cols-2 grid-rows-3 gap-4">
      <div className="flex items-center justify-center rounded-xl border-2">
        1
      </div>
      <div className="col-start-1 row-start-2 flex items-center justify-center rounded-xl border-2">
        2
      </div>
      <div className="col-start-2 row-span-2 row-start-1 flex items-center justify-center rounded-xl border-2">
        3
      </div>
      <div className="col-span-2 row-start-3 flex items-center justify-center rounded-xl border-2">
        4
      </div>
    </div>
  );
}
