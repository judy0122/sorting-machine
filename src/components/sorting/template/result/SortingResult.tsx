import * as React from "react";
import styled from "styled-components";

interface ISortingResultProps {
  title: string | React.ReactNode;
  result: string;
}

const Result = styled.div`
  font-size: 16px;
  font-family: "Montserrat", sans-serif;
  display: flex;
  flex-direction: row;
  font-weight: 500;
  justify-content: space-between;
  padding: 10px 0;
`;

const Title = styled.p`
  font-size: 16px;
  color: #aaa;
  margin-right: 10px;
  font-weight: 400;
  width: 200px;
  margin: 0;
`;

const Desc = styled.p`
  word-break: break-all;
  margin: 0;
`;

const SortingResult: React.FunctionComponent<ISortingResultProps> = ({
  title,
  result,
}) => {
  return (
    <Result>
      <Title>{title}&nbsp;&nbsp;</Title>
      <Desc>{result}</Desc>
    </Result>
  );
};

export default SortingResult;
