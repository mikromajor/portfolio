import { FC } from "react";
import GoogleMapReact from "google-map-react";

// const AnyReactComponent: FC<{
//   lat: number;
//   lng: number;
//   text: string;
// }> = ({ text }) => <div>{text}</div>;

export const MyGoogleMap: FC = () => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {/* <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="Alexander's Marker"
        /> */}
      </GoogleMapReact>
    </div>
  );
};
