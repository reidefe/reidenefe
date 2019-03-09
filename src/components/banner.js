import React, { Component } from 'react'
import {Container, Segment, Image, Grid, Icon, Card, Advertisement} from 'semantic-ui-react'
import  "react-responsive-carousel/lib/styles/carousel.min.css";
import  { Carousel } from 'react-responsive-carousel';


var user = (

    <a>
        <Icon name='user'/>
        16 products
    </a>
)

class Banner extends Component{
    constructor(props){
        super(props)
       
    }
    render(){
        return(
            <div>
                <Segment placeholder>
                    <Carousel dynamicHeight showStatus={false} showThumbs={false} showIndicators={false} showArrows={false} infiniteLoop autoPlay>
                       <div>
                           <img src=''></img>                                                      
                       </div>
                       <div>
                           <img src=''></img>                                                      
                       </div>
                       <div>
                           <img src='#'></img>                                                      
                       </div>
                       
                       
                    </Carousel>
                </Segment>
                <Grid columns='two' >
                    <Grid.Column width={10}>
                        <Grid.Row >
                            <Carousel showArrows={true} transitionTime={500} showStatus={false} showThumbs={false} showIndicators={false} centerMode centerSlidePercentage={40} infiniteLoop>
                            
                               <Card fluid={true} Image='/imgs/p2.jpg' header='designer shoes'  meta='ray hudson' description='designer shoes from italy going for a hot sale' extra={user}/>
                               <Card fluid={true} Image='/imgs/p2.jpg' header='designer shoes'  meta='ray hudson' description='designer shoes from italy going for a hot sale' extra={user}/>
                               <Card fluid={true} Image='/imgs/p2.jpg' header='designer shoes'  meta='ray hudson' description='designer shoes from italy going for a hot sale' extra={user}/>
                               <Card fluid={true} Image='/imgs/p2.jpg' header='designer shoes'  meta='ray hudson' description='designer shoes from italy going for a hot sale' extra={user}/>
                               <Card fluid={true} Image='/imgs/p2.jpg' header='designer shoes'  meta='ray hudson' description='designer shoes from italy going for a hot sale' extra={user}/>
                               <Card fluid={true} Image='/imgs/p2.jpg' header='designer shoes'  meta='ray hudson' description='designer shoes from italy going for a hot sale' extra={user}/>
                               <Card fluid={true} Image='/imgs/p2.jpg' header='designer shoes'  meta='ray hudson' description='designer shoes from italy going for a hot sale' extra={user}/>
                               <Card fluid={true} Image='/imgs/p2.jpg' header='designer shoes'  meta='ray hudson' description='designer shoes from italy going for a hot sale' extra={user}/>
                              
                            </Carousel>
                        </Grid.Row>                                               
                    </Grid.Column>
                    <Grid.Column>
                        <Grid.Row>
                            <Advertisement unit='medium rectangle'>
                                <img src='https://react.semantic-ui.com/images/wireframe/image.png'/>
                            </Advertisement>
                        </Grid.Row>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}

export default Banner;
