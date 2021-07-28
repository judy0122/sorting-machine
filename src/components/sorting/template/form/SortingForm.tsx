import { RedoOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import * as React from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: row;
  background-color: #f1f1f1;
  border-radius: 20px;
  width: 100%;
  margin-top: 10px;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  padding: 20px 15px;
  font-family: "Montserrat", sans-serif;
  font-size: 17px;
  background: transparent;
  outline: none;
  &::placeholder {
    font-size: 14px;
  }
`;

const Button = styled.button`
  background: #222;
  color: #fff;
  padding: 15px 20px;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  border: 0;
  border-radius: 20px;
  font-size: 17px;
`;

const ResetButton = styled.button`
  border: none;
  margin: 0 10px;
  font-size: 20px;
`;

interface ISortingFormProps {
  value: string;
  onChange: (value: string) => void;
  onStart: () => void;
  resetSorting: () => void;
}

const SortingForm: React.FunctionComponent<ISortingFormProps> = ({
  value,
  onChange,
  onStart,
  resetSorting,
}) => {
  const checkValidation = (): boolean => {
    const regex = /([^0-9\\,])/g;
    if (!value) {
      Modal.warning({
        title: "데이터를 입력해주세요!",
      });
      return false;
    }
    if (regex.test(value)) {
      Modal.warning({
        title: "잘못된 데이터 형식입니다.",
        content: "데이터 형식은 `숫자,숫자,숫자...`입니다.",
      });
      return false;
    }
    return true;
  };

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    resetSorting();
    if (checkValidation()) {
      onStart();
    }
  };

  const handleReset = () => {
    onChange("");
    resetSorting();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        value={value}
        placeholder="데이터를 입력해주세요 (형식 : 숫자,숫자,숫자...)"
        onChange={handleChangeValue}
      />
      <ResetButton type="button" onClick={handleReset}>
        <RedoOutlined />
      </ResetButton>
      <Button type="submit">Sorting</Button>
    </Form>
  );
};

export default SortingForm;
