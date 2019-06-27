import React from 'react'
import { Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl'

export default class Contact extends React.Component {
  render () {
    return (
      <div className='contact-body'>
        <Grid className='contact-grid'>
          <Cell col={6}>
            <h2>Eve Henare</h2>
            <img 
            src='https://image.flaticon.com/icons/svg/496/496429.svg'
            alt='avi' 
            style={{height: '250px'}}
            />
            <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>I am well presented and a strong communicator.  I like to work hard in a team, and am driven to be creative and passionate in everything I do.  I love cooking, cars and coding,  and I keep fit and eat healthy.  My family is my everything, and I travel overseas every year.</p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr style={{ borderTop: '3px solid #e22947'}}/>
            <div className='contact-list'>
            <List>
              <ListItem>
              <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton'}}>
              <i className='fa fa-envelope' aria-hidden='true'/>
              evehenare1@gmail.com</ListItemContent>
              </ListItem>
              <ListItem>
              <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton'}}>
              <i className='fa fa-skype' aria-hidden='true'/>
              evehenare1</ListItemContent>
              </ListItem>
              <ListItem>
              <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton'}}>
              <i className='fa fa-fax' aria-hidden='true'/>
              just kidding - nobody uses fax</ListItemContent>
              </ListItem>
              
            </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}