import validator from 'validator';

const validation = (field, value, setFormData, formdata) => {
  switch (field) {
    case 'Password':
      if (!validator.isAlphanumeric(value)) {
        setFormData((prevFormdata) => {
          const tempFormData = [...prevFormdata];
          tempFormData[3].errorMessage = 'Password must be 8 characters long and contain only alphanumeric characters ';
          return tempFormData;
        });
      } else if (!validator.isByteLength(value, { min: 8 })) {
        setFormData((prevFormdata) => {
          const tempFormData = [...prevFormdata];
          tempFormData[3].errorMessage = 'Password must be 8 characters long and contain only alphanumeric characters ';
          return tempFormData;
        });
      } else {
        setFormData((prevFormdata) => {
          const tempFormData = [...prevFormdata];
          tempFormData[3].errorMessage = '';
          return tempFormData;
        });
      }
      break;
    case 'Email':
      if (!validator.isEmail(value)) {
        setFormData((prevFormdata) => {
          const tempFormData = [...prevFormdata];
          tempFormData[2].errorMessage = 'Email is invalid';
          return tempFormData;
        });
      } else {
        setFormData((prevFormdata) => {
          const tempFormData = [...prevFormdata];
          tempFormData[2].errorMessage = '';
          return tempFormData;
        });
      }
      break;
    case 'Confirm Password':
      if (!validator.equals(value, formdata[3].value)) {
        setFormData((prevFormdata) => {
          const tempFormData = [...prevFormdata];
          tempFormData[4].errorMessage = 'password does not match';
          return tempFormData;
        });
      } else {
        setFormData((prevFormdata) => {
          const tempFormData = [...prevFormdata];
          tempFormData[4].errorMessage = '';
          return tempFormData;
        });
      }
      break;
    case 'Firstname':
      if (!validator.isAlphanumeric(value)) {
        setFormData((prevFormdata) => {
          const tempFormData = [...prevFormdata];
          tempFormData[0].errorMessage = `${field} must contain only alphanumeric input`;
          return tempFormData;
        });
      } else {
        setFormData((prevFormdata) => {
          const tempFormData = [...prevFormdata];
          tempFormData[0].errorMessage = '';
          return tempFormData;
        });
      }
      break;
    default:
      if (validator.isEmpty(value)) {
        setFormData((prevFormdata) => {
          const tempFormData = [...prevFormdata];
          tempFormData[1].errorMessage = `${field} cannot be empty`;
          return tempFormData;
        });
      } else if (!validator.isAlphanumeric(value)) {
        setFormData((prevFormdata) => {
          const tempFormData = [...prevFormdata];
          tempFormData[1].errorMessage = `${field} must contain only alphanumeric input`;
          return tempFormData;
        });
      } else {
        setFormData((prevFormdata) => {
          const tempFormData = [...prevFormdata];
          tempFormData[1].errorMessage = '';
          return tempFormData;
        });
      }
  }
};

export default validation;
