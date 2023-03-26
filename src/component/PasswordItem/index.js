import './index.css'

const PasswordItem = props => {
  const {details} = props
  const {username, password} = details

  return (
    <li className="list">
      <div className="newpassword">
        <h1>{username}</h1>
        <p>{password}</p>
        <button type="button" className="delete-button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
            className="delete-image"
          />
        </button>
      </div>
    </li>
  )
}

export default PasswordItem
