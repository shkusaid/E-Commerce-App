import React from "react";
import { FaTruck, FaLock, FaRegClock } from "react-icons/fa6";
import { RotateCcw } from "lucide-react";

const features = [
  { icons: FaTruck, Text: "Free shipping", subtext: "On order over $100" },
  { icons: FaLock, Text: "Secure Payment", subtext: "100% protected payment" },
  { icons: RotateCcw, Text: "Easy Returns", subtext: "30-days Return policy" },
  {
    icons: FaRegClock,
    Text: "24/7 Support",
    subtext: "Dedicated custumer services",
  },
];
function Features() {
  return (
    <div className="bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
          {features.map((feature, index) => {
            return (
              <div
                key={index}
                className="flex items-center justify-center text-center sm:text-left"
              >
                {" "}
                <feature.icons
                  className="flex-shrink-0 h-10 w-10 text-gray-600"
                  aria-hidden="true"
                />
                <div className="ml-4">
                  <p className="text-base font-medium text-gray-900">
                    {feature.Text}
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    {feature.subtext}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Features;
