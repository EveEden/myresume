import React from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl'

export default class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }
 
toggleCategories() {
  if (this.state.activeTab === 0) {
    return (
      <div className='projects-grid'>
      {/* Project 1 */}
      <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}}>React Project 1</CardTitle>
        <CardText>
          Under Construction
        </CardText>
        <CardActions border>
          <Button colored>Github</Button>
          <Button colored>CodePen</Button>
          <Button colored>LiveDemo</Button>
        </CardActions>
        <CardMenu style={{color: '#fff'}}>
          <IconButton name='share' />
        </CardMenu>
      </Card>

      {/* Project 2 */}
      <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}}>
          React Project 2
        </CardTitle>
        <CardText>
          Under Construction
        </CardText>
        <CardActions border>
          <Button colored>Github</Button>
          <Button colored>CodePen</Button>
          <Button colored>LiveDemo</Button>
        </CardActions>
        <CardMenu style={{color: '#fff'}}>
          <IconButton name='share' />
        </CardMenu>
      </Card>

      {/* Project 3 */}
      <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}}>
          React Project 3
        </CardTitle>
        <CardText>
          Under Construction
        </CardText>
        <CardActions border>
          <Button colored>Github</Button>
          <Button colored>CodePen</Button>
          <Button colored>LiveDemo</Button>
        </CardActions>
        <CardMenu style={{color: '#fff'}}>
          <IconButton name='share' />
        </CardMenu>
      </Card>                
      </div>
    )
  } else if (this.state.activeTab === 1) {
    return (
      <div className="projects-grid">
      {/* Project 1 Redux */}
      <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://miro.medium.com/max/1838/1*XLPUfIkmIA01h1D0ti-wJw.png) left / cover'}}>
          Redux Project 1
        </CardTitle>
        <CardText>
          Built a game engine in a 1 week group project for bootcamp graduation.
          https://github.com/EveEden/ReFlick
        </CardText>
        <CardActions border>
          <Button colored>Github</Button>
          <Button colored>CodePen</Button>
          <Button colored>LiveDemo</Button>
        </CardActions>
        <CardMenu style={{color: '#fff'}}>
          <IconButton name='share' />
        </CardMenu>
      </Card>

      {/* Project 2 Redux */}
      <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{ color: 'black', height: '176px', background: 'url(https://miro.medium.com/max/1838/1*XLPUfIkmIA01h1D0ti-wJw.png) right / cover'}}>
          Redux Project 2
        </CardTitle>
        <CardText>
          Under Construction
        </CardText>
        <CardActions border>
          <Button colored>Github</Button>
          <Button colored>CodePen</Button>
          <Button colored>LiveDemo</Button>
        </CardActions>
        <CardMenu style={{color: '#fff'}}>
          <IconButton name='share' />
        </CardMenu>
      </Card>
      </div>
    )
}
  else if (this.state.activeTab === 2) {
    return(
      <div className="projects-grid">
      {/* Project 1 */}
      <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/945/1*aYD002x4UBQ4iJCRbiKJrg.png) center / cover'}}>
          Angular Project 1
        </CardTitle>
        <CardText>
          Under Construction
        </CardText>
        <CardActions border>
          <Button colored>Github</Button>
          <Button colored>CodePen</Button>
          <Button colored>LiveDemo</Button>
        </CardActions>
        <CardMenu style={{color: '#fff'}}>
          <IconButton name='share' />
        </CardMenu>
      </Card>
      </div>
    )
  }
}

  render () {
    return (
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          <Tab>Redux</Tab>
          <Tab>Angular</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div>{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    )
  }
}