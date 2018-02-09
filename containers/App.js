import React, {Component} from 'react';
import InputPreview from "../components/InputPreview";
import {connect} from "react-redux";
import {setMessage, getMessage} from "../actions/message";
import {Link} from "react-router-dom";
class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            data:['Coffee','Tea','Milk','Adsf'],
            text:''            
        }
        console.log("****",this.props);
    }
    onClickBtn(){
        const {message} = this.props.messageReducer;
        
       let arr = this.props.messageReducer.data;
       arr.push(message);
       //this.setState({data:arr,text:''});
       this.props.dispatch(getMessage(arr));       
    }
    removeItem(index){  
        let arr = this.props.messageReducer.data;
        arr.splice(index,1);
        // this.setState({data:arr});
        this.props.dispatch(getMessage(arr));
    }
    _onChange = (value) => {
        this.props.dispatch(setMessage(value));
      }
    render () {
        const {message} = this.props.messageReducer;
        return (
            <div>
                <p style={{fontSize:20}}>TO-DO APP</p>
            <InputPreview
            value={message}
            placeholder="Write here..." 
            onChange={this._onChange}/>
            <button type="button"
                    onClick={()=>this.onClickBtn()}>
                    Click Me!
            </button>
            <div>
                     <ol>
                        {this.props.messageReducer.data.map((item,index)=>
                        <div><li>{item}</li>
                        <button type="button"
                            onClick={()=>this.removeItem(index)}>
                            REMOVE
                        </button></div>)
                        }
                    </ol>
                </div>
            <Link to="/about">
            <button>Go to About</button>
            </Link>
            </div>           
        )
    }
}
export default connect(state => state)(App);