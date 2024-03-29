import { useMemo } from 'react';
import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api';
import { theme } from '@styles/theme';
import Layout from '@components/Layout';
import styled from '@emotion/styled';
import EmailContactForm from '@components/EmailContactForm';
import Overlay from '@components/Overlay';
import { contactMaintenanceQuery } from 'src/sanity/queries/page-maintenance';
import client from '../src/sanity/client';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  .top-box {
    display: flex;
    justify-content: center;

    .title {
      letter-spacing: 0.1rem;
      font-size: ${theme.sizes.fontsTitleSize};
      font-family: ${theme.fonts.nanumGothic};
      color: ${theme.colors.greyText};
      text-align: center;
      margin: 7rem 0;
    }
  }

  .bottom-box {
    display: flex;
    justify-content: center;
    padding: 0 4rem;
    padding-bottom: 7rem;

    .location-wrapper {
      font-family: ${theme.fonts.nanumGothic};
      .location-title {
        font-size: 1.5rem;
        padding: 2rem 0 1rem 0;
      }

      .location-content {
        font-size: ${theme.sizes.bodyFontsSize};
      }
    }
  }

  .left-box {
    width: 38%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1% 2%;

    .map-wrapper {
      width: 100%;
    }
  }
  .right-box {
    width: 40%;
    padding: 1% 5%;
  }

  ${theme.mediaQuery.tablet} {
    .bottom-box {
      flex-direction: column;
      align-items: center;
    }

    .left-box {
      width: 80%;
    }

    .right-box {
      margin-top: 10rem;
      width: 80%;
      padding: 1%;
    }
  }

  ${theme.mediaQuery.smallScreen} {
    .title {
      margin-bottom: 4rem;
    }

    .bottom-box {
      flex-direction: column;
      align-items: center;
      padding: 1rem;
    }

    .left-box {
      width: 90%;
    }

    .right-box {
      padding: 1rem;
      margin-bottom: 5rem;
      width: 90%;
      margin-top: 7rem;
    }
  }
`;

const MapContainer = styled.div`
  height: 35rem;

  background-color: grey;

  .map-container {
    width: 100%;
    height: 100%;
  }
`;

export default function Contact({ data }) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  const isUnderMaintenance =
    data.isUnderMaintenanceData?.[0].contact_under_maintenance;

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <Container>
      {isUnderMaintenance && (
        <Overlay
          krMessage={'페이지 업데이트 중입니다.'}
          engMessage={'The page is being updated.'}
        />
      )}
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
          <EmailContactForm />
        </div>
      </div>
    </Container>
  );
}

Contact.getLayout = function getLayout(page) {
  return <Layout currentPage="contact">{page}</Layout>;
};

function Map() {
  const center = useMemo(() => ({ lat: 33.7144, lng: -117.761 }), []);
  return (
    <MapContainer>
      <GoogleMap
        zoom={15}
        center={center}
        mapContainerClassName="map-container"
        options={{
          streetViewControl: false,
          mapTypeControl: false,
        }}
      >
        <MarkerF position={{ lat: 33.7144, lng: -117.761 }} />
      </GoogleMap>
    </MapContainer>
  );
}

export async function getStaticProps() {
  const isUnderMaintenanceData = await client.fetch(contactMaintenanceQuery);

  const data = { isUnderMaintenanceData };

  return {
    props: {
      data,
    },
  };
}
