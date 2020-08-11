import * as React from "react";
import { shallow, ShallowWrapper } from "enzyme";

import Profile from '../Profile';
import ProfileService from '../../model/ProfileService';

let profile: ShallowWrapper<undefined, undefined>;

const user = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: { lat: "-37.3159", lng: "81.1496" }
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets"
  }
};

beforeEach(() => {
  profile = shallow(<Profile/>);
});

it("should render without error", () => 
  expect(profile.length).toBe(1));

it("should get user data to display", async() => {

  const mockSuccessResponse = {};
  const mockJsonPromise = Promise.resolve(mockSuccessResponse);
  const mockFetchPromise = Promise.resolve({
    json: () => mockJsonPromise,
  });

  global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);

  // @ts-ignore
  global.BASE_URL = 'http://jsonplaceholder.typicode.com';
  const service = new ProfileService();
  const data = await service.getUserDetails();

  // @ts-ignore
  jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);
                          
  expect(global.fetch).toHaveBeenCalledTimes(1);
  // @ts-ignore
  expect(global.fetch).toHaveBeenCalledWith(global.BASE_URL + '/users/1');
});
