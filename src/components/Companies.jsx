import React, { Component } from "react";
import { Link } from "react-router-dom";
import NoData from "./NoData";
import CompaniesHeader from "./CompaniesHeader";
import {
  Centered,
  AppForm,
  OuterWrapper,
  LinkStyle,
  Wrapper,
  CompaniesWrapper,
  AppIntTitle,
  MainList,
  DividingLineCompany,
  CompanyList,
  CompanyLink
 } from "./styled";


class Companies extends Component {
  state = {
    companies: [],
  };

  async getData() {
    const response = await fetch(`http://localhost:2000/companies`);
    const data = await response.json();
    return data;
  }

  async componentDidMount() {
    const companies = await this.getData();

    this.setState({
      companies: companies,
    });
  }

  render() {
    let companyArray = this.state.companies;

    return (
      <div>
        <>
          <CompaniesHeader />
          <br />
          <Centered>
            <OuterWrapper>
              <Wrapper>
              <Centered>
              <CompaniesWrapper>
                <Centered>
                  <AppForm>
                    <Link style={linkStyle} to={`/applicationform`}>
                      +App
                    </Link>
                  </AppForm>
                </Centered>
                  <AppIntTitle> Companies others have applied to:</AppIntTitle>
              <Centered>
                <div style={userApp}>
                  {companyArray.length > 0 ? (
                    companyArray.map((company) => (
                      <div>
                        <Link style={linkStyle} to={`/companies/${company.id}`}>
                          <CompanyLink>
                              {company.company_name}
                            </CompanyLink>
                          </Link>
                        <DividingLineCompany></DividingLineCompany>
                      </div>
                    ))
                  ) : (
                    <li>
                      <NoData />
                    </li>
                  )}
                </div>
              </Centered>
              </CompaniesWrapper>
              </Centered>
              </Wrapper>
            </OuterWrapper>
          </Centered>
        </>
      </div>
    );
  }
}

const userApp = {
  listStyle: "none",
};

const linkStyle = {
  color: "#00adb5",
  textDecoration: "none",
};

export default Companies;
