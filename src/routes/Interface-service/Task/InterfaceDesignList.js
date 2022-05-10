import React from "react";
import DividedBannerTwo from "components/DividedBannerTwo";
import InterfaceV from 'images/lottie/InterfaceV.json'
import PrototypingV from 'images/lottie/PrototypingV.json'
import UxV from 'images/lottie/UxV.json'
import ReactPlayer from "react-player";
import styled from "styled-components";
import mainbanner from "images/mainbanner.mp4"



const InterfaceDesignList =()=>{


  const VideoWrapper=styled.section`

  border:1px solid blue;
  width: 100%;
  height: 100%;
  
  `


  const TestPlayer=styled(ReactPlayer)`
  max-width: 100%;
  object-fit: cover;
  height: 100%;
  `

    return(

        <>

<VideoWrapper>


<TestPlayer

className='react-player'
url={mainbanner}
width='100%'
muted='true'
playing='true'
loop='true'


/>


</VideoWrapper>


    <DividedBannerTwo left lottieData={InterfaceV} btnText={`리스트 확인`} linkUrl={'/Interface-service/UI-design'}  name={"인터페이스 디자인 /  Interface Design"} desc={`오르도 스튜디오는 인터랙션관점의 디스플레이 그 자체의 디자인의 본질을 둡니다. 단순히 '예쁘게' , '어떠한 느낌의'와 같은 키워드는 오르도 스튜디오 내에서는 가장 지양되어지는 작업 태도입니다.
소프트웨어 파워가 가지는 상호작용의 관점에서, 고객과 사용자의 서로간의 의도가 효율적으로 전달되는 메세지, 그 자체의 기능에 우리는 집중합니다.`}/>
  
  <DividedBannerTwo right lottieData={PrototypingV} btnText={`리스트 확인`} linkUrl={'/Interface-service/Prototyping'}  name={"프로토타이핑 / HI-FI prototyping"} desc={`오르도 스튜디오에서는 '시각화' 관점의 방법론을 적용하여, 퍼널 및 KPI 개선을 위한 하이-피델리티 프로토타이핑을 진행합니다.

총체적 관점, 부분 관점, 도달 범위, 목표, 역할 및 테스트 구성에 대한 관점을 제시하여, 고객이 얻을 수 있는 효율적인 결과에 집중합니다.`}/>
  
  <DividedBannerTwo lottieData={UxV}  left btnText={`리스트 확인`} linkUrl={'/Interface-service/UX-design'}  name={`UX 디자인 / User experience`} desc={`사용자 경험은 철저히 기능 수행적이며 통계에 충실하여야 합니다. 프로토타이핑을 통한 낮은 표본의 설계, 또는 깊은 수준의 정량 분석 및 , 하드웨어 수행 테스트를 통한 경험 설계 또한 가능합니다.`}/>
  


        </>
    )
    
}

export default InterfaceDesignList;