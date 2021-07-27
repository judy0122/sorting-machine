import * as React from 'react';
import styled from 'styled-components';

interface ISortingResultProps {
  result: string;
}

const Result = styled.div`
`;

const SortingResult: React.FunctionComponent<ISortingResultProps> = ({ result }) => {
  return <Result>{result}</Result>;
};

export default SortingResult;
