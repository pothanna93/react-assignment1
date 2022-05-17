import {Component} from 'react'
import './index.css'

class BrowserHistory extends Component {
  render() {
    const {userDetails, onDeleteItem} = this.props
    const {timeAccessed, logoUrl, title, domainUrl, id} = userDetails

    const onDelete = () => {
      onDeleteItem(id)
    }

    return (
      <li className="lists">
        <p className="time">{timeAccessed}</p>
        <div className="item-container">
          <div className="text-logo-container">
            <img className="image-logos" src={logoUrl} alt="domain logo" />
            <div className="text-container">
              <p>{title}</p>
              <p>{domainUrl}</p>
            </div>
          </div>
          <button
            type="button"
            className="deleteButton"
            testid="delete"
            onClick={onDelete}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              alt="delete"
              className="delete-logo"
            />
          </button>
        </div>
      </li>
    )
  }
}

export default BrowserHistory
