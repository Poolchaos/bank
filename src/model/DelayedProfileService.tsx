import ProfileService from './ProfileService';

const service = new ProfileService();

const updateDelay = 500;

const delay = timeout => new Promise(resolve => {
  setTimeout(resolve, timeout);
});

const getUserDetails = async () => {
  await delay(updateDelay);
  return service.getUserDetails();
};

export default {
  getUserDetails
};
