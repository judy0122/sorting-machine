import * as React from "react";
import styled from "styled-components";
import { Date } from "../commons";
import SortingTemplate from "./template/SortingTemplete";
import SortingResult from "./template/result/SortingResult";
import useSorting from "./SortingService";
import SortingForm from "./template/form/SortingForm";
import {
  SortAscendingOutlined,
  SortDescendingOutlined,
} from "@ant-design/icons";

interface ISortingContainerProps {}

const SortTitle = styled.h1`
  font-family: "Montserrat", sans-serif;
  margin: 50px 0 40px;
  text-align: center;
  font-weight: 600;
`;

const SortingResultContainer = styled.div`
  margin: 40px 0 25px;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  padding: 20px 0;
`;

const SortingContainer: React.FunctionComponent<ISortingContainerProps> = (
  props
) => {
  const [value, setValue] = React.useState<string>("");
  const { ascending, descending, startSorting, resetSorting } = useSorting();

  const handleChangeValue = (newValue: string) => {
    setValue(newValue);
  };

  const handleStartSorting = () => {
    startSorting(value);
  };

  return (
    <>
      <SortTitle>Sorting Machine</SortTitle>
      <SortingTemplate>
        <Date />
        <SortingForm
          value={value}
          onChange={handleChangeValue}
          onStart={handleStartSorting}
          resetSorting={resetSorting}
        />
        <SortingResultContainer>
          <SortingResult
            title={
              <>
                <SortAscendingOutlined />
                &nbsp; ascending
              </>
            }
            result={ascending}
          />
          <SortingResult
            title={
              <>
                <SortDescendingOutlined />
                &nbsp; descending
              </>
            }
            result={descending}
          />
        </SortingResultContainer>
        <Date locale="en" />
      </SortingTemplate>
    </>
  );
};

export default SortingContainer;
