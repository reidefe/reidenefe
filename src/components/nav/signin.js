import React ,{ Component,} from 'react';
import {Form} from 'semantic-ui-react';
const options = [
    {key:'m', text:'male', value:'male'},
    {key:'f', text:'female', value:'female'}
]

class signin extends Component{
    render(){
        return(
            <Form>
                <Form.Group>
                    <Form.Input label='first name' placeholder='enter your first name' />
                    <Form.Input label='last name' placeholder='enter your last name' />                                      
                </Form.Group>                
                <Form.Group>
                    <Form.Input label='Email' placeholder='enter your mail' />
                    <Form.Input label='Phone number' placeholder='enter your phone number' />                                      
                </Form.Group>
                
                <Form.Group>
                    <Form.Select label='Gender' placeholder='Gender' options={options} />
                  
                </Form.Group>
                
                <Form.Group>
                    <Form.Input label='password' placeholder='enter your password' />
                    <Form.Input label='confirm your password' placeholder='enter your the same password' />       

                </Form.Group>
                <Form.Group>
                    <Form.Checkbox label='I agree to the terms and conditions'  />
                  
                </Form.Group>
                
                <Form.Button >submit</Form.Button>
            </Form>
        )
    }
}

export default signin