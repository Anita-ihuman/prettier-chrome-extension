import App from ".";
import React from "react";
import { render } from "@testing-library/react";

window.chrome = {
  storage: {
    sync: {
      get(callback) {
        setTimeout(() => callback({}));
      },
      set() {}
    }
  }
};

test("Options render", () => {
  render(<App />);
});
