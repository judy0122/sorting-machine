import * as React from "react";
import styled from "styled-components";

const Input = styled.input`
  width: 100%;
`;

const Button = styled.button`
  width: 100%;
  border: 1px solid #444;
  padding: 15px 0;
  text-align: center;
`;

interface ISortingFormProps {
  value: string;
  onChange: (value: string) => void;
  onStart: () => void;
}

const SortingForm: React.FunctionComponent<ISortingFormProps> = ({
  value,
  onChange,
  onStart,
}) => {
  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 잘못된 입력 처리
    onStart();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input value={value} onChange={handleChangeValue} />
      <Button>Start!</Button>
    </form>
  );
};

export default SortingForm;
