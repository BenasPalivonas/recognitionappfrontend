import React, { useState } from 'react';
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
import FoodRecoPage from './Pages/FoodRecoPage.js'
import ColorRecoPage from './Pages/ColorRecoPage.js'
import { useSelector, useDispatch } from 'react-redux'
import { setPage } from './actions';
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
const App = () => {
  const dispatch = useDispatch()
  const [urlFace, setUrlFace] = useState("")
  const [urlFood, setUrlFood] = useState("")
  const [urlColor, setUrlColor] = useState("")
  const [boxParms, setBoxParms] = useState({})
  const [foodText, setFoodText] = useState({})
  const [colorValues, setColorValues] = useState([])
  const page = useSelector(state => state.page)

  const convertResponseToBox = (response, lenght) => {
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
  const onClickFace = (event) => {
    setUrlFace(event)
    if (event.length > 0) {
      fetch('https://whispering-peak-11656.herokuapp.com/getapi', {
        method: 'post',
        headers: { 'Content-Type': "application/json" },
        body: JSON.stringify({
          url: event
        })
      })
        .then((response) => response.json()).then((response) => {
          setBoxParms(convertResponseToBox(response, response.outputs[0].data.regions.length));
        })
        .catch((err) => {
          console.log(err);
        })

    }
  }
  const onClickFood = (event) => {
    setUrlFood(event)
    fetch('https://whispering-peak-11656.herokuapp.com/getfoodapi', {
      method: 'post',
      headers: { 'Content-Type': "application/json" },
      body: JSON.stringify({
        url: event
      })
    })
      .then((response) => response.json()).then((response) => {
        let answer = []
        response.outputs[0].data.concepts.forEach(food => {
          if (food.value * 100 > 20) {
            let foodProcent = (food.value * 100).toString()[0] + (food.value * 100).toString()[1] + "%"
            answer.push(food.name + ": " + foodProcent);
          }
        })
        setFoodText(answer);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const onClickColor = (event) => {
    setUrlColor(event)
    fetch('https://whispering-peak-11656.herokuapp.com/getcolorapi', {
      method: 'post',
      headers: { 'Content-Type': "application/json" },
      body: JSON.stringify({
        url: event
      })
    })
      .then((response) => response.json()).then((response) => {
        setColorValues(response.outputs[0].data.colors)
      })
      .catch((err) => {
        console.log(err);
      })
  }
  const signOut = (route) => {
    setUrlFood("")
    setUrlColor("")
    setUrlFace("")
    setFoodText({})
    dispatch(setPage(route))
  }

  return (
    <div >
      <Navigation className="nav" signOut={signOut} />
      <Particles className="particles" params={particlesParams} />
      <div className="inline">
        <Logo picture={logo1} marginTop='2rem' link="https://github.com/BenasPalivonas" />
        <Logo picture={logo2} marginTop="1rem" link="https://www.instagram.com/benusiaog/" />
        <Logo picture={logo3} marginRight='2rem' link="https://www.facebook.com/benas.palivonas" />
      </div>
      {
        page === "signIn" ?
          <div className="signIn">
            <SignIn className="signIn" />
          </div>
          : page === "register" ?
            <div className="signIn">
              <Register />
            </div>
            : page === "menu" ?
              <div className="menu">
                <Menu />
              </div>
              : page === "faceReco" ?
                <div>
                  <FaceRecoPage onClickFace={onClickFace} url={urlFace} boxParms={boxParms} />
                </div>
                : page === "foodReco" ?
                  <div>
                    <FoodRecoPage onClickFood={onClickFood} foodText={foodText} url={urlFood} />
                  </div>
                  : page === "colorReco" ?
                    <div>
                      <ColorRecoPage onClickColor={onClickColor} url={urlColor} colorValues={colorValues} />
                    </div>
                    : <div>
                      {
                        setPage("signIn")
                      }
                    </div>
      }
    </div>
  );
}


export default App;
