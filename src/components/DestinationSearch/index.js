// Write your code here
import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {
    isSearch: '',
    finalResults: '',
  }

  onChangeValue = event => {
    this.setState({isSearch: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    console.log(destinationsList)
    //
    const {isSearch, finalResults} = this.state
    console.log(isSearch)
    //
    const searchResults = destinationsList.filter(eachUser =>
      eachUser.name.toLowerCase().includes(isSearch.toLowerCase()),
    )
    this.state.finalResults = searchResults
    console.log(finalResults)
    //
    return (
      <div className="main-container">
        <h1>Destination Search</h1>
        <div className="unit-container">
          <input
            type="search"
            onChange={this.onChangeValue}
            value={isSearch}
            className="input-ele"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="main-img"
          />
        </div>
        <ul className="unorder-list">
          {searchResults.map(eachUser => (
            <DestinationItem placeDetails={eachUser} key={eachUser.id} />
          ))}
        </ul>
      </div>
    )
  }
}
export default DestinationSearch
