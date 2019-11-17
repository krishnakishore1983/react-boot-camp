import React,{Component} from 'react';
import '../App.css';
import PROJECTSCOMP from './Projects';
import SOCIALPROFILE from './SOCIALPROFILE';
import profileimage from '../assets/profile.png'
import Title from './Title';
// function App() {
 
//   return (
//     <div>
//       <ClassCompo />
//     </div>
    
//   );
// }
class App extends Component{

  state={ displaybio:false };
  // constructor(){
  //     super();
  //     this.state={displaybio:false}

  //     //console.log('component this' , this);

  //     this.moreinfo=this.moreinfo.bind(this);
  //this.moreinfo={...};
  // }
 
  moreinfo=()=>
  {
      this.setState({displaybio:!this.state.displaybio});
     // console.log(this);
  }
  render(){
      return(
          <div className="classcompo">
       
          <img src={profileimage} alt="profile" className="profile" />
      <h1>Hello</h1>
          <p>My name is Krishna Kishore</p>
         {this.state.displaybio? <Title />:null} 
          
          {
       this.state.displaybio ? (
          <div>
              <p> i live in bangalore</p>
              <p> i love dance and music and cricket my faviourite dish is chicken noodles</p>
              <div><a href="#" onClick={this.moreinfo}>Show less.....</a></div>
              </div>
              ): (<div><a href="#" onClick={this.moreinfo}>Show more ...</a></div>)
          }
          <hr />
          <PROJECTSCOMP />
          <hr/>
          <SOCIALPROFILE />
         
          </div>
      );
  }
}


export default App;



