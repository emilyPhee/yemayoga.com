import Layout from '@components/Layout';

export default function Contact() {
  return <h1>Contact Page</h1>;
}

Contact.getLayout = function getLayout(page) {
  return <Layout currentPage="contact">{page}</Layout>;
};
