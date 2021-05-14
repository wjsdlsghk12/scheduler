import React from "react";
import { Link } from "react-router-dom";
// import './css/home.css';
// import styled from "styled-components";
// import './public/script';


class Index extends React.Component{

   
    render(){
    return (
        
        <div>
            <h1>스케쥴 공유</h1>
            <div>
                <input className="login" type="text" placeholder="아이디" />
                <input className="login" type="password" placeholder="비밀번호" /><br></br>
                    <input className="loginsub" type="submit" value="로그인" />
                    <Link to="/main">스케쥴표</Link>
            </div>                
        </div>
        
    );
    }
}

export default Index;