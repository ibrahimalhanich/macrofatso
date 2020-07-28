import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './SearchBar.css';
import Form from 'react-bootstrap/Form'

const SearchBar = (props) => {
  const [formData, setFormData] = useState({
    foodName: '',
    foodCarbs: '',
    foodFat: '',
    foodProtein: ''
  });

  const handleChange = (e) => {
    setFormData({
      [e.target.name]: e.target.value
    });
    console.log(formData[e.target.name]);
  };


  const submitForm = (e) => {
    console.log(e);
  };

  let search = props.user ?
    // <div>
    //   <h4> Tweak the parameters of your search to get a tailored meal, just for you!</h4>
    //   <form className="form-horizontal" onSubmit={submitForm} >
    //     <div className="form-group">
    //       <div className="col-sm-12">
    //         <input type="text" className="form-control" placeholder="Example: Chicken Alfredo" value={f}
    //       </div>
    //     </div>
    //   </form>
    // </div>
    <Form>
      <h4 style={{ margin: "50px" }}> Tweak the parameters of your search to get a tailored meal, just for you! </h4>
      <Form.Group controlId="searchBar-name">
        <Form.Label>Name</Form.Label>
        <Form.Control name="foodName" type="name" placeholder="Example: Chicken Alfredo" value={formData['foodName']} onChange={handleChange} />
      </Form.Group>
      <Form.Group controlId="searchBar-carbs">
        <Form.Label>Carbs</Form.Label>
        <Form.Control name="foodCarbs" type="number" min="0" max="100" placeholder="Maximum amount of carbs in your meal (0g-100g)" value={formData['foodCarbs']} onChange={handleChange} />
      </Form.Group>
      <Form.Group controlId="searchBar-fat">
        <Form.Label>Fat</Form.Label>
        <Form.Control name="foodFat" type="number" min="0" max="100" placeholder="Maximum amount of fat in your meal (0g-100g)" value={formData['foodFat']} onChange={handleChange} />
      </Form.Group>
      <Form.Group controlId="searchBar-protein">
        <Form.Label>Protein</Form.Label>
        <Form.Control name="foodProtein" type="number" min="0" max="100" placeholder="Maximum amount of protein in your meal (0g-100g)" value={formData['foodProtein']} onChange={handleChange} />
      </Form.Group>
      <button className="btn btn-default" onClick={submitForm}>SEARCH </button>
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