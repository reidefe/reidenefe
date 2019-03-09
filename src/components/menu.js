import React, { Component } from 'react'
import {Menu, Dropdown, Icon, Segment, Grid, Header} from 'semantic-ui-react';

const TopNav = () =>{
    return(
       <div>
           <Menu tabular>
               <Dropdown item icon='list' >
                   <Dropdown.Menu>
                       <Dropdown.Item >                          
                           <span className='text'>Nav</span>
                           <Icon  name='dropdown'/>
                           <Dropdown.Menu>
                               <Dropdown.Item >                                  
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
               <Menu.Menu>
                    <Menu.Item >electronics
                        <Dropdown>
                            <Dropdown.Menu>
                                <Dropdown.Item>phones</Dropdown.Item>
                                <Dropdown.Item>phones</Dropdown.Item>
                                <Dropdown.Item>phones</Dropdown.Item>
                                <Dropdown.Item>phones</Dropdown.Item>
                                <Dropdown.Item>phones</Dropdown.Item>
                                <Dropdown.Item>phones</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>                                           
                              
                    </Menu.Item>                 
               </Menu.Menu>

              
           </Menu>
       </div>
    );
}

export default TopNav;