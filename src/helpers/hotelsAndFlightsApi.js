import axios from "axios";

/**
 *
 * @param {number} lat
 * @param {number} long
 * @param {string} startDate
 * @param {string} endDate
 * @param {string} curr
 * @returns {Promise<object>}
 */
export const getHotelsByLatLong = (lat, long, startDate, endDate, curr) => {
  var options = {
    method: "GET",
    url: "https://hotels-com-provider.p.rapidapi.com/v1/hotels/nearby",
    params: {
      latitude: lat.toString(),
      currency: curr,
      longitude: long.toString(),
      checkout_date: endDate,
      sort_order: "STAR_RATING_HIGHEST_FIRST",
      checkin_date: startDate,
      adults_number: "1",
      locale: "en_US",
      // star_rating_ids: "3,4,5",
      page_number: "1",
      price_min: "10",
      // accommodation_ids: "20,8,15,5,1",
      // theme_ids: "14,27,25",
      // price_max: "500",
      // amenity_ids: "527,2063",
    },
    headers: {
      "x-rapidapi-host": "hotels-com-provider.p.rapidapi.com",
      "x-rapidapi-key": "eff4784f81msh8ff8e3ab38cf7c9p177661jsn1783a95944a5",
    },
  };
  return axios.request(options);
};

/**
 *
 * @param {string} city
 * @param {string} country
 * @returns {Promise<object>} Promise resolving to response object
 */
export const getAirports = (state, country) => {
  var options = {
    method: "GET",
    url: `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/${country}/CAD/en-US/`,
    params: { query: state },
    headers: {
      "x-rapidapi-host":
        "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
      "x-rapidapi-key": "eff4784f81msh8ff8e3ab38cf7c9p177661jsn1783a95944a5",
    },
  };

  return axios.request(options);
};

/**
 *
 * @param {string} origin - Place (airport) of departure
 * @param {string} dest - Place (airport) of arrival
 * @param {string} outboundDate - Date of departure
 * @returns {Promise<object>} Promise resolving to response object
 */
export const getFlights = (origin, dest, outboundDate, curr) => {
  var options = {
    method: "GET",
    url: `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/${curr}/en-US/${origin}/${dest}/${outboundDate}`,
    // params: { inboundpartialdate: ""},
    headers: {
      "x-rapidapi-host":
        "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
      "x-rapidapi-key": "eff4784f81msh8ff8e3ab38cf7c9p177661jsn1783a95944a5",
    },
  };
  return axios.request(options);
};
