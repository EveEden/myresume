import React from 'react'
import { Grid, Cell } from 'react-mdl'

import Education from './Education'
import Experience from './Experience'
import Skills from './Skills'

export default class Resume extends React.Component {
  render () {
    return (
      <div className='resume'>
        <Grid>
          <Cell className='resume-left-col' col={4}>
            <div>
              <img 
              src='https://pbs.twimg.com/profile_images/3593134845/f83e9aa413ec9fca853d1710dbb47eee.jpeg'
              alt='my avi'
              className="avatar-img"
              />
            </div>
            
            <h2>Eve Henare</h2>
            <h4 style={{ color:'grey' }}>Web Developer</h4>
            <hr />
            <p>I started studying Web Development in 2019 and code every day - I love it.  Right now im working on solidifying my database knowledge and dabbling a bit in three.js for fun.  I previously took a paper in C# at University and taught myself to code in VB during the various admin roles ive taken up in factory work.  I have good supply chain and engineering knowledge, and excel in communication and team work.</p>
            <hr />
            <h5>Address</h5>
            <p>1 Hacker Way Menlo Park, 94025</p>
            <h5>Email</h5>
            <p>evehenare1@gmail.com</p>
            <h5>Web</h5>
            <p>your here...</p>
            <hr />
          </Cell>
          <Cell className='resume-right-col' col={8}>
            <h2>Education</h2>
            <Education 
              date='2019'
              institute='Enspiral Dev Academy'
              qualificationDetails='15 week web development bootcamp course'
              website='https://devacademy.co.nz/course-details/'
            />
            <Education 
              date='2017'
              institute='Kaizen Institute NZ'
              qualificationDetails='Kaizen Level 2 certificate'
              website='https://nz.kaizen.com/learn-kaizen/training.html'
            />
            <Education 
              date='2017'
              institute='Forte Management'
              qualificationDetails='Essential skills for Managers and Supervisors'
              website='https://www.forte-management.co.nz/'
            />
            <Education 
              date='2016'
              institute='SpeakEasy'
              qualificationDetails='Public Speaking'
              website='https://thepickeringgroup.com/#about'
            />
            <Education 
              date='2009 - 2013'
              institute='University of Waikato'
              qualificationDetails='Completed 1st year BE Biochemical - studied part time'
              website='https://www.waikato.ac.nz/study/qualifications/bachelor-of-engineering-with-honours'
            />
            
            <hr style={{ borderTop: '3px solid #e22947'}}/>

            <h2>Experience</h2>
            <Experience 
            date='2018'
            employer='Iron Bridge Property Management'
            jobDescripton='BDM Support'
            website='https://ironbridge.co.nz/'
            />
            <Experience 
            date='2007 - 2018'
            employer='Affco'
            jobDescription='Production Planner, Maintenance Planner, Logistics Co-ord, Inventory Control'
            website='https://www.affco.co.nz/'
            />

            <hr style={{ borderTop: '3px solid #e22947'}}/>

            <h2>Skills</h2>
            <Skills 
            skill='Progress Bars'
            progress='95'
            />
          </Cell>
        </Grid>
      </div>
    )
  }
}     