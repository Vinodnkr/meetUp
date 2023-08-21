import React from 'react'

import {Link, useLocation} from 'react-router-dom'

import './index.css'

const Home = () => {
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const name = queryParams.get('name')
  const topic = queryParams.get('topic')

  return (
    <div>
      <div className="bg">
        <img
          src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
          alt="website logo"
        />
      </div>
      <div className="homeBg">
        {name ? <h1>Hello {name}</h1> : <h1>Welcome to Meetup</h1>}
        {topic ? (
          <p>Welcome to {topic}</p>
        ) : (
          <p>Please register for the topic</p>
        )}
        <Link to="/register">
          <button>Register</button>
        </Link>
        <img
          src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
          alt="meetup"
        />
      </div>
    </div>
  )
}
export default Home
