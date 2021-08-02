import React from "react";

const useSorting = () => {
  const [ascending, setAscending] = React.useState<string>("-");
  const [descending, setDescending] = React.useState<string>("-");

  // 병합정렬로 구현하였습니다.
  // 오름차순
  const sortAscendArray = (left: number[], right: number[]): number[] => {
    const result: any[] = [];
    while (left.length !== 0 && right.length !== 0) {
      left[0] <= right[0]
        ? result.push(left.shift())
        : result.push(right.shift());
    }

    return [...result, ...left, ...right];
  };

  // 내림차순
  const sortDescendArray = (left: number[], right: number[]): number[] => {
    const result: any[] = [];
    while (left.length !== 0 && right.length !== 0) {
      left[0] >= right[0]
        ? result.push(left.shift())
        : result.push(right.shift());
    }

    return [...result, ...left, ...right];
  };

  const sliceArray = (array: number[], isAscend: boolean): number[] => {
    if (array.length === 1) return array;
    const middleIdx = Math.floor(array.length / 2);
    const left: number[] = array.slice(0, middleIdx);
    const right: number[] = array.slice(middleIdx);

    return isAscend
      ? sortAscendArray(sliceArray(left, isAscend), sliceArray(right, isAscend))
      : sortDescendArray(
          sliceArray(left, isAscend),
          sliceArray(right, isAscend)
        );
  };

  const startSorting = (value: string) => {
    const values: number[] = value.split(",").map((x) => parseInt(x));
    const newAscending = sliceArray(values, true).toString();
    const newDescending = sliceArray(values, false).toString();
    setAscending(newAscending);
    setTimeout(() => {
      setDescending(newDescending);
    }, 3000);
  };

  const resetSorting = () => {
    setAscending("-");
    setDescending("-");
  };

  return {
    ascending,
    descending,
    startSorting,
    resetSorting,
  };
};

export default useSorting;
