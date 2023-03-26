import {Component} from 'react'
import {v4} from 'uuid'

import PasswordItem from '../PasswordItem'
import './index.css'

class Password extends Component {
  state = {
    website: '',
    username: '',
    password: '',
    userpasswordList: [],
  }

  onAddUsernamepassword = event => {
    event.preventDefault()
    const {website, username, password} = this.state
    const newPassword = {
      id: v4(),
      website,
      username,
      password,
    }

    this.setState(prevstate => ({
      userpasswordList: [...prevstate.userpasswordList, newPassword],
      website: '',
      username: '',
      password: '',
    }))
  }

  onChangewebsite = event => {
    this.setState({website: event.target.value})
  }

  onChangeusername = event => {
    this.setState({username: event.target.value})
  }

  onChangepassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {userpasswordList, website, username, password} = this.state
    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt=" app logo"
          className="app-logo"
        />
        <div className="first-container">
          <form className="new-password" onSubmit={this.onAddUsernamepassword}>
            <h1 className="heading">Add New Password</h1>

            <div className="website-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
                className="website"
              />
              <hr className="line" />
              <input
                type="text"
                placeholder="Enter Website"
                className="website-input"
                onChange={this.onChangewebsite}
                value={website}
              />
            </div>
            <div className="website-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png "
                alt="username"
                className="website"
              />
              <hr className="line" />
              <input
                type="text"
                placeholder="Enter Username"
                className="website-input"
                onChange={this.onChangeusername}
                value={username}
              />
            </div>
            <div className="website-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
                className="website"
              />
              <hr className="line" />
              <input
                type="password"
                placeholder="Enter Password"
                className="website-input"
                onChange={this.onChangepassword}
                value={password}
              />
            </div>
            <button type="submit" className="button">
              Add
            </button>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
            className="image"
          />
        </div>
        <div className="second-container">
          <div className="navbar">
            <div>
              <h1 className="heading">Your Passwords</h1>
              <p className="shownumber">0</p>
            </div>
            <div className="website-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png "
                alt="search"
                className="website"
              />
              <hr className="line" />
              <input
                type="search"
                placeholder="Search"
                className="website-input"
              />
            </div>
          </div>
          <hr className="lines" />
          <div className="showPassword">
            <input className="showbutton" type="checkbox" />
            <label htmlFor="title" className="heading">
              Show passwords
            </label>
          </div>
          <ul className="password-list">
            {userpasswordList.map(each => (
              <PasswordItem details={each} key={each.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Password
