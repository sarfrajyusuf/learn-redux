// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { login } from "../features/userSlice";
// import "../Login.css";

// function Login() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const dispatch = useDispatch();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(
//       login({
//         name: name,
//         email: email,
//         password: password,
//         loggedIn: true,
//       })
//     );
//   };

//   return (
//     <div className="login">
//       <form className="login_form" onSubmit={(e) => handleSubmit(e)}>
//         <h1>Login Here </h1>
//         <input
//           type="name"
//           placeholder="Enter name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <input
//           type="email"
//           placeholder="Enter email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Enter password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button className="submit_btn" type="submit">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }

// export default Login;

import React, { Component } from "react";

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: {
        userName: "",
        password: "",
      },
      submit: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      submit: this.state.formData,
    });
  }
  handleChange(e) {
    this.setState({
      formData: e.target.value,
    });
  }
  render() {
    return (
      <div>
        <h1>Login Page</h1>
        <input
          value={this.state.formData.userName}
          onChange={this.handleChange}
        />
        <input
          value={this.state.formData.password}
          onChange={this.handleChange}
        />
        <button onClick={this.handleSubmit} type="submit">
          submit
        </button>
        <h1>{this.state.submit}</h1>
      </div>
    );
  }
}

export default Login;
