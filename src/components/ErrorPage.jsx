import React, { Component } from 'react';

class ErrorPage extends Component {

    render(){
        return (
            <div id='error'>
                <h1 className="notfoundTitle">Oops! The page can't be found.</h1>
                <p className="notFoundDescription">
                There is nothing found at this location.
                Please try one of the links in the menu or press back to go to the previous page.
                </p>
            </div>
        );

    }
}

export default ErrorPage;