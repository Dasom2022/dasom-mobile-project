import axios from "axios";
import { useEffect, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { allSelect, allSelectCancel, selectedPrice, sendItem } from "../atoms";

interface IProps {
  item: {
    id: number;
    itemName: string;
    itemCode: string;
    locale: string;
    price: number;
    weight: number;
  };
  setter: React.Dispatch<React.SetStateAction<any>>;
}
const Container = styled.div``;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4px;
  & > span {
    font-size: 12px;
  }
`;
const CheckButton = styled.div<{ check: boolean }>`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: 1px solid black;
  background-color: ${(props) => (props.check ? "blue" : "white")};
  display: flex;
  justify-content: center;
  align-items: center;
  & > svg {
    width: 12px;
    height: 12px;
    fill: white;
  }
`;
const Content = styled.div`
  display: flex;
`;
const FirstContent = styled.div`
  flex-grow: 1;
  margin-right: 6%;
  & > img {
    width: 45px;
    height: 45px;
    border-radius: 3px;
  }
`;
const SecondContent = styled.div`
  flex-grow: 6;
`;
const Title = styled.div`
  font-size: 16px;
  width: 85%;
`;
const Info = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
  font-size: 14px;
`;
function CheckedItem({ item, setter, index }: any) {
  const [check, setCheck] = useState(false);
  const [send, setSend] = useRecoilState(sendItem);
  const [totalPrice, setTotalPrice] = useRecoilState(selectedPrice);
  const [allCheck, setAllCheck] = useRecoilState(allSelect);
  const [allCheckCancel, setAllCheckCancel] = useRecoilState(allSelectCancel);
  const [count, setCount] = useState(1);
  useEffect(() => {
    if (check) {
      setTotalPrice((prev) => prev + item.price * count);
      setSend((prev: any) => [...prev, item]);
    } else {
      setAllCheckCancel(false);
      if (totalPrice !== 0) {
        setCount(1);
        setTotalPrice((prev) => prev - item.price * count);
      }
    }
  }, [check]);
  useEffect(() => {
    if (allCheck) setCheck(true);
    else setCheck(false);
  }, [allCheck]);
  const itemSend = () => {};
  return (
    <Container>
      <Top>
        <CheckButton
          check={check}
          onClick={() => {
            setCheck((prev) => !prev);
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z" />
          </svg>
        </CheckButton>
        <span>삭제</span>
      </Top>
      <Content>
        <FirstContent>
          <img src={`${process.env.PUBLIC_URL}/image/1.jpg`} />
        </FirstContent>
        <SecondContent>
          <Title>{item.itemName}</Title>
          <Info>
            <span>{count}개</span>
            <div
              onClick={() => {
                if (check) {
                  setCount(count + 1);
                  setTotalPrice((prev) => prev + item.price * count);
                  setSend((prev: any) => [
                    ...prev,
                    {
                      ...item,
                      count: count + 1,
                    },
                  ]);
                }
              }}
            >
              +
            </div>
            <span>{item.price.toLocaleString()}원</span>
          </Info>
        </SecondContent>
      </Content>
    </Container>
  );
}
export default CheckedItem;
