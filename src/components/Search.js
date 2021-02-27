import React from 'react';

class Search extends React.Component {
    render() {
        return (
            <div className="container-md ml-3 mr-3 search">
                <form id="search-form" className="form-inline d-flex justify-content-center" onsubmit="submitForm(); return false" >
                <input className="form-control mr-sm-2" type="text" name="query" id="query" placeholder="Your favorite city" aria-label="Search" required />
                <button className="btn btn-outline-success my-2 my-sm-0">Search</button>
                </form>
                <h3 className="text-center">Favorite cities in the world</h3>
                <div className="row m-0 container-city">
                    <div className="col-lg-6 col-sm-12" id="search-result">
                    </div>

                    <div id='map' class="col-lg-6 col-sm-12 pl-0"></div>
                </div>
        )
    }
}








{/* <div class="container-md ml-3 mr-3 search">
  <form id="search-form" class="form-inline d-flex justify-content-center" onsubmit="submitForm(); return false">
    <input class="form-control mr-sm-2" type="text" name="query" id="query" placeholder="Your favorite city" aria-label="Search" required>
    <button class="btn btn-outline-success my-2 my-sm-0">Search</button>
  </form>
  <h3 class="text-center">Favorite cities in the world</h3>
  <div class="row m-0 container-city">
    <div class="col-lg-6 col-sm-12" id="search-result">
      {{!-- <div id="search-result">
        <ul id="city-list"></ul>
      </div> --}}
    </div>

      <div id='map' class="col-lg-6 col-sm-12 pl-0"></div>

  </div>
</div> */}
{/* <script src="/js/citySearch.js"></script> */}