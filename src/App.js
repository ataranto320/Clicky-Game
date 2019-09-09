import React from 'react';
import logo from './logo.svg';
import './App.css';
import characters from '.characters.json';
// import imgs from '../imgs';
import Wrapper from "./components/Wrapper";
import Title from "./componenets/Title";

class App extends Component {
  state = {
    characters
  };

  removeCharacter = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const characters = this.state.characters.filter(character => character.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ charatcers });

  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      // get names from characters
      return <characters />;

      <Wrapper>
      <Title>Character List</Title>
      <CharacterCard
        name={characters[0].name}
        image={characters[0].image}
      />
      <CharacterCard
        name={characters[1].name}
        image={characters[1].image}
      />
      <CharacterCard
        name={characters[2].name}
        image={characters[2].image}
      />
      <CharacterCard
        name={characters[3].name}
        image={characters[3].image}
      />
      <CharacterCard
        name={characters[4].name}
        image={characters[4].image}
      />
      <CharacterCard
        name={characters[5].name}
        image={characters[5].image}
      />
      <CharacterCard
        name={characters[6].name}
        image={characters[6].image}
      />
      <CharacterCard
        name={characters[7].name}
        image={characters[7].image}
      />
      <CharacterCard
        name={characters[8].name}
        image={characters[8].image}
      />
      <CharacterCard
        name={characters[9].name}
        image={characters[9].image}
      />
      <CharacterCard
        name={characters[10].name}
        image={characters[10].image}
      />
      <CharacterCard
        name={characters[11].name}
        image={characters[11].image}
      />
    </Wrapper>

    {/* render() {
    return (
      <form>
        <button onClick={this.state.shuffle>img</button>
        <button onClick={this.state.shuffle>img</button>
        <button onClick={this.state.shuffle>img</button>
        <button onClick={this.state.shuffle>img</button>
        <button onClick={this.state.shuffle>img</button>
        <button onClick={this.state.shuffle>img</button>
        <button onClick={this.state.shuffle>img</button>
        <button onClick={this.state.shuffle>img</button>
        <button onClick={this.state.shuffle>img</button>
        <button onClick={this.state.shuffle>img</button>
        <button onClick={this.state.shuffle>img</button>
        <button onClick={this.state.shuffle>img</button>
      </form>
    );
  } */}

    </div>
  );
}

export default App;

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