import { useState } from "react";
import "./styles.css";

export default function App() {
  // const [message, setMessage] = useState("")
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    age: "",
    location: ""
  });
  const { firstName, lastName, age, location } = form;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => {
      return {
        ...prevState,
        [name]: value
      };
    });
  };

  return (
    <div className="App">
      <h4>Simple Form with generic Handle change !!</h4>
      <form>
        <input
          type="text"
          name="firstName"
          value={firstName}
          onChange={handleChange}
          placeholder="First name"
        />
        <n />
        <input
          type="text"
          name="lastName"
          value={lastName}
          onChange={handleChange}
          placeholder="Second name"
        />
        <n />
        <input
          type="number"
          name="age"
          value={age}
          onChange={handleChange}
          placeholder="Age"
        />
        <n />
        <input
          type="text"
          name="location"
          value={location}
          onChange={handleChange}
          placeholder="Location"
        />
        <n />
      </form>
    </div>
  );
}
