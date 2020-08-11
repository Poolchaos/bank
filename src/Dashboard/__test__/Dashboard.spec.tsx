import * as React from "react";
import { shallow, ShallowWrapper } from "enzyme";

import Dashboard from '../Dashboard';

let dashboard: ShallowWrapper<undefined, undefined>;

beforeEach(() => {
  dashboard = shallow(<Dashboard/>);
});

it("should render without error", () => 
  expect(dashboard.length).toBe(1));

