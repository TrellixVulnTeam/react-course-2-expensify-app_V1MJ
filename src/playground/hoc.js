//higher Order Components, goal of HOC is to Reuse the code
import React from "react";
import ReactDOM from "react-dom";

//react component
const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

// const withAdminWarning = (WrappedComponent) => {
//   return (props) => (
//     <div>
//       {/* <p>This is private info. Please don't share!</p> */}
//       {props.isAdmin && <p>This is private info. Please don't share!</p>}
//       <WrappedComponent {...props} />
//     </div>
//   );
// };

// const AdminInfo = withAdminWarning(Info);

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticate ? (
        <p>Authenticated user</p>
      ) : (
        <p>Please login to view the info</p>
      )}
      <WrappedComponent {...props} />
    </div>
  );
};

const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(
//   <Info info="There are the details" />,
//   document.getElementById("app")
// );

// ReactDOM.render(
//   <AdminInfo isAdmin={false} info="There are the details" />,
//   document.getElementById("app")
// );

ReactDOM.render(
  <AuthInfo isAuthenticate={false} info="There are the details" />,
  document.getElementById("app")
);
