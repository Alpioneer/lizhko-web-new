import WorkPost from "components/WorkPost";
import React from "react";
import styled from "styled-components";

import carbom1 from "images/works/carbom/carbom1.png"
import carbom2 from "images/works/carbom/carbom2.png"
import carbom3 from "images/works/carbom/carbom3.png"
import carbom4 from "images/works/carbom/carbom4.png"
import hao1 from "images/works/hao/hao1.png"
import hao2 from "images/works/hao/hao2.png"
import fatogo1 from "images/works/fatogo/fatogo1.png"
import fatogo2 from "images/works/fatogo/fatogo2.png"
import fatogo3 from "images/works/fatogo/fatogo3.png"
import fatogo4 from "images/works/fatogo/fatogo4.png"
import fatogo5 from "images/works/fatogo/fatogo5.mp4"
import fatogo6 from "images/works/fatogo/fatogo6.mp4"

import aryko1 from "images/works/aryko/aryko1.png"
import aryko2 from "images/works/aryko/aryko2.png"
import aryko3 from "images/works/aryko/aryko3.png"
import aryko4 from "images/works/aryko/aryko4.png"
import aryko5 from "images/works/aryko/aryko5.mp4"
import aryko6 from "images/works/aryko/aryko6.mp4"

import line1 from "images/works/line/line1.png"
import line2 from "images/works/line/line2.png"
import line3 from "images/works/line/line3.png"
import line4 from "images/works/line/line4.mp4"

import doro1 from "images/works/doro/doro1.png"
import doro2 from "images/works/doro/doro2.png"
import doro3 from "images/works/doro/doro3.png"
import doro4 from "images/works/doro/doro4.png"
import doro5 from "images/works/doro/doro5.mp4"
import doro6 from "images/works/doro/doro6.mp4"
import doro7 from "images/works/doro/doro7.mp4"


import claus1 from "images/works/claus/claus1.png"
import claus2 from "images/works/claus/claus2.png"
import claus3 from "images/works/claus/claus3.png"
import claus4 from "images/works/claus/claus4.png"


const UIdesign =()=>{



    /*
{UIjson.carbom.map(x=>{{
    return <img src={x}/>}}
    )}
 */


        const workDummy={
 
       "carbom":{
     
        title:`Carbom (IMS.connect)`,
        author:`Client : IMS.Mobility Director : Daeyeon Kim Design : Ordo`,
        desc:`IMS.Mobility Inc.와 2021년 4월부터 6월까지 진행한 Carbom 프로젝트입니다. 구축된 초기 프로토타입 베이스의 하이브리드 앱의 디자인 시스템 제작 및 , 마스터 레벨의 인터페이스를 생성하여, 다양한 페이지에서 생성 가능하게 끔, 컨셉 시안부터 상용화 시안까지의 그래픽 작업을 거친 후, 디자인 배포하였습니다. 명확한 정량적 기능의 사용을 작업 초점으로 두고, 고객사 측의 요구를 최대한 수용할 수 있도록, 상시 소통을 진행하였습니다.`,
        image:[carbom1,carbom2,carbom3,carbom4],
        video:[],
        protolink:[]
 
        
    },

    "hao":{

  
        title:`Hao`,
        author:`Client : Team Hao Director : Daeyeon Kim Design : Ordo`,
        desc:`2019년 10월부터 'Team Hao'는 개인들의 그룹인 고객으로써 우리는 그들과 같이 1년 간, 초기 사업 모델의 검증 및 자본 유치 계획을 위하여, 서비스가 보유한 추상적인 특장점 및 논리 구조를 시각화 하는데에 있어서, 디자인 작업의 초점을 두었습니다. 중국어의 교육서비스라는 컨셉트에서 기인한, 성조의 그래픽화 ,적색 계열의 컬러 시스템을 소프트하게 응용하여, 더욱 미니멀리즘한 시각 경험을 제공하였으며, 작업 추후 해당 서비스는 Ordo를 통하여, 부분 인수되어서 현재까지도 자체적으로 서비스 개발을 진행 중에 있습니다.`,
        image:[hao1,hao2],
        video:[],
        protolink:[]

    },

    "fatogo":{

  
        title:`Fatogo`,
        author:`Client : GIST, Min Seok - Kim
        Director : Ordo
        Design : Ordo`,
        desc:`'Fatogo' is a hybrid app service for booking travel accommodations. I received a commission to produce visual UI with GIST's Kim-minseok team and I have been working since October 2018.The process of creating this service for users is simple yet sophisticated. Analyze user behavior using artificial intelligence and list accommodations according to your preferences.

        'Fatogo'는 여행용 숙박 시설 예약을 위한 하이브리드 앱 서비스입니다. GIST의 '김민석 (Kim-minseok)'팀과 시각 UI 제작 커미션을 받았으며 2018 년 10 월부터 작업을 진행하였습니다.사용자를 대상으로 이 서비스를 만드는 과정은 간단하면서도 정교합니다. 인공지능을 이용한 사용자의 행태를 분석, 선호도에 따라 숙박 시설을 나열하여 줍니다.
        
        초기 서비스 기획에 대한 디렉팅을 진행하였으며, BI를 제작하였습니다. 제작되어진 BI와 일관성있는 UI 디자인을 제공하였으며, 페르소나 방법론, 스프린트를 적용하여, UI를 디벨롭 하였습니다. 인터랙션 프로토타입을 제작하여, 투자 유치 작업에 도움을 드렸고, 디자인 가이드를 제작하였습니다.`,
        image:[fatogo1,fatogo2,fatogo3,fatogo4],
        video:[fatogo5,fatogo6],
        protolink:["https://cloud.protopie.io/p/5d7f5ff1cc?touchHint=true&ui=false&scaleToFit=true&cursorType=touch&mockup=true&bgColor=%23F5F5F5&playSpeed=1&playerAppPopup=true"]

    },

    "aryko":{
        title:`Aryko Korea , 3456`,
        author:`Client : Aryko korea, 3456
        Director : Daeyeon Kim, Ordo
        Copyright : Aryko korea, 3456`,
        desc:`
        '3456' is a hybrid app service, which serves as a unique shopping mall that bundles various products into one category and sells them in a deal format. It also serves as a magazine where you can access information such as travel and food.
        Construction work began in October 2019 with 'Aryko Korea', the unique 'white' and 'black' of Korea was used, and the app design using the pattern of the supervisory impression was impressive.
        
        '3456'은 다양한 상품을 하나의 광고 딜로 묶어 판매하는 독특한 쇼핑몰 하이브리드 앱 서비스입니다.  또한 여행 및 음식과 같은 정보를 다루는 잡지의 역할을 하기도 합니다. 2019 년 10 월 한국 고유의 ‘백색’ 과 ‘흑색' 의 패턴으로 '아리코 코리아'와 함께 작업하였으며, 패턴을 사용한 디자인 무드가 인상적입니다.`,
        image:[aryko1,aryko2,aryko3,aryko4],
        video:[aryko5,aryko6],
        protolink:[]
    },  
    
    "line":{
        title:`Line Coupon`,
        author:`Client : Line Hongkong
        Director : AMBS Corporation
        Design : Ordo`,
        desc:`
        'It is a line coupon that is a new feature of Line Messenger which was conducted with 'Line Hong-Kong' and 'AMBS corporation' from February to April 2019. A variety of social coupons and deals on a single platform to store and use the user-friendly features. Based on the service plan presented by the line side with AMBS corporation, we created a storyboard, applied the methodology, and created a prototype. Based on this, visual design such as pictogram and UI was calculated, and MVP model was produced.

        Line corporation의 홍콩 법인인 'Line HongKong' 과 진행한 라인 메신저의 신기능인 라인 쿠폰입니다.
        다양한 소셜 쿠폰과 딜을 하나의 플랫폼에 모아 저장, 사용을 할 수 있는 유저 편의 기능입니다. AMBS corportation과 공동 용역을 진행하였습니다. 라인 측에서 제시한 서비스 기획을 AMBS corporation과 함께, 이를 토대로, 스토리보드를 작성하였으며, 방법론을 적용하며, 프로토타입을 생성하였습니다. 이를 토대로 픽토그램, UI 와같은 시각적 디자인을 산출하였으며, MVP 모델을 제작하였습니다.
        `,
        image:[line1,line2,line3],
        video:[line4],
        protolink:["https://cloud.protopie.io/p/FXx8M4riXhV?touchHint=true&ui=false&scaleToFit=true&cursorType=touch&mockup=true&bgColor=%23F5F5F5&playSpeed=1&playerAppPopup=true"]
    },  
    "doro":{
        title:`Doro`,
        author:`Client : Yeong GIl  Kim, Team Doro
        Director : Ordo , Yong tae - Yoo
        Design : Ordo
        `,
        desc:`
        The "Doro" design project was directed by Ordo for 13 months from march 2018 to april 2020 through a wide range of designe work, including directing planning, apps, branding, UI design and prototyping. It shows visual elements with a color palette. The mood of the app reminds the color of the traffic lights in daily life such as blue, green, red, orange, etc. I simply wanted to express the vehicle management app. The car running on the road is like our daily routine and itinerary, and we want the user to instantly record everything that happens on the road.

“Doro" 디자인 프로젝트는 2018 년 3 월부터 2020 년 4 월까지 1년 1개월 동안 디렉팅 기획, 앱, 브랜딩, UI 디자인 및 프로토타이핑을 포함한 광범위한 디자인 작업을 통해 Ordo의 디렉팅을 받았습니다. 미니멀리즘, 비주얼 및 컬러 팔레트등으로 시각적 요소를 나타냅니다. 특별히 앱의 컬러 무드는 , 파랑, 초록, 빨강, 주황 등 일상속의 신호등의 색깔과도 연관되어 있습니다. 간소히 차량 관리 앱을 표현하고 싶었습니다. 직관적으로 하늘에서 도로 위를 달리는 자동차의 모습은, 마치 우리의 일상과 여정과도 같습니다. 그리고 도로에서 일어나는 모든 일을 사용자가 즉각적으로 기록하길 원합니다.
`,
        image:[doro1,doro2,doro3,doro4],
        video:[doro5,doro6,doro7],
        protolink:[]
    },  

    "claus":{
        title:`Claus`,
        author:`Client : Sang Myung University , Beliver
        Director : Daeyeon Kim
        Design : Ordo
        `,
        desc:`
        상명대학교 창업 협력단과 빌리버 컴패니와와 2020 년 7 월에는, 포장 디자인 프로젝트를 진행했습니다. 브랜딩, 비즈니스에서 사용 가능한 그래픽 시스템을 제작하는 데 초점을 두었습니다. 기존 색상 팔레트에서 색조를 제외하여 새로운 미니멀리즘의 전환을 시도했습니다. 기능적인 메시징과 우아하고 기품있는 비주얼을 커피 패키징에 담고 싶었습니다.
`,
        image:[claus1,claus2,claus3,claus4],
        video:[],
        protolink:[]
    },  
    
    }


    /*      <WorkPost 
            
            title={`Carbom (IMS.connect)`} 
            author={`Client : IMS.Mobility Director : Daeyeon Kim Design : Ordo`} 
            desc={`IMS.Mobility Inc.와 2021년 4월부터 6월까지 진행한 Carbom 프로젝트입니다. 구축된 초기 프로토타입 베이스의 하이브리드 앱의 디자인 시스템 제작 및 , 마스터 레벨의 인터페이스를 생성하여, 다양한 페이지에서 생성 가능하게 끔, 컨셉 시안부터 상용화 시안까지의 그래픽 작업을 거친 후, 디자인 배포하였습니다. 명확한 정량적 기능의 사용을 작업 초점으로 두고, 고객사 측의 요구를 최대한 수용할 수 있도록, 상시 소통을 진행하였습니다.`}
            
            /> */

    return(

        <>

        {Object.values(workDummy).map(x=>{return <WorkPost data={x}/>})}

        </>
    )
    
}

export default UIdesign;