import React, { Component } from 'react';
import UserInterviews from './Interviews';
import { AppIntBox, AppBox, AppTitle, IntBox, IntButton, ListItem, ListCategory } from './styled'

class SingleApp extends Component {
    state = {
        view: false,
        buttonText: 'Show Interviews'
    }

    setView = (e) => {
        e.preventDefault();

        if (this.state.buttonText === 'Show Interviews') {
        this.setState(prevState => ({
            view: !prevState.view,
            buttonText: 'Hide Interviews'
          }));
        } else {
            this.setState(prevState => ({
                view: !prevState.view,
                buttonText: 'Show Interviews'
              }));
        }
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
            <AppIntBox>
                <div className="columns">
                    <div className="column">
                        <AppBox>
                            <AppTitle>
                                {app.company_name}
                            </AppTitle>
                            <div>
                                    <ListItem>
                                        <ListCategory>
                                            Location:
                                        </ListCategory>
                                        <div>
                                            {app.city}
                                        </div>
                                    </ListItem>
                                    <ListItem>
                                        <ListCategory>
                                            Position:
                                        </ListCategory>
                                        <div>
                                            {app.position}
                                        </div>
                                    </ListItem>
                                    <ListItem>
                                        <ListCategory>
                                            Position Description:
                                        </ListCategory>
                                        <div>
                                            {app.position_description}
                                        </div>
                                    </ListItem>
                                    <ListItem>
                                        <ListCategory>
                                            Application Date:
                                        </ListCategory>
                                        <div>
                                            {dateStr}
                                        </div>
                                    </ListItem>
                                    <ListItem>
                                        <ListCategory>
                                            Offer Extended?
                                        </ListCategory>
                                        <div>
                                            {app.offer_extended}
                                        </div>
                                    </ListItem>
                            </div>
                        </AppBox>
                    </div>
                    <div className="column">
                        <IntBox>
                            <IntButton onClick={this.setView}>{this.state.buttonText}</IntButton>
                            <UserInterviews appData={app}></UserInterviews>
                        </IntBox>
                    </div>
                </div>
            </AppIntBox>
        )
        } else {
            return (
                <AppIntBox className="container">
                    <div className="columns">
                        <div className="column">
                            <AppBox>
                            <AppTitle>
                                {app.company_name}
                            </AppTitle>
                            <div>
                                    <ListItem>
                                        <ListCategory>
                                            Location:
                                        </ListCategory>
                                        <div>
                                            {app.city}
                                        </div>
                                    </ListItem>
                                    <ListItem>
                                        <ListCategory>
                                            Position:
                                        </ListCategory>
                                        <div>
                                            {app.position}
                                        </div>
                                    </ListItem>
                                    <ListItem>
                                        <ListCategory>
                                            Position Description:
                                        </ListCategory>
                                        <div>
                                            {app.position_description}
                                        </div>
                                    </ListItem>
                                    <ListItem>
                                        <ListCategory>
                                            Application Date:
                                        </ListCategory>
                                        <div>
                                            {dateStr}
                                        </div>
                                    </ListItem>
                                    <ListItem>
                                        <ListCategory>
                                            Offer Extended?
                                        </ListCategory>
                                        <div>
                                            {app.offer_extended}
                                        </div>
                                    </ListItem>
                            </div>
                            </AppBox>
                        </div>
                        <div className="column">
                            <IntBox>
                                <IntButton onClick={this.setView}>{this.state.buttonText}</IntButton>
                            </IntBox>
                        </div>
                    </div>
                </AppIntBox>
            )
        }
    }
}

export default SingleApp;