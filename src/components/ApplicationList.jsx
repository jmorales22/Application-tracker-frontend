// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import NoData from "./NoData";

// class UserApps extends Component {
//   state = {
//     apps: [],
//   };

//   async getData() {
//     const { user_id } = this.props.match.params;
//     const response = await fetch(
//       `http://localhost:2000/manageapplications/${user_id}`
//     );
//     const data = await response.json();
//     return data;
//   }

//   async componentDidMount() {
//     const apps = await this.getData();

//     this.setState({
//       apps: apps,
//     });
//   }

//   render() {
//     let appsArray = this.state.apps;

//     return (
//       <div>
//         <>
//           <div style={h3Style}>Your submitted application data:</div>
//           <ul style={userApp}>
//             {appsArray.length > 0 ? (
//               appsArray.map((app) => (
//                 <li>
//                   {app.company_name}
//                   <br />
//                   City: {app.city}
//                   <br />
//                   Position: {app.position}
//                   <br />
//                   Postion description: {app.position_description}
//                   <br />
//                   Application Date: {app.application_date}
//                   <br />
//                   Offer Extended? {app.offer_extended}
//                   <br />
//                   <br />
//                   <Link to={`/interviews}`}>Interview Tracking </Link>
//                 </li>
//               ))
//             ) : (
//               <li>
//                 <NoData />
//               </li>
//             )}
//           </ul>
//         </>
//       </div>
//     );
//   }
// }

// const userApp = {
//   listStyle: "none"
// };

// const h3Style = {
//     margin: "1.3rem",
//     display: "flex",
//     flexDirection: "row",
//     flexGrow: "0",
//     alignItems: "center",
//     height: "50px",
//     marginLeft: "30px",
//     fontSize: "36px",
//     fontFamily: "Comfortaa, cursive",
//     color: "#68696b",
//   }

// export default UserApps;
