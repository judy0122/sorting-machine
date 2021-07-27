import * as React from "react";
import { Day } from "../commons";
import SortingTemplate from "./template/SortingTemplete";
import SortingResult from "./template/result/SortingResult";
import useSorting from "./SortingService";
import SortingForm from "./template/form/SortingForm";

interface ISortingContainerProps {}

// 추가할 만한 기능 >  reset

const SortingContainer: React.FunctionComponent<ISortingContainerProps> = (
  props
) => {
  const [value, setValue] = React.useState<string>("");
  const { ascending, descending, startSorting } = useSorting();

  const handleChangeValue = (newValue: string) => {
    setValue(newValue);
  };

  const handleStartSorting = () => {
    startSorting(value);
  };

  return (
    <SortingTemplate>
      <Day />
      <SortingForm
        value={value}
        onChange={handleChangeValue}
        onStart={handleStartSorting}
      />
      <SortingResult result={ascending} />
      <SortingResult result={descending} />
      <Day locale="en" />
    </SortingTemplate>
  );
};

export default SortingContainer;
