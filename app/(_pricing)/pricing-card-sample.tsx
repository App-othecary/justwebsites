import React from "react";
import Image from "next/image";

export default function PricingCardSample() {
  return (
    <div>
      <Image
        src="/Pricing.png"
        alt="Pricing Image"
        width={800}
        height={400}
        quality={95}
        priority={true}
        className="rounded-lg shadow-lg mt-26"
      />
    </div>
  );
}
