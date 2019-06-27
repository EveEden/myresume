import React from 'react'
import { Grid, Cell } from 'react-mdl'

export default class Experience extends React.Component {
  render() {
    return(
      <Grid>
        <Cell col={4}>
          <p>{this.props.date}</p>
        </Cell>
        <Cell col={8}>
          <h4 style={{ marginTop: '0px'}}>{this.props.employer}</h4>
          <p>{this.props.jobDescription}</p>
          <a href={this.props.website} rel="noopener noreferrer" target='_blank'>{this.props.website}</a>
        </Cell>
      </Grid>
    )
  }
}