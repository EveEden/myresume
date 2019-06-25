import React from 'react'
import { Grid, Cell } from 'react-mdl'

export default class LandingPage extends React.Component {
  render () {
    return (
      <div>
        <Grid className="landing-grid">
        <Cell col={12}>
        <img
          src='https://yt3.ggpht.com/a-/AN66SAwhTTSatB57ajJhGOgpEadYezr1dtmVre72eA=s900-mo-c-c0xffffffff-rj-k-no'
          alt='avi eve'
          className="avatar-img"
        />
        <div className="banner-text">
          <h1>Full Stack Web Developer</h1>
          <hr/>
          <p>HTML/CSS | JavaScript | NodeJS | Express | React | Redux | Knex/SQLite | Bulma</p>
          <div className="social-links">
          {/* Linkedin */}
            <a href="https://www.linkedin.com/in/eve-henare-80a9a1157/" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-linkedin-square" aria-hidden="true"/>
            </a>
          {/* Github */}
          <a href="https://github.com/EveEden" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-github-square" aria-hidden="true"/>
            </a>
          {/* Free Code Camp */}
          <a href="https://www.freecodecamp.org/eve_eden" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-free-code-camp" aria-hidden="true"/>
            </a>  
          </div>
          <h5>This website is under construction - external links currently not working</h5>
        </div>
        </Cell>
        </Grid>
      </div>
    )
  }
}