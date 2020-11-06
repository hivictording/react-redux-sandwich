import baseForm from '../../login/baseForm'
import withForm from '../../login/withForm'

const formFields = [
            {
                id:1,
                name: 'address',
                fieldType: 'input',
                fieldConfig: {
                    type: 'text',
                    placeholder: 'Enter your address'
                },
                value:'',
                rules:[
                    {isRequired: true},
                    {minLength: 5},
                    {maxLength: 50},
                ],
                error: {status:false,message:[]}
            },
            {
                id:2,
                name: 'delivery method',
                fieldType: 'radio',
                fieldConfig: {
                    name: 'delivery',
                    values: ['regular','express','cheapest']
                },
                value:'',
                rules:[
                    {isRequired: true},
                ],
                error: {status:false,message:[]}
            },
        ]



export default withForm(baseForm,formFields,"order",null)