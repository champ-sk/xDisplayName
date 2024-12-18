import React, { useState } from "react";

const App = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFullName(`${firstName} ${lastName}`);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label for="name">First name:</label>
        <input
          type="text"
          id="name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)} // Updates state with input value
          placeholder="First Name"
          required
        />
        <br />
        <label for="name">Last name:</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)} // Updates state with input value
          placeholder="Last Name"
          required
        />
<br />
        <button type="submit">Submit</button>
      </form>
      {fullName && (
        <div
          style={{ marginTop: "20px", fontSize: "18px", fontWeight: "bold" }}
        >
          Full Name: {fullName}
        </div>
      )}
    </div>
  );
};
export default App;

// Develop a user interface with two text input fields labeled 'First Name' and 'Last Name'.
// // Implement a 'Submit' button functionality such that upon clicking,
// it displays the concatenated result of the entered name as 'Full Name' directly on the webpage,
//  ensuring the output is visible to the user and not just logged to the console.
