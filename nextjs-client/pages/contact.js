import { useMemo } from 'react';
import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api';
import { theme } from '@styles/theme';
import Layout from '@components/Layout';
import styled from '@emotion/styled';
import EmailContactForm from '@components/EmailContactForm';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  .top-box {
    display: flex;
    justify-content: center;

    .title {
      letter-spacing: 0.1rem;
      font-size: ${theme.sizes.fontsTitleSize};
      font-family: ${theme.fonts.nanumGothic};
      text-align: center;
      margin-top: 7rem;
    }
  }

  .bottom-box {
    display: flex;
    justify-content: space-around;
    padding: 7rem;

    .location-title {
      font-size: 1.5rem;
      padding: 2rem 0;
    }

    .location-content {
      font-size: ${theme.sizes.bodyFontsSize};
    }
  }

  .left-box {
    width: 60rem;
    background-color: pink;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .right-box {
    width: 60rem;
    background-color: violet;
  }
`;

const MapContainer = styled.div`
  width: 40rem;
  height: 40rem;
  background-color: grey;

  .map-container {
    width: 100%;
    height: 100%;
  }
`;

export default function Contact() {
  // const { isLoaded } = useLoadScript({
  //   googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  // });

  // if (!isLoaded) return <div>Loading...</div>;

  return (
    <Container>
      <div className="top-box">
        <h1 className="title">Contact & Location</h1>
      </div>
      <div className="bottom-box">
        <div className="left-box">
          <div className="map-wrapper">
            <Map />
            <div className="location-wrapper">
              <h2 className="location-title">Studio Location</h2>
              <p className="location-content">
                Irvine Blvd - Yale <br />
                Irvine, CA <br />
                United States
              </p>
            </div>
          </div>
        </div>

        <div className="right-box">
          <div className="section-title"></div>
          <div className="section-content">
            <EmailContactForm />
          </div>
        </div>
      </div>
    </Container>
  );
}

Contact.getLayout = function getLayout(page) {
  return <Layout currentPage="contact">{page}</Layout>;
};

function Map() {
  // const center = useMemo(() => ({ lat: 33.669445, lng: -117.823059 }), []);
  return (
    <MapContainer>
      {/* <GoogleMap
        zoom={10}
        center={center}
        mapContainerClassName="map-container"
      >
        <MarkerF position={{ lat: 33.7144, lng: -117.761 }} />
      </GoogleMap> */}
    </MapContainer>
  );
}
