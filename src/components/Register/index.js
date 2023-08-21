import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import './index.css'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

const Register = () => {
  const [name, setName] = useState('')
  const [showNameError, setShowNameError] = useState(false)
  const [selectedTopic, setSelectedTopic] = useState('')

  const history = useHistory()

  const handleNameChange = event => {
    setName(event.target.value)
  }

  const handleTopicChange = event => {
    setSelectedTopic(event.target.value)
  }

  const handleFormSubmit = event => {
    event.preventDefault()

    if (name.trim() === '') {
      setShowNameError(true)
    } else {
      // Handle form submission logic here
      history.replace('/')

      history.push(
        `/home?name=${encodeURIComponent(name)}&topic=${encodeURIComponent(
          selectedTopic,
        )}`,
      )
    }
  }

  return (
    <div>
      <div className="bg">
        <img
          src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
          alt="website logo"
        />
      </div>
      <div className="rbg">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
            alt="website register"
            className="imgbg"
          />
        </div>
        <div className="bg1">
          <h1>Let Us Join</h1>
          <form onSubmit={handleFormSubmit}>
            <label htmlFor="name">NAME</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
            />

            <label htmlFor="topic">TOPICS</label>
            <select
              id="topic"
              onChange={handleTopicChange}
              value={selectedTopic}
            >
              {topicsList.map(topic => (
                <option key={topic.id} value={topic.id}>
                  {topic.displayText}
                </option>
              ))}
            </select>
            <button type="submit">Register now</button>
            {/* Display error message */}
            {showNameError && <p>Please enter your name</p>}
          </form>
        </div>{' '}
      </div>
    </div>
  )
}
export default Register
