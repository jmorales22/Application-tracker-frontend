import React, { Component } from "react";
import { ListItem, ListCategory, IntListItems, Comments } from './styled'

class UserInterviews extends Component {
  state = {
    interviews: [],
    app_id: this.props.appData.id,
  };

  async getInterviews() {
    const response = await fetch(
      `http://localhost:2000/interviews/${this.state.app_id}`
    );
    const data = await response.json();
    return data;
  }

  async componentDidMount() {
    const interviews = await this.getInterviews();

    this.setState({
      interviews: interviews,
    });
  }

  render() {
    let interviewArray = this.state.interviews;

    if (interviewArray.length > 0) {
      return (
        <div>
          {interviewArray.map((interview, index) => {
            const date = new Date(interviewArray[index].interview_date);
            const newDate = date.getDate();
            let month = date.getMonth() + 1;
            let year = date.getFullYear();
            let dateStr = month + "/" + newDate + "/" + year;
            return (
              <li>
                <div>
                    <strong>- {interviewArray[index].round}</strong>
                </div>
                <IntListItems>
                    <ListItem>
                        <ListCategory>
                            Type:
                        </ListCategory>
                        <div>
                            {interviewArray[index].interview_type}
                        </div>
                    </ListItem>
                    <ListItem>
                        <ListCategory>
                            Date:
                        </ListCategory>
                        <div>
                            {dateStr}
                        </div>
                    </ListItem>
                    <ListItem>
                        <ListCategory>
                            Rating:
                        </ListCategory>
                        <div>
                            {interviewArray[index].interview_rating}
                        </div>
                    <ListItem>
                    </ListItem>
                        <ListCategory>
                            Interviewer:
                        </ListCategory>
                        <div>
                            {interviewArray[index].interviewer}
                        </div>
                    </ListItem>
                    <ListItem>
                        <ListCategory>
                            Contact:
                        </ListCategory>
                        <div>
                            {interviewArray[index].follow_up_person}
                        </div>
                    </ListItem>
                    <ListItem>
                        <ListCategory>
                            Contact Email:
                        </ListCategory>
                        <div>
                            {interviewArray[index].follow_up_email}
                        </div>
                    </ListItem>
                    <ListItem>
                        <ListCategory>
                            Whiteboarding:
                        </ListCategory>
                        <div>
                            {interviewArray[index].whiteboarding}
                        </div>
                    </ListItem>
                    <ListItem>
                        <ListCategory>
                            Coding Challenge:
                        </ListCategory>
                        <div>
                            {interviewArray[index].code_challenge}
                        </div>
                    </ListItem>
                    <ListItem>
                        <ListCategory>
                            Comments:
                        </ListCategory>
                    </ListItem>
                    <Comments>
                        {interviewArray[index].comments}
                    </Comments>
                </IntListItems>
              </li>
            );
          })}
        </div>
      );
    } else {
      return <div>No interviews added yet.</div>;
    }
  }
}

export default UserInterviews;
