import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './SearchBar.css';
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import { getData } from '../../services/get-data';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foodName: '',
      foodCarbs: '',
      foodFat: '',
      foodProtein: '',
      foodCalories: '',
      returnedData: {},
      viewClicked: false,
      indexOfClicked: 0
    };
    this.viewClicked = this.viewClicked.bind(this);
    this.resetView = this.resetView.bind(this);
    this.goBackToForm = this.goBackToForm.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
    // console.log(this.state);
  }


  submitForm = async (e) => {
    e.preventDefault();
    try {
      this.setState({
        returnedData: await getData(
          process.env.REACT_APP_API_KEY,
          this.state.foodName,
          this.state.foodCalories,
          this.state.foodFat,
          this.state.foodCarbs,
          this.state.foodProtein)
      });
    } catch (err) {
      console.log(err);
    }
  }


  viewClicked(e) {
    try {
      e.preventDefault();
      this.setState({
        viewClicked: true,
        indexOfClicked: e.target.id
      });
      console.log(e.target.id);
    } catch (err) {
      console.log(err);
    }
  }


  createCards() {
    let cards = this.state.returnedData.results.map((result, index) =>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={result.image} />
        <Card.Body>
          <Card.Title>{result.title}</Card.Title>
          <button id={index} className="btn btn-default" onClick={this.viewClicked}>VIEW</button>
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
        <Form.Group controlId="searchBar-calories">
          <Form.Label>Calories</Form.Label>
          <Form.Control name="foodCalories" type="number" min="5" max="800" placeholder="Maximum calories in your meal (5cal-800cal)" value={this.state.foodCalories} onChange={this.handleChange} />
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


  resetView() {
    this.setState({
      viewClicked: false,
      indexOfClicked: 0
    });
  }

  goBackToForm() {
    this.setState({
      returnedData: {}
    })
  }

  showMeal() {
    return (
      <>
        <img id="images" src={this.state.returnedData.results[this.state.indexOfClicked].image} class="img-fluid" alt="Responsive image" />
        <br></br>
        <br></br>
        <p>CALORIES:  {this.state.returnedData.results[this.state.indexOfClicked].nutrition[0].amount} {this.state.returnedData.results[this.state.indexOfClicked].nutrition[0].unit}</p>
        <p>PROTEIN:  {this.state.returnedData.results[this.state.indexOfClicked].nutrition[1].amount} {this.state.returnedData.results[this.state.indexOfClicked].nutrition[1].unit}</p>
        <p>FAT:  {this.state.returnedData.results[this.state.indexOfClicked].nutrition[2].amount} {this.state.returnedData.results[this.state.indexOfClicked].nutrition[2].unit}</p>
        <p>CARBOHYDRATES:  {this.state.returnedData.results[this.state.indexOfClicked].nutrition[3].amount} {this.state.returnedData.results[this.state.indexOfClicked].nutrition[3].unit}</p>
        <a href={this.state.returnedData.results[this.state.indexOfClicked].sourceUrl} class="btn btn-primary" target="_blank">View Recipe</a>
        <button onClick={this.resetView} class="btn btn-danger">Go Back</button>
      </>
    );
  }
  cardOrNot() {
    if (this.state.viewClicked === true) {
      return (
        <>{this.showMeal()}</>
      )
    } else {
      return (
        <>
          <CardDeck>{this.createCards()}</CardDeck>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <button onClick={this.goBackToForm} class="btn btn-danger">New Search</button>
        </>
      )
    }
  }
  handleMyRender() {
    return (
      <div>
        {this.state.returnedData.results ? (
          <>
            {this.cardOrNot()}
          </>
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