import React ,{ Component,} from 'react';
import {Form} from 'semantic-ui-react';

class signup extends Component{
    render(){
        return(
            <Form>
                <Form.Group>
                    <Form.Input label='name' placeholder='enter your first name' />
                                                 
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
                <Form.Button >submit</Form.Button>
            </Form>
        )
    }
}