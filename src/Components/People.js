import axios from "axios";
import { useEffect, useState } from "react";
import "./People.css";

const People = () => {
  const [people, setPeople] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [person, setPerson] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [alert, setAlert] = useState("");

  const fetchPeople = async () => {
    try {
      const res = await axios.get("https://ghibliapi.herokuapp.com/people");
      setPeople(res.data);
    } catch (error) {
      console.log(error);
      setPeople([]);
    }
  };

  const getPeopleInfo = people.filter((person) => {
    return person.name === userInput;
  });

  const handleChange = (e) => {
    // if (e.target.value === "") {
    //   setUserInput(null);
    //   setGender(null);
    //   setAge(null);
    // } else {
    setUserInput(e.target.value);
    // }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPerson(userInput);
    setAge(getPeopleInfo[0].age);
    setGender(getPeopleInfo[0].gender);
  };

  // const handleClick = () => {
  //   // if (getPeopleInfo !== undefined) {
  //     // console.log(getPeopleInfo)
  //     // console.log(getPeopleInfo[0])
  //     // console.log(getPeopleInfo[0].age)
  //     setUserInput("");
  //     setPerson(userInput);
  //     setAge(getPeopleInfo[0].age);
  //     setGender(getPeopleInfo[0].gender);

  //     // return(
  //     //   "Not Found"

  //     // )
  //     // setPerson(null);
  //     // setAge(null);
  //     // setGender(null);
  //   // }
  // };

  useEffect(() => {
    fetchPeople();
  }, []);

  return (
    <section id="People">
      <form onSubmit={handleSubmit}>
        <label>
          <h1>Search for a Person</h1>
          <input
            value={userInput}
            onChange={handleChange}
            type="text"
            placeholder="Find Your Person"
          />
        </label>
        <button>Submit</button>
      </form>
      {getPeopleInfo.length === 0 ? (
        <h2>Not Found</h2>
      ) : (
        <>
          <h2>Name: {person}</h2>
          <h3>Age: {age}</h3>
          <h3>Gender: {gender}</h3>
        </>
      )}
    </section>
  );
};

export default People;
