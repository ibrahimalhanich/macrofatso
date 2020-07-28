import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './SearchBar.css';
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import { getData } from '../../services/get-data';

class SearchBar extends Component {
  state = {
    foodName: '',
    foodCarbs: '',
    foodFat: '',
    foodProtein: '',
    returnedData: {}
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(this.state);
  }


  submitForm = async (e) => {
    e.preventDefault();
    try {
      this.setState({
        returnedData: await getData(
          process.env.REACT_APP_API_KEY,
          this.state.foodName,
          this.state.foodFat,
          this.state.foodCarbs,
          this.state.foodProtein)
      });
    } catch (err) {
      console.log(err);
    }
  }

  createCards() {
    let cards = this.state.returnedData.results.map(result =>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={result.image} />
        <Card.Body>
          <Card.Title>{result.title}</Card.Title>
          <button className="btn btn-default">VIEW</button>
        </Card.Body>
      </Card>
    )
    return cards;
  }

  createForm() {
    return (
      <Form onSubmit={this.submitForm}>
        <h4 style={{ margin: "50px" }}> Tweak the parameters of your search to get a tailored meal, just for you! </h4>
        <Form.Group controlId="searchBar-name">
          <Form.Label>Name</Form.Label>
          <Form.Control name="foodName" type="name" placeholder="Example: Chicken Alfredo" value={this.state.foodName} onChange={this.handleChange} />
        </Form.Group>
        <Form.Group controlId="searchBar-carbs">
          <Form.Label>Carbs</Form.Label>
          <Form.Control name="foodCarbs" type="number" min="0" max="100" placeholder="Maximum amount of carbs in your meal (0g-100g)" value={this.state.foodCarbs} onChange={this.handleChange} />
        </Form.Group>
        <Form.Group controlId="searchBar-fat">
          <Form.Label>Fat</Form.Label>
          <Form.Control name="foodFat" type="number" min="0" max="100" placeholder="Maximum amount of fat in your meal (0g-100g)" value={this.state.foodFat} onChange={this.handleChange} />
        </Form.Group>
        <Form.Group controlId="searchBar-protein">
          <Form.Label>Protein</Form.Label>
          <Form.Control name="foodProtein" type="number" min="0" max="100" placeholder="Maximum amount of protein in your meal (0g-100g)" value={this.state.foodProtein} onChange={this.handleChange} />
        </Form.Group>
        <button className="btn btn-default" >SEARCH </button>
      </Form>
    );
  }

  handleMyRender() {
    return (
      <div>
        {this.state.returnedData.results ? (
          <CardDeck>
            {this.createCards()}
          </CardDeck>
        ) : (
            <div>{this.createForm()}</div>
          )
        }
      </div>
    );
  }

  render() {
    return (
      <div className="SearchBar">
        {this.props.user ? (
          <>{this.handleMyRender()}</>
        ) : (
            <h4> Log-In and start tailoring your meals to your macro needs with Macro Fatso!</h4>
          )}
      </div>
    );
  }


}

export default SearchBar;