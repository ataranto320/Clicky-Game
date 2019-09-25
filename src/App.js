import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import characters from './components/characters.json';
import images from './components/characters.json';
import CharacterCard from "./components/CharacterCard"
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Navbar from "./components/Navbar";

// let characters = [];
// let score = 0;
// let highscore = 0;
// let message = "You beat your highscore.";
// let clickCard = [];
// const winMessage = "You guessed correct.";
// let loseMessage = "You guessed wrong. Game Over.";

class App extends Component {
  state = {
    characters,
    images,
    score: 0,
    highscore: 0,
    // winMessage: "You guessed correct.",
    // loseMessage: "You guessed wrong. Game Over.",
    clickedCards: [],
    // message: "You beat your highscore."
    message: " "
  };

  // removeCharacter = id => {
  //   // Filter this.state.friends for friends with an id not equal to the id being removed
  //   const characters = this.state.characters.filter(characters => characters.id !== id);
  //   // Set this.state.friends equal to the new friends array
  //   this.setState({ charatcers });
  // };

  shuffleCards = array => {
    for (let i = array.length - 1; i > 0; i--) {
      let m = Math.floor(Math.random() * (i + 1));
      [array[i], array[m]] = [array[m], array[i]];
    }
    return array;
  }

  clickCard = id => {
    const hasBeenClicked = this.state.clickedCards.includes(id);
    if (hasBeenClicked) { //lose scenerio
      this.setState({ score: 0 });
      this.setState({ message: "You guessed wrong. Start Over." });
      this.setState({ clickedCards: [] });
      if (this.state.score > this.state.highscore) {
        this.setState({ highscore: this.state.score })
        this.setState({message : "You beat your highscore."});
      }
      // this.setState({images})
      // .push
    } else {
      // add to clickedCards the id of the clicked card
      this.state.clickedCards.push(id);
      this.setState({ message: "You guessed correct." });
      this.setState({ score: this.state.score + 1 });
      // this.setState({clickedCards: clickedImage})  // win scenerio
      // this.setState({characters: clickedImage})
      } 
    this.shuffleCards(characters);
    // if (this.state.score > this.state.highscore) {
    //   this.setState({ message: "You beat your highscore." });
  };


  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div className="App">
        <Navbar
          score={this.state.score}
          highscore={this.state.highscore}
          // winMessage = {this.state.winMessage} 
          // loseMessage = {this.state.loseMessage}
          message={this.state.message}
        >
        </Navbar>
        <Wrapper>
          <Title>Characters List</Title>
          {this.state.characters.map(characters => (
            <CharacterCard
              handleClick={this.clickCard}
              images={characters.images}
              id={characters.id}
              name={characters.name}
            // image={characters.image}
            // clickCard={this.clickCard}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}
export default App;





  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>

      // get names from characters
      // return <characters />;

    //   <Wrapper>
    //   <Title>Character List</Title>
    //   <CharacterCard
    //     name={characters[0].name}
    //     image={characters[0].image}
    //   />
    //   <CharacterCard
    //     name={characters[1].name}
    //     image={characters[1].image}
    //   />
    //   <CharacterCard
    //     name={characters[2].name}
    //     image={characters[2].image}
    //   />
    //   <CharacterCard
    //     name={characters[3].name}
    //     image={characters[3].image}
    //   />
    //   <CharacterCard
    //     name={characters[4].name}
    //     image={characters[4].image}
    //   />
    //   <CharacterCard
    //     name={characters[5].name}
    //     image={characters[5].image}
    //   />
    //   <CharacterCard
    //     name={characters[6].name}
    //     image={characters[6].image}
    //   />
    //   <CharacterCard
    //     name={characters[7].name}
    //     image={characters[7].image}
    //   />
    //   <CharacterCard
    //     name={characters[8].name}
    //     image={characters[8].image}
    //   />
    //   <CharacterCard
    //     name={characters[9].name}
    //     image={characters[9].image}
    //   />
    //   <CharacterCard
    //     name={characters[10].name}
    //     image={characters[10].image}
    //   />
    //   <CharacterCard
    //     name={characters[11].name}
    //     image={characters[11].image}
    //   />
    // </Wrapper>

    // {/* render() {
//     return (
//       <form>
//         <button onClick={this.state.shuffle>img</button>
//         <button onClick={this.state.shuffle>img</button>
//         <button onClick={this.state.shuffle>img</button>
//         <button onClick={this.state.shuffle>img</button>
//         <button onClick={this.state.shuffle>img</button>
//         <button onClick={this.state.shuffle>img</button>
//         <button onClick={this.state.shuffle>img</button>
//         <button onClick={this.state.shuffle>img</button>
//         <button onClick={this.state.shuffle>img</button>
//         <button onClick={this.state.shuffle>img</button>
//         <button onClick={this.state.shuffle>img</button>
//         <button onClick={this.state.shuffle>img</button>
//       </form>
//     );
//   } */}

//     </div>
//   );
// }



// class App extends Component {

  // state of game
  // state = {
  //   characters: characters,
  //   userInput: [],
  //   score: 0,
  //   topScore: 0
  // }

  // render game

  // counting score function
  // score = () => {

  // }

  // picked picture function
  // pickedPic = (id) => {
  //   .onClick.this.state
  //   const shufflePics = this.newArray();
  // }
  // pickedPic = (id) => {
  //   function clickedPic(pick) {
  //     pick.preventDefault();
  //     console.log("img was clicked.")
  //   }
  //   return onClick={clickedPic}
  // };

  // pickedCharacter = () => {
  //   this.state.characters = state.onClick(id) {
  //     return newArray();
  //   }
  // }
  // InputChange = event => {
  //   // const characters = event.target.value;
  //   let characters = event.target.state;
  //   this.setState({
  //     [name]: value
  //   });
  // };


  // shuffle function
  // array of characters in character.json
  // shuffle = () => {
  //   this.newState(this.state.characters = this.newArray(this.state.characters))
  // }

  // restart current game after incorrect guess


// }