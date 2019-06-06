import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      score: 0,
      images: [
        '1.jpg',
        '2.jpg',
        '3.jpg',
        '4.jpg',
        '5.jpg',
        '6.jpg',
        '7.jpg',
        '8.jpg',
        '9.jpg',
        '10.jpg',
        '11.jpg',
        '12.jpg',
      ],
      clicked: [],
      topScore: 0
      
    }

  }

  //jack younger showed me this function, he found it at Lodash
  shuffleImages = (array) => {
    const length = array.length;
    if (!length || !Array.isArray(array)) return [];

    let index = -1;
    const lastIndex = length - 1;
    const result = array.slice();

    while (++index < length) {
      const rand = index + Math.floor(Math.random() * (lastIndex - index + 1));
      const value = result[rand];
      result[rand] = result[index];
      result[index] = value;
    }

    return result
  }


  handleClick = e => {
    //make sure image is not in "clicked" array
    const id = e.target.id;
    if (this.state.clicked.includes(id)) {
      alert('Game Over. Your score is: '+ this.state.score)
      this.setState({
        score: 0,
        clicked: [],
      })
    } else {
      const shuffled = this.shuffleImages(this.state.images);
      const score = this.state.score +1
      let topScore = this.state.topScore
      if (score > this.state.topScore) {
        topScore = score
      
      }
      
      this.setState({
        topScore: topScore,
        images: shuffled,
        score: score,
        clicked: [...this.state.clicked, id],
        
         
      
      })
    }
    //if image has been clicked, alert game over, reset score,
    //if not in "clicked" array, add 1 to score, shuffle images, move image into "clicked array", update top score
  }
  
  
  
  
  
  render() {
    var images = this.state.images.map(image => {
      return (
        <img
          id={image} 
          className="myImage" 
          src={"/images/" + image} 
          onClick={this.handleClick}
        />
      )
    })

    return (
      <div className="App">
        <header className="App-header">

          <h2>Score: {this.state.score}</h2>
          <h2>Top Score: {this.state.topScore}</h2>
        
        </header>
        <div className="container">
          {images}
        </div>
      </div>
    );
  }

}

export default App;
