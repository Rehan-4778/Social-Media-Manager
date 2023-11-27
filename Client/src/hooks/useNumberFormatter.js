import { useMemo } from "react";

export const useNumberFormatter = () => {
  const formatNumber = useMemo(
    () => (value) => {
      if (value >= 1000000) {
        const millionValue = value / 1000000;
        return millionValue % 1 === 0
          ? millionValue.toFixed(0) + "M"
          : millionValue.toFixed(1) + "M";
      } else if (value >= 1000) {
        const thousandValue = value / 1000;
        return thousandValue % 1 === 0
          ? thousandValue.toFixed(0) + "K"
          : thousandValue.toFixed(1) + "K";
      } else {
        return value.toString();
      }
    },
    []
  );

  return formatNumber;
};
