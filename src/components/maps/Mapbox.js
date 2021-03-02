import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import "./Mapbox.css";
import { fetchTop10Cities, fetchCities } from '../../actions';
import Search from './Search';
import Sidebar from './Sidebar';
import empty_heart from './empty_heart.png';

import mapboxgl from 'mapbox-gl/dist/mapbox-gl-csp';
// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;
mapboxgl.accessToken = 'pk.eyJ1Ijoiam5yZG1ubiIsImEiOiJja2wxN3VtY28zaDdlMm5xbjV5Znh0YnBpIn0.s0Cz8vhJe3T1N2wvocwFzw';




class Mapbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: "",
            contentContainerWidth: 0,
        };
        this.generateMarker = this.generateMarker.bind(this);
        this.divGenerator = this.divGenerator.bind(this);
        this.mapLookup = this.mapLookup.bind(this);
        this.mapDragTo = this.mapDragTo.bind(this);
        this.map = null;
        this.markers = [];
        this.mapContainer = React.createRef();
        this.contentContainer = React.createRef();
    }
      divGenerator (city, index) {
        return (
          <div key={city._id} className={`card-city row ml-3 mr-1 mt-3`}>
            <div className="city-header w-100 d-flex justify-content-between align-items-center px-3 py-1">
              <Link className="city-header-name" to={`/details/${city._id}`}><h4>{city.name}</h4></Link>
              <img className="heart" src={empty_heart} alt="empty heart"/>
            </div>
            <div className="city-body px-3 w-100">
              <p className="m-0">Country: {city.country}</p>
              <p className="m-0">Population: {city.population} people</p>
            </div>
            <div className="d-flex justify-content-end align-items-center w-100">
                <form onSubmit={this.mapLookup}>
                    <input type="hidden" name="long" value={city.loc.coordinates[0]}/>
                    <input type="hidden" name="lat" value={city.loc.coordinates[1]}/>
                    <button className="test">View on Map</button>
                </form>
              <Link to={`/details/${city._id}`} className="test">City Weather</Link>
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
        this.map.addControl(nav, 'top-right');
        this.props.fetchTop10Cities();
        let contentContainerWidth = this.contentContainer.current.offsetWidth;
        if (contentContainerWidth < 1000) {
          contentContainerWidth = 1000;
        }
        this.setState({contentContainerWidth: contentContainerWidth});
    }

    render() {
        console.log(this.state.contentContainerWidth)
        return(
            <div className=" m-2" className="container-city" ref={this.contentContainer}>
                <Search />
                    { !this.state.contentContainerWidth ? null :
                      <Sidebar width={this.state.contentContainerWidth * 0.4} height={"100vh"}>
                        { this.props.searched ? this.mapDragTo(this.props.cities[0].loc.coordinates) : ""}
                        { this.props.searched ? this.removeAllPreviousMarkers() : "" }
                        {!this.props.cities || !this.map ? "" : this.props.cities.map((city, index) => {
                            this.generateMarker(city.loc.coordinates[0], city.loc.coordinates[1], this.map);
                            return this.divGenerator(city, index);
                        })}
                    </Sidebar>
                    }
                    <div id='map' ref={this.mapContainer} className="pl-0"></div>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return { cities: state.map.cities, searched: state.map.searched };
}

// export default Mapbox;
export default connect(mapStateToProps, { fetchTop10Cities, fetchCities })(Mapbox);