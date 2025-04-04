import React from "react";
import Student from "./Components/Student/Student";
import StudentReview from "./Components/Student/StudentReview";

//class component
class MainBody extends React.Component {
  render() {
    const whatWeWillLearn = "React JS";
    const leactureCount = 3;

    return (
      <div style={{ minHeight: "70vh" }}>
        <p>
          In this course we will learn {whatWeWillLearn} by building TaskOPedia!
          <br />
          Total Lectu7re - {leactureCount}
        </p>
        <ul>
          <li>Basic Foundation</li>
          <li>Functional and Class Components</li>
        </ul>
        <div>
          Enter Task :{" "}
          <input maxLength={5} readOnly={false} placeholder="Ben"></input>
        </div>

        <div className="container row">Students Enrolled</div>

        <Student
          experience={2}
          name="Kris Walley"
          headshot="https://api.lorem.space/image/face?w=150&h=153"
        >
          <StudentReview />
        </Student>
        <Student
          experience={5}
          name="Angel Patrice"
          headshot="https://api.lorem.space/image/face?w=150&h=151"
        >
          <StudentReview />
        </Student>
        <Student
          experience={7}
          name="Rene Parker"
          headshot="https://api.lorem.space/image/face?w=150&h=151"
        />
      </div>
    );
  }
}
export default MainBody;
