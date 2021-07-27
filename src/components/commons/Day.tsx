import * as React from "react";
import dayjs from "dayjs";
import "dayjs/locale/en";
import "dayjs/locale/ko";
import styled from "styled-components";

interface IDayProps {
  locale?: "ko" | "en";
}

const DayContainer = styled.div`
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  text-align: center;
  font-size: 30px;
  padding: 10px 0;
`;

const Day: React.FunctionComponent<IDayProps> = ({
  locale = "ko",
}: IDayProps) => {
  dayjs.locale(locale);
  const format =
    locale === "ko" ? "YYYY년 M월 DD일 ddd요일" : "dddd MMMM DD,YYYY";

  return <DayContainer> {dayjs().format(format)}</DayContainer>;
};

export default Day;
