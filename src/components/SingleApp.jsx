import React, { Component } from 'react';
import UserInterviews from './Interviews';

class SingleApp extends Component {
    state = {
        view: false
    }

    setView = (e) => {
        e.preventDefault();

        this.setState(prevState => ({
            view: !prevState.view
          }));
      }

    render() {
        const { app } = this.props;
        
        const date = new Date(app.application_date);
        const newDate = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        let dateStr = month + "/" + newDate + "/" + year;

        if (this.state.view === true) {
        return (
            <>
                {app.company_name}
                <br />
                City: {app.city}
                <br />
                Position: {app.position}
                <br />
                Postion description: {app.position_description}
                <br />
                Application Date: {dateStr}
                <br />
                Offer Extended? {app.offer_extended}
                <br />
                <button onClick={this.setView}>Show Interviews</button>
                <UserInterviews appData={app}></UserInterviews>
            </>
        )
        } else {
            return (
                <>
                    {app.company_name}
                    <br />
                    City: {app.city}
                    <br />
                    Position: {app.position}
                    <br />
                    Postion description: {app.position_description}
                    <br />
                    Application Date: {dateStr}
                    <br />
                    Offer Extended? {app.offer_extended}
                    <br />
                    <button onClick={this.setView}>Show Interviews</button>
                </>
            )
        }
    }
}

export default SingleApp;