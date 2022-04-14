import React from "react";
import styled from "styled-components";
import DividedBanner from "components/DividedBanner";


const Works =()=>{

    const Container = styled.div`

    width:100%;

    
    `
    return(

        <>
    <Container>
    <DividedBanner right title={"Director"} name={"디자인 및 소프트웨어 개발 공급 / SI (System Integrator)"} desc={"리즈코는 자체적인 프로덕트 방법론인 'LPL'을 이용하여, 7단계의 순차적인 검증 과정을 통해, 클라이언트가 요구하는 목표에 도달할 수 있습니다.리즈코는 고객의 상황에 적합한 디자인 드리븐 방식의 개발 솔루션을 제공합니다.리즈코는 고객의 프로토타입 제작과 이해에 대한 깊이 있는 인사이트를 통해, 디자인 시스템의 정의와, 브랜드 컨설팅, 고객의 소프트웨어 개발 혹은,팀의 데브옵스 향상에 기여합니다.리즈코는 신규 프로젝트 구축 이후의 고객이 쉽게 비즈니스를 관리할 수 있도록, 구축 단계부터 직접 사용 가능한 디자인 가이드를 제공합니다.리즈코는 디자인 드리븐에 대한 시장의 요구가 커져가는 트렌드에서, 브랜딩을 통해, 사용자 혹은 구매자들이 더욱 친숙히 비즈니스 모델에 접근할 수 있도록 도움을 줍니다.리즈코는 고객의 니즈에 기반하여 필요시되는 기술들을 신중히 결정하고, 소프트웨어를 기획하고 개발합니다. 그로써, 고객이 지닌 팀의 역량 또한 증폭시킬수 있습니다.."}/>
    <DividedBanner left title={"Director"} name={"Daeyeon Kim"} desc={"리즈코의 디렉터 김대연입니다."}/>
    <DividedBanner right title={"Director"} name={"Daeyeon Kim"} desc={"리즈코의 디렉터 김대연입니다."}/>
    </Container>
 
        </>
    )
    
}

export default Works;