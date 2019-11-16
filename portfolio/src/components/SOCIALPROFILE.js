import React  from 'react';
import SocialProfiledata from '../data/socialprofiles';

const PROFILE =(props)=>{
const {id,link,image}=props.profileinfo;
return(
       
    <div style={{display:'inline-block', width:50 , margin:5 }}>
        <a href={link}>
    <img src={image} alt="profile" style={{ width:35,height:35,margin:10}}/>
    </a>   
    </div>       
    
)
}
const SOCIALPROFILE =()=> 
(
          <div>
              <h3>Connect with me!</h3>
              <hr />
              <div>
                  {SocialProfiledata.map(profiledta =>{
                      return(<PROFILE key={profiledta.id} profileinfo={profiledta}></PROFILE>)
                  })}
              </div>
          </div>
      )

export default SOCIALPROFILE;