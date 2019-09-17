import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import card from "./card";

describe("card component", () => {
  //snapshot- but i do not see snapshot folder
  it("renders the UI as expected", () => {
    const tree = renderer.create(<card />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  //smoketest
  it("renders as expected", () => {
    const div = document.createElement("div");
    ReactDOM.render(<card />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
