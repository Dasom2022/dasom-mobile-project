import { useNavigate } from "react-router-dom";

function Home(){
    const navigate=useNavigate();  
    return <div onClick={()=>navigate("/main")}>홈</div>
}
export default Home;