import React from 'react';
import ddcHomeImage from '../../assets/images/ddc-home.PNG';

function DDC_Home() {
    return (
        <div className="ddc">
            DDC works
            <img className="ddc--home"
                src={ddcHomeImage}
                alt="DDC Home Page" />
        </div>
    )
}

export default DDC_Home
