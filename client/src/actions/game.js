const givePoint = ( retlname="신한 헬스클럽", aprvamt, rule="헬스클럽" ) => {
    // retlname = 점포명
    // aprvamt = 이용금액
    // rule = 식별자 - 뭐 약국, 헬스 등
    // string 검사기 - var stringVal = "javascript", substring = "java"; console.log(stringVal.includes(substring));
    // let rule = "약국, 헬스클럽";
    let healOrDamage = retlname,
        ruler = rule;
    console.log(healOrDamage.includes(ruler));

    // 조건에 맞는 소비일 경우 결제금액의 0.02%만큼 포인트를 더한 후 originalPoint에 업데이트
    if(healOrDamage.includes(ruler) === true) {
        let originalPoint = originalPoint + aprvamt*0.02
    } else {
        let originalPoint = originalPoint - aprvamt*0.02
    }
}