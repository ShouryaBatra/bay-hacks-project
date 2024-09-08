import "./Main.css";
import * as React from "react";
import { useState } from "react";

export default function Main({
  setSubject,
  setSubModule,
  setDuration,
  setGrade,
}) {
  return (
    <>
      <h1>Your Tutoring Experience: Welcome to Luminaris! </h1>
      <h2> Your AI tutor, anytime, anywhere.</h2>

      {/* FORM HTML GOES HERE */}

      <form>
        <select
          name="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        >
          <option value="">I want to learn...</option>
          <option value="math">Math</option>
          <option value="science">Science</option>
          <option value="computerScience">Computer Science</option>
          <option value="english">English</option>
        </select>
        <div>
          <input
            name="subModule"
            placeholder="Sub-Module"
            value={subModule}
            onChange={(e) => setSubModule(e.target.value)}
          />
        </div>
        <div>
          <input
            name="duration"
            placeholder="Duration of Lesson (e.g 3 Days/1 Week)"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            required
          />
        </div>
        <select value={grade} onChange={(e) => setGrade(e.target.value)}>
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

      {/* <div id="resultBox">
        <h1>testing 123</h1>
      </div> */}
    </>
  );
}
