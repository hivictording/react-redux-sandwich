function checkValidation(name,value,rules) {
    let error = {status:false,message:[]};
    
    if (rules.length < 1) return;
    for (const rule of rules) {
        const ruleName = Object.keys(rule)[0];
        const ruleValue = Object.values(rule)[0];
        // console.log(name,ruleName,ruleValue);

        switch (ruleName) {
            case ("isRequired"): {
                if (!ruleValue) return error;
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

        if (error.status) break;
    }

    return error;
}

export {checkValidation}