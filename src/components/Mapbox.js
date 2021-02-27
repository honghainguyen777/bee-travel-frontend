import React from 'react';
import mapboxgl from "mapbox-gl";
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./Mapbox.css";


class Mapbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: "",
            markers: [],
            cities: [],
        }
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.formSubmitHandler = this.formSubmitHandler.bind(this);
        this.initializeMap = this.initializeMap.bind(this);
        this.cityGenerator = this.cityGenerator.bind(this);
        this.divGenerator = this.divGenerator.bind(this);
        this.mapLookup = this.mapLookup.bind(this);
        this.map = null;
    }

    async formSubmitHandler(event) {
        event.preventDefault();
        const response = await axios.get('/search/searchInit');
        // console.log(response.data);
    }
    
    onChangeHandler(event) {
        const { name, value } = event.target;
        this.setState(() => ({[name]: value}));
    }

    // initialize top 10 cities
    async initializeMap () {
        const top10Cities = (await axios.get('search/searchInit')).data;
        // console.log(top10Cities);
        this.cityGenerator(top10Cities);
        this.setState(() => ({cities: top10Cities}));
    }

    cityGenerator(cities) {
        cities.forEach((city, i) => {
        //   divGenerator(city, i);
          this.generateMarker(city.loc.coordinates[0], city.loc.coordinates[1], this.map);
        });
      }

      divGenerator (city, index) {
        let cardColor = index%2===0 ? "card-color-1" : "card-color-2";
        // console.log(city.loc.coordinates);
        return (
          <div class={`card-city row ${cardColor} mb-1`}>
            <div class="col-8">
              <h4 class="text-white">{city.name}</h4>
              <h5>{city.country}</h5>
            </div>
            <div class="col-4 d-flex justify-content-end">
                <form onSubmit={this.mapLookup}>
                    <input type="hidden" name="long" value={city.loc.coordinates[0]}/>
                    <input type="hidden" name="lat" value={city.loc.coordinates[1]}/>
                    <button class="link-btn btn-view">Map</button>
                </form>
              <Link to={`/details/${city._id}`} className="link-btn btn-view">Detail</Link>
            </div>
          </div>
        );
      }
    generateMarker(longitude, latitude, map) {
        const marker = new mapboxgl.Marker({
          scale: 1,
          color: 'red',
        })
          .setLngLat([longitude, latitude])
          .addTo(map);
        const markers = [...this.state.markers, marker];
        this.setState({markers: markers});
      }
    
    mapLookup(event) {
        event.preventDefault();
        const { long, lat } = event.target
        console.log(long.value, lat.value)
        this.map.flyTo({center: [Number(long.value), Number(lat.value)], zoom: 9});
    }
    // removeMarkers() {
    //     this.map.removeLayer(marker);
    // }

    componentDidMount() {
        mapboxgl.accessToken = 'pk.eyJ1Ijoiam5yZG1ubiIsImEiOiJja2wxN3VtY28zaDdlMm5xbjV5Znh0YnBpIn0.s0Cz8vhJe3T1N2wvocwFzw';
        this.map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11', // style URL
            center: [13.4, 13.4], // starting position [lng, lat]
            zoom: 1, // starting zoom
            doubleClickZoom: true,
          });
        const nav = new mapboxgl.NavigationControl();
        this.map.addControl(nav, 'top-left');
        this.initializeMap();
    }

    render() {
        return(
            <div className="container-md ml-3 mr-3 search">
                <form id="search-form" className="form-inline d-flex justify-content-center" onSubmit={this.formSubmitHandler}>
                    <input onChange={this.onChangeHandler} className="form-control mr-sm-2" type="text" name="query" id="query" placeholder="Your favorite city" aria-label="Search" required />
                    <button className="btn btn-outline-success my-2 my-sm-0">Search</button>
                </form>
                <h3 className="text-center">Favorite cities in the world</h3>
                <div className="row m-0 container-city">
                    <div className="col-lg-6 col-sm-12" id="search-result">
                        {this.state.cities.map((city, index) => {
                            return this.divGenerator(city, index);
                        })}
                    </div>
                    {/* ref={el => this.mapContainer = el} */}
                    <div id='map' className="col-lg-6 col-sm-12 pl-0"></div>

                </div>
            </div>
        )
    }
}

export default Mapbox;