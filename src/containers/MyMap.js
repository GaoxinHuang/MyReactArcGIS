import * as React from 'react';
import { Map, loadModules } from 'react-arcgis';
import MyFeatureLayer from './MyFeatureLayer';
import BermudaTriangle from './BermudaTriangle';

export default class MyMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mapView: null
    };
  }
  componentWillMount() {

    loadModules(["esri/views/MapView"]).then(([MapView]) => {
      let mapView = (<Map
        mapProperties={{ basemap: 'satellite' }}
        viewProperties={{
          center: [-70, 25],
          zoom: 4
        }}>
        <BermudaTriangle />
        <MyFeatureLayer
          featureLayerProperties={{
            url: 'http://sampleserver6.arcgisonline.com/arcgis/rest/services/WorldTimeZones/MapServer/0'
          }}
        >
        </MyFeatureLayer>

      </Map>)
      this.setState({ mapView: mapView });
    });
  }
  render() {

    return (
      <div className="App">
        {this.state.mapView}
      </div>
      // <Map
      //   mapProperties={{ basemap: 'satellite' }}
      //   viewProperties={{
      //     center: [-70, 25],
      //     zoom: 4
      //   }}>
      //   <BermudaTriangle />
      //   <MyFeatureLayer
      //     featureLayerProperties={{
      //       url: 'http://sampleserver6.arcgisonline.com/arcgis/rest/services/WorldTimeZones/MapServer/0'
      //     }}
      //   >
      //   </MyFeatureLayer>

      // </Map>
    )
  }
}
