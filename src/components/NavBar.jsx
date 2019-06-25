import React from 'react'
import {Layout, Header, Navigation, Drawer, Content } from 'react-mdl'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div style={{height: '70px'}}>
        <Layout>
          <Header className="header-color" title={<Link style={{ textDecoration: 'none', color: 'white' }} to='/'>home</Link>}>
              <Navigation>
                  <Link to="/resume">Resume</Link>
                  <Link to="/projects">Projects</Link>
                  <Link to="/mystyle">My Style</Link>
                  <Link to="/contact">Contact</Link>
              </Navigation>
          </Header>
          <Drawer title={<Link style={{ textDecoration: 'none', color: 'lilac' }} to='/'>home</Link>}>
              <Navigation>
                  <Link to="/resume">Resume</Link>
                  <Link to="/projects">Projects</Link>
                  <Link to="/mystyle">My Style</Link>
                  <Link to="/contact">Contact</Link>
              </Navigation>
          </Drawer>
          <Content >
          </Content>
        </Layout>                     
      </div>
  )
}

export default NavBar
