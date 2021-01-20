import React from 'react'
import Tilt from 'react-tilt'
import '../Logo/Logo.css'
import './Pages.css'

class MenuCards extends React.Component {
    render() {
        return (

            <div className="cbl" style={{ justifyContent: 'center', alignContent: 'center', marginLeft: '2rem', marginTop: '1rem', marginBottom: '1rem', display: 'inline-block', verticalAlign: 'top', marginRight: this.props.marginRight }}>
                <Tilt className="Tilt br2 shadow-2 picture pointer" options={{ max: 70 }} style={{ height: '15rem', width: '15rem', margin: '0px' }}>

                    <div className="Tilt-inner">
                        <p className="menuText"><strong>{this.props.text}</strong></p>
                        <div onClick={() => this.props.onRouteChange("signIn")}><img src={this.props.picture} alt="logo" style={{ marginTop: '0.5rem', alignSelf: 'center' }} />
                        </div>
                    </div>
                </Tilt>

            </div >
        );
    }
}
export default MenuCards;