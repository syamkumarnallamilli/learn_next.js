import React from 'react'
import { UseCounter } from '../../../store/counter'

const Zustandcounter = () => {
    const count=UseCounter()
  return (
    <div>counter: {count.counter}
    <button onClick={count.increment}>incre</button>
    
    </div>

  )
}

export default Zustandcounter