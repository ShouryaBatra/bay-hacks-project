import "./Main.css";
import * as React from "react";

export default function Main() {
  return (
    <>
      <h1>Your Tutoring Experience: Welcome to [Name]! </h1>
      <h2> Your AI tutor, anytime, anywhere.</h2>

      {/* FORM HTML GOES HERE */}
      <form>
        <select name="framework">
          <option value="">I'm stuck on...</option>
          <option value="math">Math</option>
          <option value="science">Science</option>x
          <option value="computerScience">Computer Science</option>
          <option value="svelte">idk</option>
        </select>
        <div>
          <input name="subModule" placeholder="Sub-Module" required />
        </div>
        <div>
          <input name="duration" placeholder="Duration of Lesson" required />
        </div>
        <select>
          <option value="">Grade</option>
          <option value="">1st</option>
          <option value="">2nd</option>
          <option value="">3rd</option>
          <option value="">4th</option>
          <option value="">5th</option>
          <option value="">6th</option>
          <option value="">7th</option>
          <option value="">8th</option>
          <option value="">9th</option>
          <option value="">10th</option>
          <option value="">11nd</option>
          <option value="">12nd</option>
        </select>
        <input type="submit" />
      </form>

      <div id="resultBox">
        <h1>testing 123</h1>
      </div>
    </>
  );
}
