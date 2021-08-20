import React, { Component } from 'react';

class Confidentialite extends Component {
    render() {
        return (
            <div>
                <h1>Règles de confidentialité</h1>
                <p>
                    Cette déclaration de confidentialité concerne les applications publié sur cette page https://play.google.com/store/apps/details?id=com.wergu
                </p>
                <p>
                    Android.permission.CAMERA: cette autorisation est requise pour utiliser la caméra afin de prendre des photos de votre ordonnace pour la partager avec les pharmaciens.
                </p>
                <p>
                    En utilisant l’application, vous signifiez votre accord sur notre politique de confidentialité. Si vous n’acceptez pas cette politique, n’utilisez pas l’application. Nous nous réservons le droit, à notre discrétion, de modifier cette politique à tout moment.
                </p>

            </div>
        );
    }
}

export default Confidentialite;