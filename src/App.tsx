import { useReducer } from 'react'
import './App.css'
import { Counter, initialState } from './reducer/counter'

function App() {
  const [state, dispatch] = useReducer(Counter, initialState)

  return (
    <div className='App'>
      <h1>Counter App</h1>
      <h2>management state using reducer</h2>
      <section>
        <button onClick={() => dispatch({ type: 'DECREMENT', payload: 10 })}>
          -10
        </button>
        <button onClick={() => dispatch({ type: 'DECREMENT', payload: 5 })}>
          -5
        </button>
        <button onClick={() => dispatch({ type: 'DECREMENT' })}>-1</button>
        <span style={{ padding: '0 30px' }}>{state.count}</span>
        <button onClick={() => dispatch({ type: 'INCREMENT' })}>+1</button>
        <button onClick={() => dispatch({ type: 'INCREMENT', payload: 5 })}>
          +5
        </button>
        <button onClick={() => dispatch({ type: 'INCREMENT', payload: 10 })}>
          +10
        </button>
      </section>
      <button onClick={() => dispatch({ type: 'RESET' })}>reset</button>
    </div>
  )
}

export default App
