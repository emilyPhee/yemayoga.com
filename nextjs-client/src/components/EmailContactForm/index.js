import styled from '@emotion/styled';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Spinner,
  Textarea,
} from '@chakra-ui/react';
import { useEffect } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useRef } from 'react';

const Container = styled.div`
  .contact-form {
    .error-message {
      color: red;
    }
    .form-footer {
      display: flex;
      justify-content: end;

      .email-success-message {
        color: green;
      }
      .email-error-message {
        color: red;
      }
    }
  }
`;

const EmailContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const recaptchaRef = useRef();

  const [emailSending, setEmailSending] = useState(false);
  const [emailSuccess, setEmailSuccess] = useState(false);
  const [emailError, setEmailError] = useState(false);

  useEffect(() => {
    reset();
  }, [emailSuccess]);

  const onFormSubmit = async (entered_values) => {
    setEmailSending(true);

    await recaptchaRef.current.executeAsync();
    recaptchaRef.current.reset();

    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(entered_values),
      });
    } catch (error) {
      setEmailError(true);
    }

    setEmailSending(false);
    setEmailSuccess(true);
  };

  const resetEmailStatus = () => {
    setEmailSending(false);
    setEmailSuccess(false);
    setEmailError(false);
  };

  const registerOptions = {
    name: {
      required: 'Please enter your name.',
      onChange: resetEmailStatus,
      onBlur: resetEmailStatus,
    },
    email: {
      required: 'Please enter your email.',
      pattern: {
        value:
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: 'Please enter a valid email.',
      },
      onChange: resetEmailStatus,
      onBlur: resetEmailStatus,
    },
    message: {
      required: 'Please enter your message.',
      onChange: resetEmailStatus,
      onBlur: resetEmailStatus,
    },
  };

  return (
    <Container>
      <ReCAPTCHA
        ref={recaptchaRef}
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
        size="invisible"
      />
      <form className="contact-form" onSubmit={handleSubmit(onFormSubmit)}>
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input
            {...register('name', registerOptions.name)}
            autoComplete="off"
          />
          <div className="error-message">
            {errors?.name && errors.name.message}
          </div>
        </FormControl>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input
            {...register('email', registerOptions.email)}
            autoComplete="off"
          />
          <div className="error-message">
            {errors?.email && errors.email.message}
          </div>
        </FormControl>
        <FormControl>
          <FormLabel>Message</FormLabel>
          <Textarea
            size="lg"
            {...register('message', registerOptions.message)}
          />
          <div className="error-message">
            {errors?.message && errors.message.message}
          </div>
        </FormControl>
        <div className="form-footer">
          {emailError ? (
            <div className="email-error-message">failed</div>
          ) : null}
          {emailSuccess ? (
            <div className="email-success-message">success</div>
          ) : null}
          {emailSending ? (
            <div className="loading">
              <Spinner />
            </div>
          ) : null}
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Container>
  );
};

export default EmailContactForm;
