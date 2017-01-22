import React from 'react';
import '../Recipient.css';

const LandingPage = React.createClass({
  getInitialState(){
    return{email:"", password:"", zip:"11368"}
  },
  change(key, e){
    this.setState({[key]: e.change.value})
  },
  render(){
    return (
      <div className="navbarParent">
        {/*nav bar */}
        <div className="navbarOne">
          <div className="logo">
            <img src="/logo.png"/>
          </div>
          <div className="navbarLogin">
            <form className="userLogin">
              <input type="text" onChange={this.change.bind(this,"email")} value={this.state.email}/>
              <input type="text" onChange={this.change.bind(this,"password")} value={this.state.password}/>
              <input type="submit" />
            </form>
          </div>
        </div>
        {/*nav bar ends*/}
        {/*Body*/}
        <div className="">
          <div>
            <button>
              give a box
            </button>
            <button>
              get a box
            </button>
          </div>
        </div>
        {/*end of body*/}
        {/*nutrition*/}
        <div>
          <div>
            <p>LEARN MORE ABOUT HOW TO BETTER YOUR NUTRITION</p>
            <div>
              <input type="number" placeholder="enter your zip code" value={this.state.zip} onChange={this.change.bind(this,"zip")}/>
              <button>
              search
              </button>
            </div>
          </div>
        </div>
        {/*end of nutrition*/}
      </div>
    )
  }
})

export default LandingPage;
