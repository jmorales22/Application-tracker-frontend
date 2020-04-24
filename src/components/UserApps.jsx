import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class UserApps extends Component {
    state = {
      apps: [],
      user_id: '3'
    };
  
    async getData() {
      let user_id = this.state.user_id;
      const response = await fetch(`http://localhost:2000/applications/${user_id}`);
      const data = await response.json();
      return data;
    };

    async componentDidMount() {
      const apps = await this.getData();
  
      this.setState({
        apps: apps
      });
    }
  
    render() {
        let appsArray = this.state.apps;
        
        return (
            <ul className="UserApp">
                {appsArray.length > 0 ? (
                appsArray.map(app => (
                   <li>
                    { app.city}
                    <br/>
                    { app.position}
                    <br/>
                    { app.position_description }
                    <br/>
                    { app.application_date } 
                    <br/>
                    { app.offer_extended }
                    <br/>
                    <br/>

                    </li>
                ))
                ) : (
                <li>No Data</li>
                )}
            </ul>
        );
      }
    }
  export default UserApps;