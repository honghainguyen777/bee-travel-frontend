import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import "./Mapbox.css";
import { fetchTop10Cities, fetchCities } from '../../actions';
import Search from './Search';

import mapboxgl from 'mapbox-gl/dist/mapbox-gl-csp';
// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;
mapboxgl.accessToken = 'pk.eyJ1Ijoiam5yZG1ubiIsImEiOiJja2wxN3VtY28zaDdlMm5xbjV5Znh0YnBpIn0.s0Cz8vhJe3T1N2wvocwFzw';




class Mapbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: "",
        };
        this.generateMarker = this.generateMarker.bind(this);
        this.divGenerator = this.divGenerator.bind(this);
        this.mapLookup = this.mapLookup.bind(this);
        this.mapDragTo = this.mapDragTo.bind(this);
        this.map = null;
        this.markers = [];
        this.mapContainer = React.createRef();
    }
      // for each city
      divGenerator (city, index) {
        let cardColor = index%2===0 ? "card-color-1" : "card-color-2";
        return (
          <div key={city._id} className={`card-city row ${cardColor} mb-1`}>
            <div className="col-8">
              <h4 className="text-white">{city.name}</h4>
              <h5>{city.country}</h5>
            </div>
            <div className="col-4 d-flex justify-content-end">
                <form onSubmit={this.mapLookup}>
                    <input type="hidden" name="long" value={city.loc.coordinates[0]}/>
                    <input type="hidden" name="lat" value={city.loc.coordinates[1]}/>
                    <button className="link-btn btn-view">Map</button>
                </form>
              <Link to={`/details/${city._id}`} className="link-btn btn-view">Detail</Link>
            </div>
          </div>
        );
      }
    generateMarker(longitude, latitude, map) {
      console.log("map", map)
        const marker = new mapboxgl.Marker({
          scale: 1,
          color: 'red',
        })
          .setLngLat([longitude, latitude])
          .addTo(map);
        this.markers.push(marker);
      }
    
    mapLookup(event) {
        event.preventDefault();
        const { long, lat } = event.target
        this.map.flyTo({center: [Number(long.value), Number(lat.value)], zoom: 9});
    }

    mapDragTo(coord) {
        console.log(coord)
        this.map.flyTo({center: coord, zoom: 9});
    }

    removeAllPreviousMarkers() {
        this.markers.forEach(marker => marker.remove());
    }

    

    componentDidMount() {
        this.map = new mapboxgl.Map({
            container: this.mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11', // style URL
            center: [13.4, 13.4], // starting position [lng, lat]
            zoom: 1, // starting zoom
            doubleClickZoom: true,
          });
        const nav = new mapboxgl.NavigationControl();
        this.map.addControl(nav, 'top-left');
        this.props.fetchTop10Cities()
    }

    render() {

        return(
            <div className=" m-2">
                <Search />
                <h3 className="text-center">Favorite cities in the world</h3>
                <div className="row m-0 container-city">
                    <div className="col-lg-6 col-sm-12" id="search-result">
                        { this.props.searched ? this.mapDragTo(this.props.cities[0].loc.coordinates) : ""}
                        { this.props.searched ? this.removeAllPreviousMarkers() : "" }
                        {!this.props.cities || !this.map ? "" : this.props.cities.map((city, index) => {
                            this.generateMarker(city.loc.coordinates[0], city.loc.coordinates[1], this.map);
                            return this.divGenerator(city, index);
                        })}
                    </div>
                    <div id='map' ref={this.mapContainer} className="col-lg-6 col-sm-12 pl-0"></div>

                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { cities: state.map.cities, searched: state.map.searched };
}

// export default Mapbox;
export default connect(mapStateToProps, { fetchTop10Cities, fetchCities })(Mapbox);