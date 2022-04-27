import React from "react";
import BlogToggler from "components/BlogToggler";
import BlogContainer from "components/BlogContainer";


const BlogPostThree =()=>{

    return(
        <>
        <BlogToggler/>
        <BlogContainer title={`Dynamics.`} author={`Daeyeon Kim`} date={`2019.06 `} describe={`Why is interaction design becoming more common in the UI / UX area? In the shortest and clearest sense, it is often referred to as the “design field in which humans use products or services and interact with them.” It's an area that's changing too fast to define, and that's the moment every day. The definition changes depending on who deals with it, and the meaning changes from region to region and region to region. Interaction design was driven by the late Bill Mogridge and Bill Bufflank in Stanford. However, the contributions of Donald Norman and later professionals have enriched interaction design.  'The Design of every Things', written by Professor Donald Norman Wong, categorizes the principles of interaction elements in design very easily and convincingly. I think this may change, but I agree that the criteria below work in many areas.

UI / UX 영역에서 인터랙션 디자인이 보편화되어가는 이유는? 가장 짧고, 명료하게 많은 의미를 담아서, ‘인간이 제품이나 서비스를 사용하며, 상호간의 작용을, 이롭게 하는 디자인 분야’를 흔히들 일컫습니다. 정의하기엔 너무나도 빠르게 변하고 있는 영역이며, 그 순간은 매일 매일이 그러합니다.   누가 이것을 다루냐에 따라 정의가 바뀌며, 영역에 따라, 지역에 따라 그 의미가 바뀌기도 합니다. 인터렉션 디자인은 작고한 빌 모그리지와 스탠퍼드에 계시는 빌 버플랭크에 의해서 주도되었습니다. 허나 도널드 노먼을 비롯한 후대 전문가들의 기여가 인터렉션 디자인을 풍부하게 살찌웠습니다. 도널드 노먼  교수가 저술한 ‘The Design of every Things’에서는 디자인에서의 인터랙션 요소 원칙들을 아주 쉽고, 설득력있게 설명하고 있게 6가지로 분류합니다.개인적인 견해로는 디자인 필드에 따라, 상황에 따라 그 요소 원칙이 바뀔 수 있다고 생각합니다만 하단의 기준이 많은 영역에서 작용하는것에 동의합니다.`} />
        </>
    )
    
}

export default BlogPostThree;