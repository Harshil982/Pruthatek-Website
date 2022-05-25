import React from 'react';
import { Link } from 'react-router-dom';
import './Notfound.css'

function NotFound(props) {
    return (
        <div className="not-found-param">
            <div className="err-404" >
                <div className="char-4-1 common">4</div>
                <div className="char-0 common">0</div>
                <div className="char-4-2 common">4</div>
            </div>
            <p className="not-found">NOT FOUND</p>
            <p className="funny-stat">Dude , You Just landed on wrong URL</p>
            <Link to="/" className="back-home" >Go Back To Home Page</Link>
        </div>
    );
}

export default NotFound;