import React, { Component } from 'react';
import { render } from 'react-dom';
// import Hello from './Hello';
import './style.css';

function Kopet(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value} - thiskopet
    </button>
  );
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'React',
      value: '',
      items: ['a']
    };
        
  }
  componentDidMount() {
    this.setState({ 
      value: 'kovet'
    })
  }

  handleClick() {
    this.setState({
      value: 'mambu'
    });

    var values = ['one', 'two', 'three']
    var ts = this.state.items
    values.map((value, index) => {
      ts.push(value)
    })
    this.setState({items: ts})

    fetch('https://kctbh9vrtdwd.statuspage.io/api/v2/summary.json')
      .then(response => response.json())
      .then(
        data => this.setState({ value: data.page.id})
      )


  }

  render() {
    const elements = this.state.items;
    
    return (
      <div>
      <ul>
        {elements.map((value, index) => {
          return <li key={index}>{value}</li>
        })}
      </ul>
      <Kopet 
        value="thisBTN" 
        onClick={() => this.handleClick()}
      />
      
      <button
        className="square"
        onClick={() => this.setState({value: 'X'})}
      >
        {this.state.value}
      </button>
      <button onClick={() => this.handleClick()}>
        click me
      </button>
        <p>
          {this.props.name}
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
