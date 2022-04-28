import AvatarCard from "components/AvatarCard";
import React from "react";
import styled from "styled-components";


const Members =()=>{

    console.log()

    const Container=styled.div`
    display:flex;
    width:100%;
    flex-direction:column;
    padding:20px 40px;
    box-sizing:border-box;
    `

    const TitleType=styled.h1`

    padding: 160px 15vw 120px 15vw;
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
 <AvatarCard  right title={"Director"} name={"Daeyeon Kim"} desc={`리즈코의 디렉터 김대연입니다.리즈코의 디렉터 김대연입니다.리즈코의 디렉터 김대연입니다.리즈코의 디렉터 김대연입니다.리즈코의 디렉터 김대연입니다.리즈코의 디렉터 김대연입니다.리즈코의 디렉터 김대연입니다.리즈코의 디렉터 김대연입니다.리즈코의 디렉터 김대연입니다.리즈코의 디렉터 김대연입니다.리즈코의 디렉터 김대연입니다.리즈코의 디렉터 김대연입니다.
`}/>
 <AvatarCard  left title={"Director"} name={"Daeyeon Kim"} desc={`리즈코의 디렉터 김대연입니다.리즈코의 디렉터 김대연입니다.리즈코의 디렉터 김대연입니다.리즈코의 디렉터 김대연입니다.리즈코의 디렉터 김대연입니다.리즈코의 디렉터 김대연입니다.리즈코의 디렉터 김대연입니다.리즈코의 디렉터 김대연입니다.리즈코의 디렉터 김대연입니다.리즈코의 디렉터 김대연입니다.리즈코의 디렉터 김대연입니다.리즈코의 디렉터 김대연입니다.
`}/>

 <TitleType>우리도 어디까지가 스스로의 끝인지 아직 알 수 없습니다. 우리는 리즈코를 세상 밖으로 알리고 싶습니다.
리즈코가 어떠한 가치를 만들지, 스스로를 지켜보고 싶습니다.

리즈코는 서로를 이해하며 현재를 즐깁니다.  우리 또한 만들어낼 가치의 끝이 어딘지가 궁금합니다.
감상적인 자세를 비즈니스에 더하고 싶습니다. 그러기에 우리는 오늘도 세상 밖으로 더 한 걸음 나아갈 수 있습니다. 
</TitleType>

 </Container>
        </>
    )
    
}

export default Members