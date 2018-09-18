import React from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';

import "./Autocomplete.css";
import {connect} from "react-redux";
import {fetchClubs} from "../../store/actions/clubs";

class LocationSearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { address: '' };
  }

  handleChange = address => {
    this.setState({ address });
  };

  handleSelect = address => {
    this.setState({address});
  };

  handleSubmit = e => {
    e.preventDefault();
    geocodeByAddress(this.state.address)
      .then(res => getLatLng(res[0]))
      .then(({lat, lng}) => this.props.fetchClubs(lat, lng));
    this.setState({address: ""})
  }

  render() {
    return (
      <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div className="mx-auto" style={{maxWidth: "30%"}}>
            <form onSubmit={this.handleSubmit} className="form-inline ">
              <div className="form-group">
                <input
                  {...getInputProps({
                    placeholder: 'Enter your location',
                    className: 'location-search-input form-control',
                  })}
                />
                </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary ml-1 form-control"> Search</button>
              </div>
            </form>
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    );
  }
};

export default connect(null, {fetchClubs})(LocationSearchInput);