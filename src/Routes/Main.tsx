import { useState } from "react";
import styled from "styled-components";
import CheckedItem from "../Components/CheckedItem";
import QRModal from "../Components/QRModal";

const Container=styled.div`
    width:100%;
    height:100vh;
    box-sizing: border-box;
    padding:0 5%;
`;
const Header=styled.div`
    height:10%;
    & > div:first-child{
        font-size:45px;
        font-weight:bold;
    }
`;
const CheckList=styled.div`
    height:90%;
`;
const AllSelect=styled.div`
    display:flex;
    align-items: center;
    margin-bottom:5%;
    & > div{
        width:15px;
        height:15px;
        border-radius:50%;
        border:1px solid black;
        margin-right:12px;
    }
`;
const List=styled.div`
    width:100%;
    height:93%;
    overflow: scroll;
    & > div::after{
        display:block;
        content:"";
        width:100%;
        border-top:1px solid black;
        margin:10px 0 20px 0;
    }
    & > div:last-child::after{
        display:none;
    }
`;
const Button=styled.div`
    position:fixed;
    right:5%;
    bottom:5%;
    border-radius:50%;
    background-color: white;
    width:50px;
    height:50px;
    display:flex;
    justify-content:center;
    align-items: center;
    & > svg{
        width:40px;
        height:40px;    
    }
`;

function Main(){
    const [QROpen, setQROpen]=useState(false);
    const [imsidata, setImsidata]=useState([
        {
            id:1,
            img:`${process.env.PUBLIC_URL}/image/1.jpg`,
            title:"어메지즈 고퀄 프리미엄 7부 박스티",
            count:2,
            price:33000
        },{
            id:2,
            img:`${process.env.PUBLIC_URL}/image/1.jpg`,
            title:"어메지즈 고퀄 프리미엄 7부 박스티",
            count:1,
            price:33000
        },{
            id:3,
            img:`${process.env.PUBLIC_URL}/image/1.jpg`,
            title:"어메지즈 고퀄 프리미엄 7부 박스티",
            count:1,
            price:33000
        },{
            id:4,
            img:`${process.env.PUBLIC_URL}/image/1.jpg`,
            title:"어메지즈 고퀄 프리미엄 7부 박스티",
            count:1,
            price:33000
        },{
            id:5,
            img:`${process.env.PUBLIC_URL}/image/1.jpg`,
            title:"어메지즈 고퀄 프리미엄 7부 박스티",
            count:1,
            price:33000
        }
    ]);
    return (
        <>
            <Container>
                <Header>
                    <div>DAMA</div>
                </Header>
                <CheckList>
                    <AllSelect>
                        <div></div>
                        <span>전체 선택</span>
                    </AllSelect>
                    <List>
                        {imsidata.map(item=><CheckedItem item={item} setter={setImsidata}></CheckedItem>)}
                    </List>
                </CheckList>
                <Button>
                    <svg onClick={()=>setQROpen(true)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M144 32C170.5 32 192 53.49 192 80V176C192 202.5 170.5 224 144 224H48C21.49 224 0 202.5 0 176V80C0 53.49 21.49 32 48 32H144zM128 96H64V160H128V96zM144 288C170.5 288 192 309.5 192 336V432C192 458.5 170.5 480 144 480H48C21.49 480 0 458.5 0 432V336C0 309.5 21.49 288 48 288H144zM128 352H64V416H128V352zM256 80C256 53.49 277.5 32 304 32H400C426.5 32 448 53.49 448 80V176C448 202.5 426.5 224 400 224H304C277.5 224 256 202.5 256 176V80zM320 160H384V96H320V160zM352 448H384V480H352V448zM448 480H416V448H448V480zM416 288H448V416H352V384H320V480H256V288H352V320H416V288z"/></svg>   
                </Button>
            </Container>
            {QROpen?<QRModal closer={setQROpen} />:null}
        </>
    );
}

export default Main;