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
    interviews: [{company_name: 'Loading'}],
    hasData: false,
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
      hasData: true
    });
  }

  render() {
    //let interviewsArray = this.state.interviews;
    const { interviews, hasData } = this.state;

    return (
      <div>
        <PublicInterviewsHeader />
        <Centered>
          <OuterIntWrapper>
            <div>
              <Centered>
                <IntTitle>
                  {interviews !== [] ?
                  (`Interviews at ${interviews[0].company_name}`)
                  :
                  (`Getting Company Name`)}
                </IntTitle>
              </Centered>
            <Wrapper>
              <Centered>
                <InterviewsBody style={userApp}>
                  {!!hasData > 0 ? (
                    interviews.map((interview, index) => {
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
                                          {interviews[index].round}
                                      </div>
                                  </ListItem>
                                  <ListItem>
                                      <ListCategory>
                                          Type:
                                      </ListCategory>
                                      <div>
                                          {interviews[index].interview_type}
                                      </div>
                                  </ListItem>
                                  <ListItem>
                                      <ListCategory>
                                          Rating:
                                      </ListCategory>
                                      <div>
                                          {interviews[index].interview_rating}
                                      </div>
                                  <ListItem>
                                  </ListItem>
                                      <ListCategory>
                                          Interviewer:
                                      </ListCategory>
                                      <div>
                                          {interviews[index].interviewer}
                                      </div>
                                  </ListItem>
                                  <ListItem>
                                      <ListCategory>
                                          Contact:
                                      </ListCategory>
                                      <div>
                                          {interviews[index].follow_up_person}
                                      </div>
                                  </ListItem>
                                  <ListItem>
                                      <ListCategory>
                                          Contact Email:
                                      </ListCategory>
                                      <div>
                                          {interviews[index].follow_up_email}
                                      </div>
                                  </ListItem>
                                  <ListItem>
                                      <ListCategory>
                                          Whiteboarding:
                                      </ListCategory>
                                      <div>
                                          {interviews[index].whiteboarding}
                                      </div>
                                  </ListItem>
                                  <ListItem>
                                      <ListCategory>
                                          Coding Challenge:
                                      </ListCategory>
                                      <div>
                                          {interviews[index].code_challenge}
                                      </div>
                                  </ListItem>
                                  <ListItem>
                                      <ListCategory>
                                          Comments:
                                      </ListCategory>
                                  </ListItem>
                                  <Comments>
                                      {interviews[index].comments}
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
