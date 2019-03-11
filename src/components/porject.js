import React, { Component } from 'react';
import {Tabs,Tab,Grid,Cell,Card,CardTitle,CardText,CardActions,Button,CardMenu,IconButton} from 'react-mdl'
class Projects extends Component {
    constructor(props){
        super(props);
        this.state={
            activeTab:0
        }
    }
    toggleCategories(){
        if(this.state.activeTab === 0){
            return(
                <div className="project-grid">
                <Card shadow={5} style={{minWidth:'450',margin:'auto'}}>
                    <CardTitle style={{color:'#fff',height:'176px',background:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoRYSpVq1MJhl7gsZG-nd56yKN5MKKkS2po0JY_gmutB8yYci9) center/cover'}}>React Project #1</CardTitle>
                <CardText>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </CardText>
                <CardActions>
                  <Button colored href="#">GitHub</Button>
                  <Button colored>CodePen</Button>
                  <Button colored>LiveDemo</Button>
                </CardActions>
                <CardMenu style ={{color:"#fff"}}>
                  <IconButton name="share" />
                </CardMenu>
                </Card>
              
                <Card shadow={5} style={{minWidth:'450',margin:'auto'}}>
                    <CardTitle style={{color:'#fff',height:'176px',background:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoRYSpVq1MJhl7gsZG-nd56yKN5MKKkS2po0JY_gmutB8yYci9) center/cover'}}>React Project #2</CardTitle>
                <CardText>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </CardText>
                <CardActions>
                  <Button colored href="#">GitHub</Button>
                  <Button colored>CodePen</Button>
                  <Button colored>LiveDemo</Button>
                </CardActions>
                <CardMenu style ={{color:"#fff"}}>
                  <IconButton name="share" />
                </CardMenu>
                </Card>


                <Card shadow={5} style={{minWidth:'450',margin:'auto'}}>
                    <CardTitle style={{color:'#fff',height:'176px',background:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoRYSpVq1MJhl7gsZG-nd56yKN5MKKkS2po0JY_gmutB8yYci9) center/cover'}}>React Project #3</CardTitle>
                <CardText>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </CardText>
                <CardActions>
                  <Button colored href="#">GitHub</Button>
                  <Button colored>CodePen</Button>
                  <Button colored>LiveDemo</Button>
                </CardActions>
                <CardMenu style ={{color:"#fff"}}>
                  <IconButton name="share" />
                </CardMenu>
                </Card>

                </div>
            )
    }else if (this.state.activeTab ===1){
        return(
            <div><h1>This is Bootstrap</h1></div>
        )
    }else if(this.state.activeTab === 2){
        return(
            <div><h1>this is HTML/css</h1></div>
        )
    }

    }
    render() {
        return (
            <div className="category-tabs">
            <Tabs activeTab={this.state.activeTab} onChange={(tabId)=>this.setState({activeTab:tabId})} ripple>
                <Tab>React</Tab>
                <Tab>Bootstrap</Tab>
                <Tab>HTML5/CSS</Tab>
            </Tabs>

               <Grid >
                <Cell col={12}>
                    <div className="content"> {this.toggleCategories()}</div>
                </Cell>
               </Grid>


            </div>
         );
    }
}

export default Projects;
