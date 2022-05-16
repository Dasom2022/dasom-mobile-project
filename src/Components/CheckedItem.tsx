import { useState } from "react";
import styled from "styled-components";

interface IProps{
    item:{
        id: number;
        img: string;
        title: string;
        price: number;
        count: number;
    };
    setter:React.Dispatch<React.SetStateAction<any>>;
}
const Container=styled.div`
    
`;
const Top=styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom:4px;
    & > span{
        font-size:12px;
    }
`;
const CheckButton=styled.div<{check:boolean}>`
    width:15px;
    height:15px;
    border-radius: 50%;
    border:1px solid black;
    background-color:${props=>props.check?"skyblue":"white"}
`;
const Content=styled.div`
    display:flex;
`;
const FirstContent=styled.div`
    flex-grow: 1;
    margin-right:6%;
    & > img{
        width:45px;
        height:45px;
        border-radius:3px;
    }
`;
const SecondContent=styled.div`
    flex-grow:6;
`;
const Title=styled.div`
    font-size:14px;
    width:85%;
`;
const Info=styled.div`
    display:flex;
    justify-content: space-between;
    margin-top:25px;
    font-size:14px;
`;
function CheckedItem({item, setter}:IProps){
    const [check, setCheck]=useState(false);
    function deleteItem(){
        //여기부터
    }
    return(
        <Container>
            <Top>
                <CheckButton check={check} onClick={()=>{setCheck(prev=>!prev)}} />
                <span onClick={deleteItem}>삭제</span>
            </Top>
            <Content>
                <FirstContent>
                    <img src={item.img} />
                </FirstContent>
                <SecondContent>
                    <Title>{item.title}</Title>
                    <Info>
                        <span>{item.count}개</span>
                        <span>{item.price.toLocaleString()}원</span>
                    </Info>
                </SecondContent>
            </Content>
        </Container>
    )
}
export default CheckedItem;