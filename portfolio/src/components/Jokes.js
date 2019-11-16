import React,{Component} from 'react';

const Joke=({joke:{id,setup,punchline}})=>
(<p style={{margin:20}} key={id}>{setup}<em>{punchline}</em></p>)

class Jokes extends Component
{
    state={ joke:{},jokes:[]};
    componentDidMount()
    {
        fetch('https://official-joke-api.appspot.com/random_joke')
        .then(result=>{return result.json()})
        .then(json=>this.setState({joke:json}))
        .catch(error=>alert(error.message));
    }

   fetchjokes=()=>
   {
    fetch('https://official-joke-api.appspot.com/jokes/ten')
    .then(response=> response.json())
    .then(json=>this.setState({jokes:json}))
    .catch(error=>alert(error.message));

   }

  render()
  {
      const {setup,punchline,}=this.state.joke;
      return(<div>
          <h2>Highlighted Joke !</h2>
  <Joke joke={this.state.joke}/>
  <hr/>
  <h3>Want ten more jokes?</h3>
  <button onClick={this.fetchjokes}>Click Me</button>
  {
      this.state.jokes.map(joke=>(<Joke key={joke.id} joke={joke}/>))
  }
      </div>)
  }

}
export default Jokes;