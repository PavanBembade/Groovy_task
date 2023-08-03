
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';

export const registerAction = (newUser) => {
  return {
    type: REGISTER_SUCCESS,
    payload: newUser,
  };
};