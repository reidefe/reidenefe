import React, {Component} from 'react'
import {Menu, } from'semantic-ui-react';
class SecNav extends Component{
    render(){
        return(
            <Menu size='tiny' secondary>
                <Menu.Item name='work with us'/>
            </Menu>
        );
    }
}
export default SecNav;