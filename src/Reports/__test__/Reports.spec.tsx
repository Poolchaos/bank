import * as React from "react";
import { shallow, ShallowWrapper } from "enzyme";

import Reports from '../Reports';

let reports: ShallowWrapper<undefined, undefined>;

beforeEach(() => {
  reports = shallow(<Reports/>);
});

it("should render without error", () => 
  expect(reports.length).toBe(1));

