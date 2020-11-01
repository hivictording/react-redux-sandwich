import withForm from '../../../hoc/withForm';

const formFields =[
            {
                id:1,
                name: 'username',
                fieldType: 'input',
                fieldConfig: {
                    type: 'text',
                    placeholder: 'Enter your username'
                },
                value:'',
                rules:[
                    {isRequired: true},
                    {minLength: 8},
                    {maxLength: 12},
                ],
                error: {status:false,message:[]}
            },
            {
                id:2,
                name: 'password',
                fieldType: 'input',
                fieldConfig: {
                    type: 'password',
                    placeholder: 'Enter your password'
                },
                value:'',
                rules:[
                    {isRequired: true},
                    {minLength: 6},
                    {maxLength: 12},
                ],
                error: {status:false,message:[]}
            },
        ]
    
    const text = 'new user? sign up!';
    const formType = "login"

    export default withForm(formFields,text,"login")