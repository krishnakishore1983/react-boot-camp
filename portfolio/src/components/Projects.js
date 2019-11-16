import React , {Component} from 'react';
import PROJECTS from '../data/projects';

//class Project extends Component
const Project=props=>
{
    const { title,image,description,link}=props.project;
return (
    //render(){

    //const { title,image,description,link}=props.project;
   
    <div style={{display:'inline-block', width:300 , margin:20 }}>
    <h3>{title}</h3>
    <img src={image} alt="profile" style={{ width:200,height:120}}/>
    <p>{description}</p>
    <a href={link} >{link}</a>
    </div>    
   // }
)
}
//class PROJECTS1 extends Component
const PROJECTS1=()=>(
//{
   // render ()
   // {
    //  return (
          <div>            
              <h3>Highlighted Projects</h3>
              <div>
                  {PROJECTS.map(PROJECT =>(
                      <Project key={PROJECT.id} project={PROJECT}></Project>
                  ))}
              </div>
          </div>
      )
//)

   // }
//}
export default PROJECTS1;