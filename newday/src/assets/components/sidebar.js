import React from "react";
import '../css/sidebar/sidebar.css'
import  logo from'../img/ff.png'
import {Navbar, Nav, NavItem, Button, Glyphicon} from 'react-bootstrap';


class Sidebars extends React.Component {



    constructor(props) {
        super(props);
        this.state = {

            widgets: [
                this.widget1 =  { 'id':1, name: 'widget1', valeur:0  },
                this.widget2 =  { 'id':2, name: 'widget2', valeur:0  },
                this.widget3 =  { 'id':3, name: 'widget3', valeur:0  },
                this.widget4 =  { 'id':4, name: 'widget4', valeur:0  },
                this.widget5 =  { 'id':5, name: 'widget5', valeur:0  },
                this.widget6 =  { 'id':6, name: 'widget6', valeur:0  },
                this.widget7 =  { 'id':7, name: 'widget7', valeur:0  },
                this.widget8 =  { 'id':8, name: 'widget8', valeur:0  },
            ],
            count:0,

        };

    }

    handleClick2 = pro => () => {
        alert(pro.name)
        let new_value = this.state.count+1;

        this.setState({ count: new_value });
        if(pro.valeur ===0){
            pro.valeur = new_value
        }
        else alert(' this widget was token ')

    };



    render() {
        let widget1 =this.state.widgets.widget1
        let widget2 =this.state.widgets.widget2
        let widget3 =this.state.widgets.widget3
        let widget4 =this.state.widgets.widget4
        let widget5 =this.state.widgets.widget5
        let widget6 =this.state.widgets.widget6
        let widget7 =this.state.widgets.widget7
        let widget8 =this.state.widgets.widget8


        return (

                <div>


                <Nav className=" col-md-3 d-none d-md-block  sidebar"
                     activeKey="/home"
                     onSelect={selectedKey => alert(`selected ${selectedKey}`)}
                >
                    <div className='logo'>
                        <img src={logo} alt="Logo" />
                    </div>

                    <div className="sidebar-sticky"></div>
                    <Nav.Item>
                        <Nav.Link href="/home">Accueil</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/home">Information</Nav.Link>
                    </Nav.Item><Nav.Item>
                    <Nav.Link href="/home">Active</Nav.Link>
                </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1">Link</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2">Link</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="disabled" disabled>
                            Disabled
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
                    <div className='description'>
                        <h2> Quelle est la definition du bonheur?</h2>
                        <p>selectionne les sujets par ordre de preference </p>
                    </div>

                    <div className='propositions'>
                        <div className="responsive" type='button' onClick={this.handleClick2(this.widget1)} >
                            <div className="gallery" style={{background: '#32902C'}} >
                                <div className="desc">Voyage</div>
                                <div  className="value">{this.widget1.valeur}</div>
                            </div>
                        </div>
                        <div className="responsive" type='button' onClick={this.handleClick2(this.widget2)}>
                            <div className="gallery" style={{background: '#424EA8'}}>
                                <div className="desc">epanouissement pro</div>
                                <div  className="value">{this.widget2.valeur}</div>
                            </div>
                        </div>
                        <div className="responsive" type='button' onClick={this.handleClick2(this.widget3)}>
                            <div className="gallery" style={{background: '#F79F03'}}>
                                <div className="desc">Equilibre pro et perso</div>
                                <div  className="value">{this.widget3.valeur}</div>
                            </div>
                        </div>
                        <div className="responsive" type='button' onClick={this.handleClick2(this.widget4)}>
                            <div className="gallery" style={{background: '#DF0404 '}}>
                                <div className="desc">Bonheur des enfants</div>
                                <div  className="value">{this.widget4.valeur}</div>
                            </div>
                        </div>
                        <div className="responsive" type='button' onClick={this.handleClick2(this.widget5)}>
                            <div className="gallery" style={{background: '#CFC000 '}} >
                                <div className="desc">Confiance en soi</div>
                                <div  className="value">{this.widget5.valeur}</div>
                            </div>
                        </div>
                        <div className="responsive" type='button' onClick={this.handleClick2(this.widget6)}>
                            <div className="gallery" style={{background: 'black'}}>
                                <div className="desc">vie amoureuse</div>
                                <div  className="value">{this.widget6.valeur}</div>
                            </div>
                        </div>
                        <div className="responsive" type='button' onClick={this.handleClick2(this.widget7)}>
                            <div className="gallery" style={{background: '#6D12C8 '}} >
                                <div className="desc" >Réalisation exeptionnelles pro ou perso</div>
                                <div  className="value">{this.widget7.valeur}</div>
                            </div>
                        </div>
                        <div className="responsive" type='button' onClick={this.handleClick2(this.widget8)} >
                            <div className="gallery" style={{background: '#A47DCC '}}  >
                                <div  className="desc">Aissance financiére</div>
                                <div  className="value">{this.widget8.valeur}</div>
                            </div>
                        </div>
                    </div>
                    <div className="buttons">

                        <button className="button" >Retour</button>
                        <button className="button">Suivant</button>


                    </div>
                </div>









        );
    }
}

export default Sidebars;
