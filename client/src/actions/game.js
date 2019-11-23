const givePoint = () => {
    // retlname = 점포명
    // aprvamt = 이용금액
    // rule = 식별자 - 뭐 약국, 헬스 등
    // string 검사기 - var stringVal = "javascript", substring = "java"; console.log(stringVal.includes(substring));
    // let rule = "약국, 헬스클럽";
    let retlname="신한 헬스클럽";
    let aprvamt="100000";
    let rule="헬스클럽";
    let originalPoint = 10000;
    
    let judge = retlname.includes(rule);

    // 조건에 맞는 소비일 경우 결제금액의 0.02%만큼 포인트를 더한 후 originalPoint에 업데이트
    const punish = () => {
        let pointAll = []
    if(judge === true) {
       let pointF = originalPoint + (aprvamt*0.02)
       pointAll.push(originalPoint, pointF) 
    } else {
       let pointF = originalPoint - (aprvamt*0.02)
       pointAll.push(originalPoint, pointF)
    } 
    return pointAll;
    
}
    console.log(pointAll);
    punish();
}