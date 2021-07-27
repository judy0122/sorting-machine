import React from "react";

const useSorting = () => {
  const [ascending, setAscending] = React.useState<string>("");
  const [descending, setDescending] = React.useState<string>("");

  const startSorting = (value: string) => {
    const values: number[] = value.split(",").map((x) => parseInt(x));
    const newAscending = values
      .sort((a: number, b: number): number => {
        return b - a;
      })
      .toString();
    const newDescending = values.reverse().toString();
    setAscending(newAscending);
    setDescending(newDescending);
  };

  return {
    ascending,
    descending,
    startSorting,
  };
};

export default useSorting;
