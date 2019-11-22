import React from "react";
import { forTestIns } from "../actions/apiCall";
import crypto from "crypto"
var AES = require("crypto-js/aes");
// import SHA256 from "crypto-js/sha256";



const ApiTest = () => {
    const [values, setValues] = React.useState({
        rdreNo: ""
    });

    // crypto.sha256()

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };

    // console.log(values);

    console.log(values.rdreNo)

    const onSubmit = () => {
        let crypTes = crypto.createHash('sha1').update(values.rdreNo).digest('base64');
        console.log(crypTes);
        // const { crypTes } = values;
        forTestIns( {crypTes} );
    }

    

    return(
        <div className="form">
            <input
            type="rdreNo"
            name="rdreNo"
            id="rdreNo"
            value={values.rdreNo}
            onChange={handleChange("rdreNo")} />
            <button onClick={onSubmit} />
        </div>
    );
}

export default ApiTest;