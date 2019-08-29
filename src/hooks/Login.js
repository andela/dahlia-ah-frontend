import { useState } from 'react';

export const emailState = () => {
  const [email, setEmail] = useState('');

  return { email, setEmail };
};

export const passwordState = () => {
  const [password, setPassword] = useState('');

  return { password, setPassword };
};

export const errorState = () => {
  const [error, setError] = useState('');

  return { error, setError };
};

export const isLoadingState = () => {
  const [isLoading, setLoader] = useState(false);

  return { isLoading, setLoader };
};
