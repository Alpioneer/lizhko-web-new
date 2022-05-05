import React from "react";
import WorkPost from "components/WorkPost";


import excello1 from "images/works/excello/excello1.png"
import excello2 from "images/works/excello/excello2.png"
import excello3 from "images/works/excello/excello3.png"
import excello4 from "images/works/excello/excello4.png"
import insurtech1 from "images/works/insurtech/insurtech1.png"



const Prototping =()=>{  const workDummy={
 
    "excello":{
  
     title:`Excello IRS`,
     author:`Client : Excello
     Director : Grafy 
     Copyright : Excello, Grafy
     Editorial : Grafy UI : Ordo, Daeyeon Kim
     Branding : Grafy, Daeyeon Kim`,
     desc:`'Excello IRS' is software that controls the mechanism through the IRS module in the steel mill. In collaboration with Grafy Studio, he received a UI design project, implemented interactive design in the process, and built a demo application. In collaboration with Grafy Studio, we received UI design projects, implemented in-process interaction design, and produced a demo MVP model. We created visual constructs and identity definitions for the brand, UI design, interaction prototypes, and produced design guides.

     'Excello IRS' 는 제철소 내 IRS 모듈을 통해 메커니즘을 제어하는 소프트웨어입니다. Grafy Studio와 공동 작업을 통해 UI 디자인 프로젝트를 받고, 프로세스 중 상호 작용 디자인을 구현하고 데모 응용 프로그램을 제작했습니다. Grafy Studio와 공동 작업을 통해 UI 디자인 프로젝트를 받고, 프로세스 중 인터랙션 디자인을 구현하고 데모 MVP 모델을 제작했습니다. 브랜드에 대한 시각 구성 및 아이덴티티 정의, UI 디자인 , 인터랙션 프로토타입을 제작하였으며, 디자인 가이드를 제작하였습니다.`,
     image:[excello1,excello2,excello3,excello4],
     video:[],
     protolink:[]

 },
 "insurtech":{
  
    title:`ID Insurtech`,
    author:`Client : IMS.Mobility
    Director : Daeyeon Kim`,
    desc:`'Excello IRS' is software that controls the mechanism through the IRS module in the steel mill. In collaboration with Grafy Studio, he received a UI design project, implemented interactive design in the process, and built a demo application. In collaboration with Grafy Studio, we received UI design projects, implemented in-process interaction design, and produced a demo MVP model. We created visual constructs and identity definitions for the brand, UI design, interaction prototypes, and produced design guides.

    'Excello IRS' 는 제철소 내 IRS 모듈을 통해 메커니즘을 제어하는 소프트웨어입니다. Grafy Studio와 공동 작업을 통해 UI 디자인 프로젝트를 받고, 프로세스 중 상호 작용 디자인을 구현하고 데모 응용 프로그램을 제작했습니다. Grafy Studio와 공동 작업을 통해 UI 디자인 프로젝트를 받고, 프로세스 중 인터랙션 디자인을 구현하고 데모 MVP 모델을 제작했습니다. 브랜드에 대한 시각 구성 및 아이덴티티 정의, UI 디자인 , 인터랙션 프로토타입을 제작하였으며, 디자인 가이드를 제작하였습니다.`,
    image:[insurtech1],
    video:[],
    protolink:["https://cloud.protopie.io/p/14e0913c9d?touchHint=true&ui=false&scaleToFit=true&cursorType=touch&mockup=true&bgColor=%23F5F5F5&playSpeed=1&playerAppPopup=true"]

}
 
 }

return(
    <>



    {Object.values(workDummy).map(x=>{return <WorkPost data={x}/>})}

 
    </>
)

}

export default Prototping;