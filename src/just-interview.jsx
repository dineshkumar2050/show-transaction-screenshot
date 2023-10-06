import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom'

const findSecondLargest = (arr) => {
  let largest = null
  let secondLargest = null
  for (const value of arr) {
    if (value > secondLargest && value > largest) {
      largest = value
    } else if (value > secondLargest && value < largest) {
      secondLargest = value
    }
  }
  return secondLargest
}

function App() {
  const [value, setValue] = useState('')
  const [error, setError] = useState('')
  const [secvalue, setSecValue] = useState('')
  const handleChange = (e) => {
    e.preventDefault()
    const {value} = e.target
    if (value && value.length > 5) setError('Value cannot exceed 5 letters')
    else setError('')
    setValue(value)
  }
  useEffect(() => {
    setSecValue(findSecondLargest([21, 4, 17, 10, 19]))
  }, [])
  return (
    <div>
      <input value={value} type="text" onChange={handleChange} />
      {error && <p style={{color: 'red'}}>{error}</p>}
      <div>{secvalue}</div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
