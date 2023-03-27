import './index.css'

const PasswordItem = props => {
  const {details, deletepassword} = props
  const {website, username, password, id} = details

  const onDelete = () => {
    deletepassword(id)
  }
  return (
    <li className="list">
      <div className="newpassword">
        <p>{website}</p>
        <p>{username}</p>

        <p>{password}</p>

        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
          alt="stars"
        />

        <button
          type="button"
          className="delete-button"
          data-testid="delete"
          onClick={onDelete}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
            className="delete-image"
          />
        </button>
      </div>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
          alt="no passwords"
          className="image"
        />
        <p>No Passwords</p>
      </div>
    </li>
  )
}

export default PasswordItem
