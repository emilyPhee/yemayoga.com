import styled from '@emotion/styled';
import { theme } from '@styles/theme';
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
  font-size: ${theme.sizes.bodyFontsSize};
  .contact-form {
    line-height: 2.5rem;
    .error-message {
      color: #db6e6e;
    }
    .form-footer {
      display: flex;
      justify-content: end;
      margin-top: 7rem;

      .email-success-message {
        color: #58a16c;
        font-size: 1.4rem;
        padding: 0 2rem;
      }
      .email-error-message {
        color: #db6e6e;
        font-size: 1.4rem;
        padding: 0 2rem;
      }

      .loading {
        padding: 0 2rem;
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

  const onFormSubmit = async entered_values => {
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
        <FormControl height="5rem">
          <FormLabel fontSize="1.6rem" fontFamily={theme.fonts.nunito}>
            Name
          </FormLabel>
          <Input
            size="lg"
            variant="flushed"
            fontSize={theme.sizes.bodyFontsSize}
            fontFamily={theme.fonts.nanumGothic}
            focusBorderColor={theme.colors.brandColor1}
            placeholder="Enter your name"
            {...register('name', registerOptions.name)}
            autoComplete="off"
          />
          <div className="error-message">
            {errors?.name && errors.name.message}
          </div>
        </FormControl>
        <FormControl marginTop={20} height="5rem">
          <FormLabel fontSize="1.6rem" fontFamily={theme.fonts.nunito}>
            Email
          </FormLabel>
          <Input
            size="lg"
            variant="flushed"
            fontSize={theme.sizes.bodyFontsSize}
            fontFamily={theme.fonts.nanumGothic}
            focusBorderColor={theme.colors.brandColor1}
            placeholder="Enter your email address"
            {...register('email', registerOptions.email)}
            autoComplete="off"
          />
          <div className="error-message">
            {errors?.email && errors.email.message}
          </div>
        </FormControl>
        <FormControl marginTop={20} height="5rem">
          <FormLabel fontSize="1.6rem" fontFamily={theme.fonts.nunito}>
            Message
          </FormLabel>
          <Textarea
            {...register('message', registerOptions.message)}
            variant="flushed"
            size="lg"
            placeholder="Enter your message"
            fontSize={theme.sizes.bodyFontsSize}
            fontFamily={theme.fonts.nanumGothic}
            focusBorderColor={theme.colors.brandColor1}
            height={50}
          />
          <div className="error-message">
            {errors?.message && errors.message.message}
          </div>
        </FormControl>
        <div className="form-footer">
          {emailError ? (
            <div className="email-error-message">Failed</div>
          ) : null}
          {emailSuccess ? (
            <div className="email-success-message">Sent</div>
          ) : null}
          {emailSending ? (
            <div className="loading">
              <Spinner color={theme.colors.brandColor1} />
            </div>
          ) : null}
          <Button
            fontSize="1.6rem"
            fontFamily={theme.fonts.nunito}
            type="submit"
            size="md"
            variant="link"
          >
            Submit
          </Button>
        </div>
      </form>
    </Container>
  );
};

export default EmailContactForm;
