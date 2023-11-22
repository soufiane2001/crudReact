import React, { useContext } from 'react'

import { UserContext } from './App';

function Component2() {
    const user = useContext(UserContext);
    return (
  <h1>{`Hello ${user} again!`}</h1>
  )
}

export default Component2