import React, {  useState } from 'react';
import { Sidebar, Menu,  Icon } from 'semantic-ui-react';



const LeftNav = ({visible=false,collapse,handleNavClick, references}) => {
    let [name, setName] = useState("accueil")
    
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
        collapse()
        setName(myName)
        handleNavClick(references[myName])
    }

    return (
     
            <Sidebar
                as={Menu}
                animation='overlay'
                icon='labeled'
                vertical
                visible={visible}
                width="wide"
                direction="right"
            
                //style={{ display: "flex", alignItems: "center", position:"absolute", right: 0,height: "100vh"}}
                

            >
                {/* <div style={{ width: "60%",padding: 5 }}>
                    <Grid.Row columns={1} > */}
                    
                    <p style={{textAlign: "right",color: "#757575", marginTop: 30, marginRight: 20}}><Icon onClick={collapse} name="close" size="big" /></p>
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
                    {/* </Grid.Row>
                </div> */}
            </Sidebar>
     
    );
};




export default (LeftNav);