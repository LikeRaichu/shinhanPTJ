import axios from "axios";



// 테스트용 보험계약 목록조회
export const forTestIns = async (cryptes) => {
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }
    console.log(cryptes);
    const call = {
        "dataHeader": {},
        "dataBody": {
            "rdreNo": cryptes
        }
    }
    // console.log(call);

    let itgo = JSON.stringify(call);
    console.log(itgo);

    // const body = JSON.stringify(cryptes);
    // console.log(body, config);
    let res = await axios.post("http://10.3.17.61:8083/v1/contract/list", itgo, config)
    console.log(res.data);
};

// 거래내역 조회
export const callTransactionByDate = async () => {
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }
    const tranxCall = {
        "dataHeader":
        {
        },
        "dataBody":
        {
            "serviceCode": "D1110",
            "정렬구분": "1",
            "조회시작일": "2019.09.20",
            "조회종료일": "2019.09.27",
            "계좌번호": "110-294-129071"
        }
    }
    console.log(tranxCall);

    let callText = JSON.stringify(tranxCall);
    let res = await axios.post("http://10.3.17.61:8080/v1/search/transaction/history", callText, config)
    console.log(res.data);
};

// 국내 체크카드 사용조회
export const debitUseForDomestic = async () => {
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }
    const debitForDomestic = JSON.stringify({
        "dataHeader": {
        },
        "dataBody": {
            "nxtQyKey": "",
            "bctag": "0",
            "inqterm": "2019050720190805"
        }
    });
    let res = await axios.post("http://10.3.17.61:8081/v1/usedebitcard/searchusefordomestic", debitForDomestic, config)
    console.log(res.data);
};

// 신용카드 국내사용내역 조회
export const creditUseForDomestic = async () => {
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }
    const creditForDomestic = JSON.stringify({
        "dataHeader": {
        },
        "dataBody": {
            "nxtQyKey": "",
            "inqterm": "2019050720190805",
            "bctag": "0"
        }
    });
    let res = await axios.post("http://10.3.17.61:8081/v1/usecreditcard/searchusefordomestic", creditForDomestic, config)
    console.log(res.data);
};

// 보험계약 상세조회
export const insContractDetail = async (cryptes) => {
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }
    console.log(cryptes);
    const callDetail = JSON.stringify({
        "dataHeader": {},
        "dataBody": {
           "inonNo": cryptes
        }
      });
    // const body = JSON.stringify(cryptes);
    // console.log(body, config);
    let res = await axios.post("http://10.3.17.61:8083/v1/contract/detail", callDetail, config)
    console.log(res.data);
};