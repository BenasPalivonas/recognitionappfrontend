import React from 'react';
import './App.css';
import Logo from './Logo/Logo.js'
import logo1 from './Logo/Logo1.png'
import logo2 from './Logo/logo2.png'
import logo3 from './Logo/logo3test.png'
import Navigation from './Navigation/Navigation'
import Particles from 'react-particles-js';
import Form from './Form/Form.js'
import FaceReco from './FaceReco/FaceReco.js'
import Box from './FaceReco/Box.js'
import './FaceReco/FaceReco.css'
import SignIn from './Login/SignIn.js';
import Register from './Login/Register.js';
const particlesParams =
{
  particles: {
    number: {
      value: 350,
      desnity: {
        enable: true,
        value_area: 200,
        page: ""
      }
    }
  },
  retina_detect: true,
  line_linked: {
    enable: true,
    distance: 500
  },
  move: {
    direction: "none",
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: "repulse"
      }
    },
    modes: {
      repulse: {
        distance: 100,
        duration: 0.4
      }
    }
  }

}

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      input: " ",
      url: " ",
      boxParms: {},
      page: "signIn",
      user: {}
    }
  }
  loadUser = (loggedUser) => {
    this.setState({ user: loggedUser });
  }
  // componentDidMount() {
  //   fetch('http://localhost:3000')
  //     .then(response => response.json())
  //     .then(data => console.log(data));
  // }

  assingBox(box) {
    this.setState({ boxParms: box });
  }
  count = () => {
    fetch('https://whispering-peak-11656.herokuapp.com/image', {
      method: 'put',
      headers: { 'Content-Type': "application/json" },
      body: JSON.stringify({
        id: this.state.user.id
      })
    }).then(response => response.json()).then(data => {
      this.setState(Object.assign(this.state.user, { entries: data }))
    }).catch(console.log)
  }
  convertResponseToBox = (response, lenght) => {
    const pictureParams = document.getElementById('facePic')
    const width = Number(pictureParams.width);
    const height = Number(pictureParams.height);
    let obj = [];
    for (let index = 0; index < lenght; index++) {
      const box = response.outputs[0].data.regions[index].region_info.bounding_box;
      obj.push({ id: index, top_row: Number(box.top_row) * height, left_col: Number(box.left_col) * width, bottom_row: height - (height * Number(box.bottom_row)), right_col: width - (width * Number(box.right_col)) });
    }
    return (obj)

  }
  onInput = (event) => {
    this.setState({ input: event.target.value })
  }
  onClick = (event) => {

    this.setState({ url: this.state.input })
    fetch('https://whispering-peak-11656.herokuapp.com/getapi', {
      method: 'post',
      headers: { 'Content-Type': "application/json" },
      body: JSON.stringify({
        url: this.state.input
      })
    })
      .then((response) => response.json()).then((response) => {
        this.assingBox(this.convertResponseToBox(response, response.outputs[0].data.regions.length));
      })
      .catch((err) => {
        console.log(err);
      })
  }

  onRouteChange = (route) => {
    this.setState({ page: route });
  }
  signOut = (route) => {
    this.setState({ url: "" });
    this.setState({ input: "" });
    this.setState({ user: {} });
    this.onRouteChange(route);
  }
  render() {
    return (
      <div >
        <Navigation className="nav" signOut={this.signOut} current
          Page={this.state.page} />
        <Particles className="particles" params={particlesParams} />
        <div className="inline">
          <Logo picture={logo1} marginTop='2rem' link="https://github.com/BenasPalivonas" />
          <Logo picture={logo2} marginTop='1.2rem' link="https://www.instagram.com/benusiaog/" />
          <Logo picture={logo3} marginRight='2rem' link="https://www.facebook.com/benas.palivonas" />
        </div>
        {
          this.state.page === "signIn" ?
            <div className="signIn">
              <SignIn className="signIn" loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
            </div>
            : this.state.page === "register" ?
              <div className="signIn">
                <Register onRouteChange={this.onRouteChange} />
              </div>
              :
              <div>

                <div className='result' >
                  <div className='parentDiv'>
                    <FaceReco link={this.state.url} />
                    <Box box={this.state.boxParms} />
                  </div>
                </div>
                {/* <div className="inline">
                  <Logo picture={logo1} marginTop='2rem' link="https://github.com/BenasPalivonas" />
                  <Logo picture={logo2} marginTop='1.2rem' link="https://www.instagram.com/benusiaog/" />
                  <Logo picture={logo3} marginRight='2rem' link="https://www.facebook.com/benas.palivonas" />
                </div> */}

                <div className="form">
                  <Form onClick={this.onClick} onInput={this.onInput} count={this.count} user={this.state.user} />
                </div>
              </div>
        }
      </div>


    );
  }
}


export default App;
