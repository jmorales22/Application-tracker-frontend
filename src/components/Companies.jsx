import React, { Component } from "react";
import { Link } from "react-router-dom";
import NoData from "./NoData";
import CompaniesHeader from "./CompaniesHeader";
import plus from "../images/plus.png";

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
          <p>
            <Link style={linkStyle} to={`/applicationform`}>
              <img src={plus} height="20" width="20" alt="add" />
              Application Form
            </Link>
          </p>
          <h3> Companies that other students have applied to:</h3>
          <ul style={userApp}>
            {companyArray.length > 0 ? (
              companyArray.map((company) => (
                <li>
                  <br />
                  <Link style={linkStyle} to={`/companies/${company.id}`}>
                    {company.company_name}
                  </Link>
                </li>
              ))
            ) : (
              <li>
                <NoData />
              </li>
            )}
          </ul>
        </>
      </div>
    );
  }
}

const userApp = {
  listStyle: "none",
};

const linkStyle = {
  color: "blue",
};

export default Companies;
