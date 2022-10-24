import Layout from '@components/Layout';
import styled from '@emotion/styled';
import EmailContactForm from '@components/EmailContactForm';

const Container = styled.div`
  width: 100%;
`;

export default function Contact() {
  return (
    <Container>
      <div className="section-title"></div>
      <div className="section-content">
        <EmailContactForm />
      </div>
    </Container>
  );
}

Contact.getLayout = function getLayout(page) {
  return <Layout currentPage="contact">{page}</Layout>;
};
