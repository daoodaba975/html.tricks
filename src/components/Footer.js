import React from 'react';

const Footer = () => {
    let styles = {
        container:{
            width: "100%",
            height: 156,
            backgroundColor: "#00111C",
            display: "flex", 
            alignItems: "center",
            justifyContent: "center"
        },
        text:{
            fontSize: 30, color: "white",
            fontWeight: "bold"
        }
    }
    return (
        <div style={styles.container}>
            <div>
                <p style={styles.text}>© 2020 Wergu</p>
            </div>
        </div>
    );
};

export default Footer;