import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../app/store';
import { setEmail, setPassword, clearUser } from '../model/userSlice';
import { Box, Button, FormControl, FormLabel, Input, Text  } from '@chakra-ui/react';


const UserForm: React.FC = () => {
  const dispatch = useDispatch();
  const email = useSelector((state: RootState) => state.user.email);
  const password = useSelector((state: RootState) => state.user.password);

  const [inputEmail, setInputEmail] = useState(email);
  const [inputPassword, setInputPassword] = useState(password);
  const [error, setError] = useState('');

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmail(inputEmail)) {
      setError('Некорректный email');
      return;
    }
    if (inputPassword.length < 8) {
      setError('Пароль должен быть не менее 8 символов');
      return;
    }
    setError('');
    dispatch(setEmail(inputEmail));
    dispatch(setPassword(inputPassword));
  };

  return (
    <Box as="form" onSubmit={handleSubmit} p={4} borderWidth={1} borderRadius="lg">
      <FormControl id="email" mb={4}>
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          value={inputEmail}
          onChange={(e) => setInputEmail(e.target.value)}
        />
      </FormControl>
      <FormControl id="password" mb={4}>
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          value={inputPassword}
          onChange={(e) => setInputPassword(e.target.value)}
        />
      </FormControl>
      {error && <Text color="red.500">{error}</Text>}
      <Button colorScheme="teal" type="submit" mr={2}>Submit</Button>
      <Button colorScheme="red" type="button" onClick={() => dispatch(clearUser())}>Clear</Button>
    </Box>
  );
};

export default UserForm;


