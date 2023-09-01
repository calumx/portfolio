import { useState } from 'react';
import { Stack, TextField, Button, Typography, useTheme } from '@mui/material';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  email: string;
  message: string;
};

const encode = (data: { [key: string]: string }) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

const Contact = () => {
  const theme = useTheme();
  const darkMode = theme.palette.mode === 'dark';
  const [formSubmitted, setFormSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...data }),
    })
      .then((res) => {
        if (res.ok) {
          return setFormSubmitted(true);
        } else return alert('Something went wrong sending the form; sorry! Try again later.');
      })
      .catch(() => alert('Something went wrong sending the form; sorry! Try again later.'));
  };

  const { ref: emailRef, ...emailInputProps } = register('email', { required: 'Please input your email.' });
  const { ref: msgRef, ...msgInputProps } = register('message', { required: 'Please enter your message.' });

  return (
    <Stack>
      {formSubmitted ? (
        <Typography fontSize={{ xs: '0.75rem', sm: '1rem' }}>{'Form submitted successfully; thanks for your message!'}</Typography>
      ) : (
        <>
          <Typography fontSize={{ xs: '0.75rem', sm: '1rem' }} marginBottom={'1.5rem'}>{`Email ${decodeEmail(
            'pnyhz@pnyhzk.pbz'
          )} or use the form below.`}</Typography>
          <Stack component='form' name='contact' onSubmit={handleSubmit(onSubmit)} spacing={3}>
            <TextField
              inputRef={emailRef}
              error={!!errors.email}
              helperText={errors?.email?.message}
              label='Your Email'
              autoComplete='true'
              id='email'
              type='email'
              sx={{ height: '75px' }}
              {...emailInputProps}
            />
            <TextField
              multiline
              sx={{ height: '175px' }}
              rows={5}
              label='Your Message'
              id='message'
              error={!!errors.message}
              helperText={errors?.message?.message}
              inputRef={msgRef}
              {...msgInputProps}
            />
            <Button variant='contained' type='submit' color={darkMode ? 'secondary' : 'primary'}>
              Submit
            </Button>
          </Stack>
        </>
      )}
    </Stack>
  );
};

const decodeEmail = (encodedEmail: string): string => {
  return encodedEmail.replace(/[a-zA-Z]/g, (c) => {
    const code = c.charCodeAt(0);
    if ((code >= 65 && code <= 77) || (code >= 97 && code <= 109)) {
      return String.fromCharCode(code + 13);
    } else if ((code >= 78 && code <= 90) || (code >= 110 && code <= 122)) {
      return String.fromCharCode(code - 13);
    } else {
      return c;
    }
  });
};

export default Contact;
