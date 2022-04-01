import AvatarCard from "components/AvatarCard";
import React from "react";
import styled from "styled-components";


const Members =()=>{

    const Container=styled.div`
    display:flex;
    width:100%;
    flex-direction:column;
    padding:20px 40px;
    box-sizing:border-box;
    `

    const TitleType=styled.h1`

    padding: 160px 20vw 120px 20vw;
    color: #444852;
    font-size: 1.8em;
    font-weight:200;
    letter-spacing: -0.06em;
    text-align:center;

    `

    return(
        <>

        <Container>
        <TitleType>우리의 열정은 시간이나 장소에 구애 받지 않습니다. 
리즈코의 멤버들은 항상 그들의 맥북과 함께 가치있는 결과를 만들기 원합니다. 
 그러기에 우리는 이 일을 사랑할 수 밖에 없습니다.</TitleType>

 <AvatarCard left title={"Director"} name={"Daeyeon Kim"} desc={"리즈코의 디렉터 김대연입니다.리즈코의 디렉터 김대연입니다.리즈코의 디렉터 김대연입니다.리즈코의 디렉터 김대연입니다.리즈코의 디렉터 김대연입니다.리즈코의 디렉터 김대연입니다.리즈코의 디렉터 김대연입니다.리즈코의 디렉터 김대연입니다.리즈코의 디렉터 김대연입니다.리즈코의 디렉터 김대연입니다.리즈코의 디렉터 김대연입니다.리즈코의 디렉터 김대연입니다."}/>
 <AvatarCard right title={"Director"} name={"Daeyeon Kim"} desc={"리즈코의 디렉터 김대연입니다."}/>
 <AvatarCard left title={"Director"} name={"Daeyeon Kim"} desc={"리즈코의 디렉터 김대연입니다."}/>
 <AvatarCard right title={"Director"} name={"Daeyeon Kim"} desc={"리즈코의 디렉터 김대연입니다."}/>

 </Container>
        </>
    )
    
}

export default Members