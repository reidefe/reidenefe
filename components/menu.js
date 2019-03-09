import React from 'react'
import {Menu, Dropdown, Icon, Segment} from 'semantic-ui-react';

const TopNav = () =>{
    return(
       <div>
           <Menu attached='top'>
               <Dropdown item icon='list' simple>
                   <Dropdown.Menu>
                       <Dropdown.Item>                          
                           Nave
                           <Icon  name='angle left'/>
                           <Dropdown.Menu>
                               <Dropdown.Item>                                  
                                   subnav1
                                   <Icon  name='angle right'/>
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
               <Menu.Menu position='right'>
                   <div className='ui right aligned category search item'>
                       <div className='ui transparent icon input'>
                           <input type='text' className='prompt' placeholder='Search'/>
                           <i className='search link icon'/>
                       </div>
                   </div>
               </Menu.Menu>
           </Menu>
       </div>
    );
}

export default TopNav