import React, { useContext } from 'react'
import Component2 from './Component2'
import { UserContext } from './App';

function Component1() {
    const user = useContext(UserContext);
    return (
  <h1>{`Hello ${user} again!`}</h1>
  )
}

export default Component1