import WorkPost from "components/WorkPost";
import React from "react";
import styled from "styled-components";

import carbom1 from "images/works/carbom/carbom1.png"
import carbom2 from "images/works/carbom/carbom2.png"
import carbom3 from "images/works/carbom/carbom3.png"
import carbom4 from "images/works/carbom/carbom4.png"
import hao1 from "images/works/hao/hao1.png"
import hao2 from "images/works/hao/hao2.png"


const UIdesign =()=>{

    const Null=styled.div`

    width:100%;
    
    `


    /*
{UIjson.carbom.map(x=>{{
    return <img src={x}/>}}
    )}
 */


        const workDummy={
 
       "carbom":{
        id:0,
        title:`Carbom (IMS.connect)`,
        author:`Client : IMS.Mobility Director : Daeyeon Kim Design : Ordo`,
        desc:`IMS.Mobility Inc.와 2021년 4월부터 6월까지 진행한 Carbom 프로젝트입니다. 구축된 초기 프로토타입 베이스의 하이브리드 앱의 디자인 시스템 제작 및 , 마스터 레벨의 인터페이스를 생성하여, 다양한 페이지에서 생성 가능하게 끔, 컨셉 시안부터 상용화 시안까지의 그래픽 작업을 거친 후, 디자인 배포하였습니다. 명확한 정량적 기능의 사용을 작업 초점으로 두고, 고객사 측의 요구를 최대한 수용할 수 있도록, 상시 소통을 진행하였습니다.`,
        image:[carbom1,carbom2,carbom3,carbom4],
        video:[],
 
        
    },

    "hao":{

        id:1,
        title:`Hao`,
        author:`Client : Team Hao Director : Daeyeon Kim Design : Ordo`,
        desc:`2019년 10월부터 'Team Hao'는 개인들의 그룹인 고객으로써 우리는 그들과 같이 1년 간, 초기 사업 모델의 검증 및 자본 유치 계획을 위하여, 서비스가 보유한 추상적인 특장점 및 논리 구조를 시각화 하는데에 있어서, 디자인 작업의 초점을 두었습니다. 중국어의 교육서비스라는 컨셉트에서 기인한, 성조의 그래픽화 ,적색 계열의 컬러 시스템을 소프트하게 응용하여, 더욱 미니멀리즘한 시각 경험을 제공하였으며, 작업 추후 해당 서비스는 Ordo를 통하여, 부분 인수되어서 현재까지도 자체적으로 서비스 개발을 진행 중에 있습니다.`,
        image:[hao1,hao2],
        video:[]

    },

    "hello":{

        id:1,
        title:`Hao`,
        author:`Client : Team Hao Director : Daeyeon Kim Design : Ordo`,
        desc:`2019년 10월부터 'Team Hao'는 개인들의 그룹인 고객으로써 우리는 그들과 같이 1년 간, 초기 사업 모델의 검증 및 자본 유치 계획을 위하여, 서비스가 보유한 추상적인 특장점 및 논리 구조를 시각화 하는데에 있어서, 디자인 작업의 초점을 두었습니다. 중국어의 교육서비스라는 컨셉트에서 기인한, 성조의 그래픽화 ,적색 계열의 컬러 시스템을 소프트하게 응용하여, 더욱 미니멀리즘한 시각 경험을 제공하였으며, 작업 추후 해당 서비스는 Ordo를 통하여, 부분 인수되어서 현재까지도 자체적으로 서비스 개발을 진행 중에 있습니다.`,
        image:[hao1,hao2],
        video:[]

    },
    
    }


    /*      <WorkPost 
            
            title={`Carbom (IMS.connect)`} 
            author={`Client : IMS.Mobility Director : Daeyeon Kim Design : Ordo`} 
            desc={`IMS.Mobility Inc.와 2021년 4월부터 6월까지 진행한 Carbom 프로젝트입니다. 구축된 초기 프로토타입 베이스의 하이브리드 앱의 디자인 시스템 제작 및 , 마스터 레벨의 인터페이스를 생성하여, 다양한 페이지에서 생성 가능하게 끔, 컨셉 시안부터 상용화 시안까지의 그래픽 작업을 거친 후, 디자인 배포하였습니다. 명확한 정량적 기능의 사용을 작업 초점으로 두고, 고객사 측의 요구를 최대한 수용할 수 있도록, 상시 소통을 진행하였습니다.`}
            
            /> */

    return(

        <>

        <Null>
  
        {Object.values(workDummy).map(x=>{return <WorkPost data={x}/>})}
  
        </Null>
        </>
    )
    
}

export default UIdesign;