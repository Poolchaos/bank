import * as React from "react";
import { shallow, ShallowWrapper } from "enzyme";

import App from '../App';

let app: ShallowWrapper<undefined, undefined>;

beforeEach(() => {
  app = shallow(<App/>);
});

it("should render without error", () => 
  expect(app.length).toBe(1));

