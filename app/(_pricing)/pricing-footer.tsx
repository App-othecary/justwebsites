import React from "react";

export default function PricingFooter() {
  return (
    <div>
      <div
        className="grid grid-cols-4 ml-4 mr-4 -mt-10
                                text-gray-900
                                font-medium
                                text-sm
                                bg-gray-300
                                gap-4 p-4 pt-2 rounded-2xl shadow-lg mb-3 "
      >
        <div>2 Rounds of revisions</div>
        <div>50% deposit upfront</div>
        <div>Remainder due by launch</div>
        <div>Revisions: R350/hour</div>
      </div>
    </div>
  );
}
