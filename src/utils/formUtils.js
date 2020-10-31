function checkValidation(name,value,rules) {
    let error = {status:false,message:[]};
    console.log(value);
    if (rules.length < 1) return;
    rules.forEach(rule => {
        const ruleName = Object.keys(rule)[0];
        const ruleValue = Object.values(rule)[0];

        switch (ruleName) {
            case ("isRequired"): {
                if (!ruleValue) return;
                if (!value.trim()) {
                    error = {...error,status:true,message:[...error.message,`${name} can not be empty`]}
                }
                break;
            } 

            case ("minLength"): {
                if (value.trim().length < ruleValue) {
                    error = {...error,status:true,message:[...error.message,`the length of ${name} should greater than or equal to ${ruleValue}`]}
                }
                break;
            }

            case ("maxLength"): {
                if (value.trim().length > ruleValue) {
                    error = {...error,status:true,message:[...error.message,`the length of ${name} should less than or equal to ${ruleValue}`]}
                }
                break;
            } 

            default:
                break;
        }
    });
    return error;
}

export {checkValidation}