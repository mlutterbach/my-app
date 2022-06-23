import { Marker } from "react-mapbox-gl";
import './FlatMarker.scss'

const FlatMarker = ({ lat, lng, price, selected, onSelect }) => {
  const classNames = selected ? 'marker selected' : 'marker';

  return (
    <Marker coordinates={[lng, lat]} anchor="bottom" onClick={onSelect}>
      <strong className={classNames}>{price}</strong>
    </Marker>
  );
};

export default FlatMarker;
