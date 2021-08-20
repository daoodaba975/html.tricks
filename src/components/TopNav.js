import React, { useState, useEffect, useCallback } from 'react';
import { Menu, Image, Responsive, Icon } from 'semantic-ui-react';
import logo from "../img/logo.png"
import ReactDOM from 'react-dom'



const TopNav = ({ handleNavClick, references, collapse }) => {

    let [name, setName] = useState("accueil")
    let [showShadow, setShowShadow] = useState(false)

    let handleScroll = useCallback(() => {
        if (references.accueil.current) {
            let accueilPos = ReactDOM.findDOMNode(references.accueil.current).getBoundingClientRect().top;

            if (accueilPos > -518) {
                setName("accueil")
            }
            if (accueilPos <= -518 && accueilPos > -4009) {
                setName("nos_solutions")
            }
            if (accueilPos <= -4009 && accueilPos > -4587) {
                setName("la_team")
            }
            if (accueilPos <= -4587) {
                setName("nous_contacter")
            }
        }

        if (window.scrollY > 20) {
            setShowShadow(true)
        } else {
            setShowShadow(false)

        }
    }, [references])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    }, [handleScroll])


    let styles = (myName) => (
        {
            menuItem: {
                fontSize: 25,
                fontWeight: "bold",
                fontStyle: "normal",
                fontFamily: "Lato",
                color: myName === name ? "#12A85C" : "#757575",
                cursor: "pointer"
            },
            logoText: {
                fontSize: 35,
                fontWeight: "bold",
                color: "#12A85C", marginLeft: 20
            },
            menu: {
                backgroundColor: "white",
                boxShadow: showShadow ? "0px 2px 2px rgba(0, 0, 0, 0.25)" : ""
            },
            logoMenu: {
                cursor: "pointer"
            },
            collapseBtn:{
                marginTop: 25,
                color: "#757575"
            }
        }
    )

    let handleItem = (myName) => {
        setName(myName)
        handleNavClick(references[myName])
    }



    return (
        <>
            <Menu secondary fixed="top" style={styles().menu}>
                <Menu.Item as="div"
                    style={styles().logoMenu}
                    onClick={() => handleItem("accueil")}
                >
                    <Image
                        src={logo}
                    />
                    <p style={styles().logoText}>Wergu</p>
                </Menu.Item>

                <Menu.Menu position='right'>
                   
                   <Responsive minWidth={992} as={Menu.Item}>
                    <Menu.Item as="p"
                        name='Accueil'
                        onClick={() => handleItem("accueil")}
                        style={styles("accueil").menuItem}
                    />
                    <Menu.Item as="p"
                        name='Nos solutions'
                        onClick={() => handleItem("nos_solutions")}
                        style={styles("nos_solutions").menuItem}
                    />
                    <Menu.Item as="p"
                        name='La team'
                        onClick={() => handleItem("la_team")}
                        style={styles("la_team").menuItem}

                    />

                    <Menu.Item as="p"
                        name='Contactez nous'
                        onClick={() => handleItem("nous_contacter")}
                        style={styles("nous_contacter").menuItem}
                    />
                    </Responsive>   
                    <Responsive maxWidth={991.99999}>
                    <Menu.Item as='p' onClick={collapse}><Icon name="bars" size="big" style={styles().collapseBtn}  /></Menu.Item>

                    </Responsive>


                </Menu.Menu>
            </Menu>
        </>
    );
};

export default TopNav;