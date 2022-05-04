import React from "react";
import WorkPost from "components/WorkPost";


import celtrion1 from "images/works/celtrion/celtrion1.png"
import celtrion2 from "images/works/celtrion/celtrion2.png"
import celtrion3 from "images/works/celtrion/celtrion3.png"


const UXdesign =()=>{


    const workDummy={
 
        "celtrion":{
      
         title:`Celltrion IBD Care prototyping`,
         author:`Client : Celltrion Business Development Team, Songdon , Incheon , South Korea
         Director : Ordo
         Design : Ordo`,
         desc:`'Fatogo' is a hybrid app service for booking travel accommodations. I received a commission to produce visual UI with GIST's Kim-minseok team and I have been working since October 2018.The process of creating this service for users is simple yet sophisticated. Analyze user behavior using artificial intelligence and list accommodations according to your preferences.

         'Fatogo'는 여행용 숙박 시설 예약을 위한 하이브리드 앱 서비스입니다. GIST의 '김민석 (Kim-minseok)'팀과 시각 UI 제작 커미션을 받았으며 2018 년 10 월부터 작업을 진행하였습니다.사용자를 대상으로 이 서비스를 만드는 과정은 간단하면서도 정교합니다. 인공지능을 이용한 사용자의 행태를 분석, 선호도에 따라 숙박 시설을 나열하여 줍니다.
         
         초기 서비스 기획에 대한 디렉팅을 진행하였으며, BI를 제작하였습니다. 제작되어진 BI와 일관성있는 UI 디자인을 제공하였으며, 페르소나 방법론, 스프린트를 적용하여, UI를 디벨롭 하였습니다. 인터랙션 프로토타입을 제작하여, 투자 유치 작업에 도움을 드렸고, 디자인 가이드를 제작하였습니다.`,
         image:[celtrion1,celtrion2,celtrion3],
         video:[],
         figma:["https://xd.adobe.com/embed/aa486698-8ff2-450e-9bc5-05e10f3b6b8f-ff1b/"]
   
     }
     
     }
 
    return(
        <>

  
  
        {Object.values(workDummy).map(x=>{return <WorkPost data={x}/>})}
  
     
        </>
    )
    
}

export default UXdesign;