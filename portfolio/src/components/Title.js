import React,{Component} from 'react';
const Titles=["A software Engineer",
"Music Lover",
"Developer",
"Sports Lover",
"Dancer"];
class Title extends Component{
    state={titleindex:0, fadeIn:true}
    componentDidMount(){
        console.log('Title Component has mounted');
        this.timeout=setTimeout(()=>this.setState({ fadeIn: false}),1000)
        this.animatedtile();
    }
    componentWillUnmount(){
        console.log('TItle Component Will unmount');
        clearInterval(this.titlesinverval);
        clearTimeout(this.timeout);
        console.log(this.titlesinverval)
    }
    animatedtile=()=>{
        this.titlesinverval=setInterval(()=>{
            const titleindex=(this.state.titleindex+1)%Titles.length;
            this.setState({titleindex,fadeIn:true});
               this.timeout= setTimeout(()=>this.setState({ fadeIn: false}),1000);
                
        },4000)
        
        console.log(this.titlesinverval)
    }
    render()
    {
        const {titleindex,fadeIn}=this.state;
        const title=Titles[titleindex];
        return (
        <p className={fadeIn ? 'title-fadein':'title-fadeout'}>I am {title}</p>
        );
    }

}
export default Title;