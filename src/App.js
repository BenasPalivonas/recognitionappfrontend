import React from 'react';
import './App.css';
import Logo from './Logo/Logo.js'
import logo1 from './Logo/Logo1.png'
import logo2 from './Logo/logo2.png'
import logo3 from './Logo/logo3test.png'
import Navigation from './Navigation/Navigation'
import Particles from 'react-particles-js';
import FaceRecoPage from './Pages/FaceRecoPage'
import './FaceReco/FaceReco.css'
import SignIn from './Login/SignIn.js';
import Register from './Login/Register.js';
import Menu from './Pages/Menu.js';
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
      url: " ",
      boxParms: {},
      page: "signIn",
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
  // fetch('https://whispering-peak-11656.herokuapp.com/image'
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

  onClick = (event) => {
    this.setState({ url: event })
    console.log(event.length)
    console.log(typeof (event))
    console.log(event)
    if (event.length > 0) {
      fetch('http://localhost:3000/getapi', {
        method: 'post',
        headers: { 'Content-Type': "application/json" },
        body: JSON.stringify({
          url: event
        })
      })
        .then((response) => response.json()).then((response) => {
          this.assingBox(this.convertResponseToBox(response, response.outputs[0].data.regions.length));
        })
        .catch((err) => {
          console.log(err);
        })

    }
    //food
    // fetch('http://localhost:3000/getfoodapi', {
    //   method: 'post',
    //   headers: { 'Content-Type': "application/json" },
    //   body: JSON.stringify({
    //     url: event
    //   })
    // })
    //   .then((response) => response.json()).then((response) => {
    //     console.log(response)
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   })
  }

  onRouteChange = (route) => {
    this.setState({ page: route });
  }
  signOut = (route) => {
    this.setState({ url: "" });
    this.setState({ input: "" });
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
              <div className="menu">
                <Menu onRouteChange={this.onRouteChange} />
              </div>
          // <FaceRecoPage onClick={this.onClick} url={this.state.url} boxParms={this.state.boxParms} count={
          //   this.count} />
        }
      </div>


    );
  }
}


export default App;
