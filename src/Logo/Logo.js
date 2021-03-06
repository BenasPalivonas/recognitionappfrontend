import React from 'react'
import Tilt from 'react-tilt'
import './Logo.css'
class Logo extends React.Component {
    render() {
        return (
            <div className="cbl" style={{ justifyContent: 'center', alignContent: 'center', marginLeft: '2rem', marginTop: '1rem', marginBottom: '1rem', display: 'inline-block', verticalAlign: 'top', marginRight: this.props.marginRight }}>
                <Tilt className="Tilt shadow-2 pointer" options={{ max: 70 }}>
                    <div className="Tilt-inner">
                        <a href={this.props.link}><img src={this.props.picture} alt="logo" style={{ marginTop: this.props.marginTop, alignSelf: 'center' }} />
                        </a>
                    </div>
                </Tilt>

            </div >
        );
    }
}
export default Logo;