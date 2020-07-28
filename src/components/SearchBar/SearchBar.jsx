import React from 'react';
import { Link } from 'react-router-dom';
import './SearchBar.css';
import Form from 'react-bootstrap/Form'

const SearchBar = (props) => {
  let search = props.user ?
    <Form>
      <h4 style={{ margin: "50px" }}> Tweak the parameters of your search to get a tailored meal, just for you! </h4>
      <Form.Group controlId="searchBar-name">
        <Form.Label>Name</Form.Label>
        <Form.Control type="name" placeholder="Example: Chicken Alfredo" />
      </Form.Group>
      <Form.Group controlId="searchBar-carbs">
        <Form.Label>Carbs</Form.Label>
        <Form.Control type="number" min="0" max="100" placeholder="Maximum amount of carbs in your meal (0g-100g)" />
      </Form.Group>
      <Form.Group controlId="searchBar-fat">
        <Form.Label>Fat</Form.Label>
        <Form.Control type="number" min="0" max="100" placeholder="Maximum amount of fat in your meal (0g-100g)" />
      </Form.Group>
      <Form.Group controlId="searchBar-protein">
        <Form.Label>Protein</Form.Label>
        <Form.Control type="number" min="0" max="100" placeholder="Maximum amount of protein in your meal (0g-100g)" />
      </Form.Group>
      <button className="btn btn-default">SEARCH </button>
    </Form>
    :
    <h4> Log-In and start tailoring your meals to your macro needs with Macro Fatso!</h4>

  return (
    <div className="SearchBar">
      {search}
    </div>
  )


}

export default SearchBar;