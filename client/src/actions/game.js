const givePoint = ( retlname="신한 헬스클럽", aprvamt, rule="헬스클럽" ) => {
    // retlname = 점포명
    // aprvamt = 이용금액
    // rule = 식별자 - 뭐 약국, 헬스 등
    // string 검사기 - var stringVal = "javascript", substring = "java"; console.log(stringVal.includes(substring));
    // let rule = "약국, 헬스클럽";
    let healOrDamage = retlname,
        ruler = rule;
    console.log(healOrDamage.includes(ruler));
}

givePoint();