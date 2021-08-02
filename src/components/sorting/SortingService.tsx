import React from "react";

const useSorting = () => {
  const [ascending, setAscending] = React.useState<string>("-");
  const [descending, setDescending] = React.useState<string>("-");

  // 병합정렬로 구현하였습니다.
  // 오름차순
  const sortAscending = (left: number[], right: number[]): number[] => {
    const result: any[] = [];
    while (left.length !== 0 && right.length !== 0) {
      left[0] <= right[0]
        ? result.push(left.shift())
        : result.push(right.shift());
    }

    return [...result, ...left, ...right];
  };

  // 내림차순
  const sortDescending = (left: number[], right: number[]): number[] => {
    const result: any[] = [];
    while (left.length !== 0 && right.length !== 0) {
      left[0] >= right[0]
        ? result.push(left.shift())
        : result.push(right.shift());
    }

    return [...result, ...left, ...right];
  };

  const mergeSort = (array: number[], isAscend: boolean): number[] => {
    if (array.length === 1) return array;
    const middleIdx = Math.floor(array.length / 2);
    const left: number[] = array.slice(0, middleIdx);
    const right: number[] = array.slice(middleIdx);

    return isAscend
      ? sortAscending(mergeSort(left, isAscend), mergeSort(right, isAscend))
      : sortDescending(mergeSort(left, isAscend), mergeSort(right, isAscend));
  };

  const startSorting = (value: string) => {
    const values: number[] = value.split(",").map((x) => parseInt(x));
    const newAscending = mergeSort(values, true).toString();
    const newDescending = mergeSort(values, false).toString();
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
