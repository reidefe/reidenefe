import React, { Component} from 'react'
import {Menu, Icon, Header, Dropdown, Form, Button, Checkbox} from 'semantic-ui-react'
import {Link} from 'react-router-dom'


class FirstNav extends Component{   
    constructor(props){
        super(props);
        this.state = {
            Button: 'sign in',
            firstname: '',
            surname: '',
            phone:'12345',
            email: '', 

        }

     

      
    }
    handleChange(e){
        console.log( 'a name has been logged')
        this.setState({firstname:e.target.value});
    }
    
 
    render(){
        return(
            <div>
                <Menu secondary>                  
                    <Menu.Menu>
                        <Menu.Item >
                            <Header as='h1'>CartsAnd Shop</Header>
                        </Menu.Item>
                    </Menu.Menu>
                    
                    <Menu.Item name='checkout'/>
                    <Menu.Item name='contact us'>contact us<Icon name='phone'/></Menu.Item>
                    <Menu.Menu position='right'>
                       <div className='ui right aligned category search item'>
                           <div className='ui transparent icon input'>
                           <input type='text' className='prompt' placeholder='Search'/>
                           <i className='search link icon'/>
                          </div>
                       </div>
                   </Menu.Menu>
                    <Menu.Menu position='right'>
                       <Menu.Item>{this.state.phone}
                           
                       </Menu.Item>
                       <Menu.Item>Track your order
                           <Icon name='paper plane'/>
                       </Menu.Item>
                        <Dropdown item icon='location arrow' simple>                             
                            <Dropdown.Menu>                                
                                <Dropdown.Item>lagos</Dropdown.Item>
                                <Dropdown.Item>abuja</Dropdown.Item>
                                <Dropdown.Item>p.harcourt</Dropdown.Item>
                                <Dropdown.Item>kano</Dropdown.Item>
                                <Dropdown.Item>rivers</Dropdown.Item>
                                <Dropdown.Item>c.rivers</Dropdown.Item>
                                <Dropdown.Item>ogun </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Button animated='vertical'>
                            <Button.Content hidden>{this.state.Button}</Button.Content>
                            <Button.Content visible><Icon name='user'/></Button.Content>


                        </Button>                                                                  
                    </Menu.Menu>                    
                </Menu>
            </div>
        );
    }
}

export default FirstNav;