import React from 'react'
import  {Redirect} from 'react-router-dom'

const NoRouteMatch = props => (
  <Redirect to='/'/>
)

export default NoRouteMatch
