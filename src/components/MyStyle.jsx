import React from 'react'
import { Grid, Cell } from 'react-mdl'

import Taaniko from '../taaniko.png'
import Desk from '../mydesk.png'
import Caddy from '../Caddy.png'

export default class MyStyle extends React.Component {
  render () {
    return (
      <>
      <Grid>
        <Cell col={4}>
        <img
          src='https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2018%2F09%2Fserena-williams-off-white-nike-blazer-baby-size-1.jpg?q=75&w=800&cbr=1&fit=max'
          alt='Nike Serina Blazer'
          className='style-img1'
        ></img>
        </Cell>
        <Cell col={4}>
        <img
          src={Taaniko}
          alt='Taaniko'
          className='style-img2'
        ></img>
        </Cell>
        <Cell col={4}>
        <img
          src='https://s3-eu-west-1.amazonaws.com/ncgm-images/blog/_imageL/New-Covent-Garden-Flower-Market-May-2018-A-Florists-Guide-to-Peonies-Rona-Wheeldon-Flowerona-Sarah-Bernhardt-Peony-at-Bloomfield.jpg?mtime=20180510110854'
          alt='peonies'
          className='style-img3'
        ></img>
        </Cell>
      </Grid>
      <Grid>
        <Cell col={4}>
        <img
          src='https://media.allure.com/photos/5bf1b1502ab5072a91e1853a/2:1/w_3431,h_1715,c_limit/travel%20editor%20favorite%20products.jpg'
          alt='travel'
          className='style-img4'
        ></img>
        </Cell>
        <Cell col={4}>
        <img
          src={Desk}
          alt='mydesk'
          className='style-img5'
        ></img>
        </Cell>
        <Cell col={4}>
        <img
          src={Caddy}
          alt='Caddy'
          className='style-img6'
        ></img>
        </Cell>
      </Grid>
      </>
    )
  }
}