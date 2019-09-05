import axios from 'axios';

const SignOut = () => {
  localStorage.removeItem('AuthorsHavenUser');
  axios.get('https://ah-dahlia-staging.herokuapp.com/api/v1/auth/logout');
};

export default SignOut;
