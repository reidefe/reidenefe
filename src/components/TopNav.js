import React, { Component } from 'react'
import {Menu, Dropdown, Icon, Segment} from 'semantic-ui-react';

const TopNav = () =>{
    return(
       <div>
           <Menu attached='top'>
               <Dropdown item icon='list' simple>
                   <Dropdown.Menu>
                       <Dropdown.Item>                          
                           <span className='text'>Nav</span>
                           <Icon  name='dropdown'/>
                           <Dropdown.Menu>
                               <Dropdown.Item>                                  
                                   subnav1
                                   <Icon  name='dropdown'/>
                                   <Dropdown.Menu>                                       
                                       <Dropdown.Item>subsubnav</Dropdown.Item>
                                   </Dropdown.Menu>
                               <Dropdown.Item>subnav2</Dropdown.Item>   
                               <Dropdown.Item>subnav3</Dropdown.Item> 
                               </Dropdown.Item>
                           </Dropdown.Menu>
                       <Dropdown.Item>Nav2</Dropdown.Item> 
                       <Dropdown.Item>Nav3</Dropdown.Item>
                       <Dropdown.Item>Nav4</Dropdown.Item>   
                       </Dropdown.Item>
                   </Dropdown.Menu>
               </Dropdown>
              
           </Menu>
       </div>
    );
}

export default TopNav;