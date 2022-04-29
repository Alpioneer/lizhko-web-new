import AvatarCard from "components/AvatarCard";
import React from "react";
import styled from "styled-components";
import yeonkor from "images/members/yeonkor.png"
import kongil from "images/members/cto-s.png"
import sseni from "images/members/sseni.png"



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

    console.log(yeonkor)
    return(
        <>
        

        <Container>
        <TitleType>우리의 열정은 시간이나 장소에 구애 받지 않습니다. 
리즈코의 멤버들은 항상 그들의 맥북과 함께 가치있는 결과를 만들기 원합니다. 
 그러기에 우리는 이 일을 사랑할 수 밖에 없습니다.</TitleType>




 <AvatarCard  src={yeonkor} left title={"Director"} name={"Daeyeon Kim"} desc={`“ 리즈코의 디렉터 김대연입니다. 새벽 또는 늦은 낮이어도 어느 곳이건 그 곳은 제가 가치를 만들어나갈 시간임을 알고 있습니다. 불필요한 과정을 버리기 위해 항상 고민하는 태도를 지닙니다. “

그는 디자인 스튜디오 'ORDO'를 2018년부터 운영하고 있으며, 국내 외를 가리지 않으며, 다양한 스타트업 및 법인의 디지털 서비스를 위한 브랜딩과 디자인 드리븐 방식의 운영 가이드를 제공해오고 있습니다.

2019년 10월 지금의 CTO인 이홍일 대표를 만나, 프로토타이핑 테스트와, 디지털 노마드 사회의 체계적 정규화에 대한 깊은 가치관을 공유하며,마침내 2020년 12월 리즈코라는 이름으로 비즈니스를 시작하였습니다.

@yeonkor
+82-10-3458-4006
director@lizhko.io`}/>
 <AvatarCard  src={kongil} right title={"CTO"} name={"Hongil Lee"} desc={`“세원씨, 잘할 수 있죠?“

그는 분야를 막론하지 않으며, 6년 이상의 개발을 진행해오며, 솔루션 비즈니스 업계에서의 불합리함과 비효율성에 대해서 개선 방안을 찾던 중, 지금의 디렉터인 김대연을 업무 중 만나, 프로토타이핑 테스트 비즈니스를 리드하기를 제안 받았습니다. 밤낮을 가리지 않는 그의 근성있는 업무 스타일에 많은 팀원들이 매번 놀라고는 합니다.

아웃사이더 성향의 그는, 내외부의 편협한 시선을 극도로 경계하며, 오로지 효율과 결과로만 판단하는 이성주의자입니다.

+82-10-3566-2603
cto@lizhko.io`}/>
 <AvatarCard  src={sseni} left title={"Front-end Developer"} name={"Sewon Shin"} desc={`"생각하는 대로 살지 않는다면, 살아가는대로 생각하겠죠."

그는 습관적으로 말하듯이 , 생각하며 행동하고, 그것을 결과로 보여줍니다. 새로운 것을 시도함에 있어서 많은 생각을 하지 않고, 결과를 먼저 보여줍니다.

성공이던 실패던지를 따지기 전에요. 이러한 태도에는 많은 팀원들이 영감을 느끼고는 합니다. 누군가에게 좋은 영향을 미치는 사람이 되며 ,  의미를 쫓는 멋진 팀원입니다.

리즈코의 대표들이 가장 처음에 선택한 팀원이기도 하죠.

@sewon_s
+82-10-9775-1541
sseni@lizhko.io
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