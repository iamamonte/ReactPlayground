import React from "react";
import ReactDOM from "react-dom";
import PurpleButton from "../../components/practice/PurpleButton";
import InputField from "../../components/practice/InputField";

describe("Initial Component Tests", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<PurpleButton />, div);
  });
});
