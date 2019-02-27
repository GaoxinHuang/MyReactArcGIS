import * as React from 'react';
import { loadModules } from 'react-arcgis';

export default class MyFeatureLayer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            MapView: null
        };
    }

    render() {
        return null;
    }

    componentWillMount() {
        loadModules(["esri/views/MapView"]).then(([ MapView ]) => {
            var view = new MapView({
                map: myMap,  // References a Map instance
                container: "viewDiv"  // References the ID of a DOM element
              });
              this.setState({ MapView });
              this.props.map.add(MapView);
        }).catch((err) => console.error(err));
    }

    componentWillUnmount() {
        this.props.map.remove(this.state.MapView);
    }
}