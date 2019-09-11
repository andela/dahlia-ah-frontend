import settingsApiCall from '../api/settings';

// eslint-disable-next-line import/prefer-default-export
export const handleSelected = (value, setValue) => {
  settingsApiCall(value, setValue);
};
