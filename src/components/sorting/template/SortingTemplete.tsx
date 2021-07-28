import * as React from "react";
import styled from "styled-components";

interface ISortingTemplateProps {
  children: React.ReactNode;
}

const SortingTemplateBlock = styled.div`
  width: 500px;
  margin: 0 auto;

  padding: 20px;
  box-sizing: border-box;
  box-shadow: 2px 4px 11px 5px rgba(0, 0, 0, 0.05);
  margin-top: 20px;
  border-radius: 30px;
`;

const SortingTemplate: React.FunctionComponent<ISortingTemplateProps> = ({
  children,
}) => {
  return <SortingTemplateBlock>{children}</SortingTemplateBlock>;
};

export default SortingTemplate;
