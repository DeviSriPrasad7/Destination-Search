// Write your code here
import {Component} from 'react'
import './index.css'

class DestinationItem extends Component {
  render() {
    const {placeDetails} = this.props
    const {imgUrl, name} = placeDetails

    return (
      <li className="list-item">
        <img src={imgUrl} alt={name} className="img" />
        <p className="heading">{name}</p>
      </li>
    )
  }
}

export default DestinationItem
