import React from "react";
import { fetchCity } from "../../actions";
import { connect } from "react-redux";
import "./City.css";
import TemChart from './TemChart';
import TempWeekList from './TempWeekList';
import VisitedModal from './VisitedModal';

class City extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.cityId = this.props.match.params.id;
  }

  componentDidMount() {
    this.props.fetchCity(this.cityId);
  }

  // city,summary, currentWeather, imageUrl, weatherMessage, username, currentDate

  render() {
    if (!this.props.city) return <h1>Loading</h1>;
    return (
      <div className="container d-flex justify-content-center flex-column align-items-center">
      <h1 className="text-center">{this.props.city.name} details</h1>
       <div className="d-flex align-items-center">
            <VisitedModal cityId={this.cityId} />
            <button type="button" className="btn btn-primary m-3" data-toggle="modal" data-target="#planningModal">
                <i className="fas fa-user-plus fa-lg"></i>
                <span className="md-hidden d-inline"> Not Yet? Plan to Visit</span>
            </button>
            <form action="/favorites" method="post">
                {/* <input type="hidden" name="id" value="{{city._id}}" />
                <input type="hidden" name="image" value="{{imageUrl}}" /> */}
                <button type="submit" className="btn btn-primary m-3"><span className="md-hidden d-inline"> Add to Favorites</span></button>
            </form>
        </div>
        <h2>Country: {this.props.city.country}</h2>
        <h4>Population: {this.props.city.population} citizens</h4>
        <h5 className="text-left" style={{width: "70%"}}><div dangerouslySetInnerHTML={{__html:this.props.summary}} /></h5>
        <h3 className="text-center">{this.props.city.name} weather</h3>
        <div className="container-weather">
          <div
            className="weather-side"
            style={{ backgroundImage: `url(${this.props.imageUrl})` }}
          >
            <div className="weather-gradient"></div>
            <div className="date-container">
              <h2 className="date-dayname">{this.props.currentDate.weekday}</h2>
              <span className="date-day">
                {this.props.currentDate.day}{" "}
                {this.props.currentDate.month_letters}{" "}
                {this.props.currentDate.year}
              </span>
              <i className="location-icon" data-feather="map-pin"></i>
              <span className="location">
                {this.props.city.name}, {this.props.city.country}
              </span>
            </div>
            <div className="weather-container">
              <i className="weather-icon" data-feather="sun"></i>
              <h1 className="weather-temp">
                {Math.round(this.props.currentWeather.main.temp)}°C
              </h1>
              <h3 className="weather-desc">
                {this.props.currentWeather.weather[0].main}
              </h3>
            </div>
          </div>
          <div className="info-side p-1">
            <div className="today-info-container pt-2">
              <div className="today-info p-0 mb-0 d-flex flex-column">
                <div className="humidity">
                  {" "}
                  <span className="title">HUMIDITY</span>
                  <span className="value">
                    {this.props.currentWeather.main.humidity}%
                  </span>
                </div>
                <div className="wind">
                  <span className="title">WIND</span>
                  <span className="value">
                    {this.props.currentWeather.wind.speed} km/h
                  </span>
                </div>
              </div>
            </div>
            <div className="week-container">
              {/* <canvas
                id="tempChart"
                className="p-3"
                width="500"
                height="200"
              ></canvas> */}
              <TemChart cityId={this.cityId}/>
              <TempWeekList />
            </div>
            <div className="week-container">
              <ul className="week-list mt-0" id="week-list"></ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  const {
    city,
    summary,
    currentWeather,
    imageUrl,
    weatherMessage,
    username,
    currentDate,
  } = state.city;
  return {
    city,
    summary,
    currentWeather,
    imageUrl,
    weatherMessage,
    username,
    currentDate,
  };
};

export default connect(mapStateToProps, { fetchCity })(City);
