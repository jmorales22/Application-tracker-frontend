import React, { Component } from "react";
import NoInterviewData from "./NoInterviewData";
import PublicInterviewsHeader from "./PublicInterviewsHeader";
import { Link } from "react-router-dom";
import {
  Centered,
  OuterIntWrapper,
  Wrapper,
  CompaniesWrapper,
  IntTitle,
  DividingLineCompany,
  InterviewsList,
  ListItem,
  ListCategory,
  IntListItems,
  Comments,
  InterviewsBody
 } from "./styled";

class PublicInterviews extends Component {
  state = {
    interviews: []
  };

  async getData() {
    const { id } = this.props.match.params;
    const response = await fetch(`http://localhost:2000/companies/${id}`);
    const data = await response.json();
    return data;
  }

  async componentDidMount() {
    const interviews = await this.getData();

    this.setState({
      interviews: interviews,
    });
  }

  render() {
    let interviewsArray = this.state.interviews;

    return (
      <div>
        <PublicInterviewsHeader />
        <Centered>
          <OuterIntWrapper>
            <div>
              <Centered>
                <IntTitle>
                  Interviews at <strong>{interviewsArray.company_name}</strong>
                </IntTitle>
              </Centered>
            <Wrapper>
              <Centered>
                <InterviewsBody style={userApp}>
                  {interviewsArray.length > 0 ? (
                    interviewsArray.map((interview, index) => {
                      const date = new Date(interview.interview_date);
                      const newDate = date.getDate();
                      let month = date.getMonth() + 1;
                      let year = date.getFullYear();
                      let dateStr = month + "/" + newDate + "/" + year;
                      return (
                        <InterviewsList>
                          <Centered>
                            <CompaniesWrapper>
                              <IntListItems>
                                  <div>
                                    <strong>{dateStr}</strong>
                                  </div>
                                  <ListItem>
                                      <ListCategory>
                                          Interview Round:
                                      </ListCategory>
                                      <div>
                                          {interviewsArray[index].round}
                                      </div>
                                  </ListItem>
                                  <ListItem>
                                      <ListCategory>
                                          Type:
                                      </ListCategory>
                                      <div>
                                          {interviewsArray[index].interview_type}
                                      </div>
                                  </ListItem>
                                  <ListItem>
                                      <ListCategory>
                                          Rating:
                                      </ListCategory>
                                      <div>
                                          {interviewsArray[index].interview_rating}
                                      </div>
                                  <ListItem>
                                  </ListItem>
                                      <ListCategory>
                                          Interviewer:
                                      </ListCategory>
                                      <div>
                                          {interviewsArray[index].interviewer}
                                      </div>
                                  </ListItem>
                                  <ListItem>
                                      <ListCategory>
                                          Contact:
                                      </ListCategory>
                                      <div>
                                          {interviewsArray[index].follow_up_person}
                                      </div>
                                  </ListItem>
                                  <ListItem>
                                      <ListCategory>
                                          Contact Email:
                                      </ListCategory>
                                      <div>
                                          {interviewsArray[index].follow_up_email}
                                      </div>
                                  </ListItem>
                                  <ListItem>
                                      <ListCategory>
                                          Whiteboarding:
                                      </ListCategory>
                                      <div>
                                          {interviewsArray[index].whiteboarding}
                                      </div>
                                  </ListItem>
                                  <ListItem>
                                      <ListCategory>
                                          Coding Challenge:
                                      </ListCategory>
                                      <div>
                                          {interviewsArray[index].code_challenge}
                                      </div>
                                  </ListItem>
                                  <ListItem>
                                      <ListCategory>
                                          Comments:
                                      </ListCategory>
                                  </ListItem>
                                  <Comments>
                                      {interviewsArray[index].comments}
                                  </Comments>
                              </IntListItems>
                            </CompaniesWrapper>
                          </Centered>
                        </InterviewsList>
                      );
                    })
                  ) : (
                    <li>
                      <NoInterviewData />
                    </li>
                  )}
                </InterviewsBody>
              </Centered>
            </Wrapper>
            </div>
          </OuterIntWrapper>
        </Centered>
      </div>
    );
  }
}


const userApp = {
  listStyle: "none",
};
export default PublicInterviews;
