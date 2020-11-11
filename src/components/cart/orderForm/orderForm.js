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
                    name: 'deliveryMethod',
                    values: ['regular','express','cheapest']
                },
                value:'',
                rules:[
                    {isRequired: true},
                ],
                error: {status:false,message:[]}
            },
            {
                id:3,
                name: 'delivery time',
                fieldType: 'checkbox',
                fieldConfig: {
                    name: 'deliveryTime',
                    values: ['morning','afternoon','evening']
                },
                value: [],
                rules:[
                    {isRequired: true},
                ],
                error: {status:false,message:[]}
            },          
            {
                id:4,
                name: 'delivery day',
                fieldType: 'select',
                fieldConfig: {
                    name: 'deliveryDay',
                    type: 'multiple',
                    values: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
                },
                value: [],
                rules:[
                    {isRequired: true},
                ],
                error: {status:false,message:[]}
            },
            {
                id:5,
                name: 'delivery location',
                fieldType: 'select',
                fieldConfig: {
                    name: 'deliveryLocation',
                    type: 'single',
                    values: ['house','street','neighbour']
                },
                value: ['house'],
                rules:[
                    {isRequired: true},
                ],
                error: {status:false,message:[]}
            },
        ]



export default withForm(baseForm,formFields,"order",null)