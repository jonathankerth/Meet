import React from 'react'
import './WelcomeScreen.css'

function WelcomeScreen(props) {
  return props.showWelcomeScreen ? (
    <div className="WelcomeScreen">
      <div className="content">
        <h1>Welcome to the Meet app</h1>
        <h4>
          Discover upcoming events for full-stack developers around the world
          built using google oAuth2.0, AWS Lambda, and the Google Calendar API.
        </h4>
        <button className="login-button" onClick={props.getAccessToken}>
          Sign in with Google
        </button>
      </div>
      <a
        href="https://github.com/jonathankerth/meet/blob/main/public/Meet%20Privacy%20Policy.html"
        rel="nofollow noopener"
        className="privacy-link"
      >
        Privacy Policy
      </a>
    </div>
  ) : null
}

export default WelcomeScreen
