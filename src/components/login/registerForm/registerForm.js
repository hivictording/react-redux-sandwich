import baseForm from '../baseForm'
import withForm from '../withForm';

const formFields = [
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
                    {minLength: 5},
                    {maxLength: 10},
                ],
                error: {status:false,message:[]}
            },
            {
                id:2,
                name: 'email',
                fieldType: 'input',
                fieldConfig: {
                    type: 'email',
                    placeholder: 'Enter your email'
                },
                value:'',
                rules:[
                    {isRequired: true},
                ],
                error: {status:false,message:[]}
            },
            {
                id:3,
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


const text = 'existing user? login here!'

export default withForm(baseForm,formFields,"registration",text)
