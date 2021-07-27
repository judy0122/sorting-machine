import * as React from "react";
import styled from "styled-components";

interface ISortingTemplateProps {
  children: React.ReactNode;
}

const SortingTemplateBlock = styled.div`
  width: 500px;
  margin: 0 auto;
  border: 1px solid #444;
  padding: 10px;
  box-sizing: border-box;
`;

const SortingTemplate: React.FunctionComponent<ISortingTemplateProps> = ({
  children,
}) => {
  return <SortingTemplateBlock>{children}</SortingTemplateBlock>;
};

export default SortingTemplate;
