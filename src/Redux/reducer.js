import {
  FILTER_DATA,
  GET_CLICKED_MOVIE_FAILURE,
  GET_CLICKED_MOVIE_REQ,
  GET_CLICKED_MOVIE_SUCCESS,
  GET_MOVIE_FAILURE,
  GET_MOVIE_REQ,
  GET_MOVIE_SUCCESS,
} from "./actionTypes";

const initState = {
  data: [],
  filterData: [],
  isLoading: false,
  isError: false,
  selectedData:{}
};

export const Reducer = (state = initState, { type, payload }) => {
  // add the switch statement for different actions
  switch (type) {
    case GET_MOVIE_REQ:
      return {
        ...state,
        isLoading: true,
      };
    case GET_MOVIE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: [...payload],
        filterData: [...payload],
        isError: false,
      };
    case GET_MOVIE_FAILURE:
      return {
        ...state,
        isLoading: false,
        data: [],
        isError: true,
      };

    case FILTER_DATA:
      return {
        ...state,
        filterData: state.data.filter((el) => {
          let genre = el.genre.trim().split("|");
          return genre.indexOf(payload) != -1;
        }),
      };

    case GET_CLICKED_MOVIE_REQ:
      return {
        ...state,
        isLoading: true,
      };
    case GET_CLICKED_MOVIE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        selectedData: payload,
        isError: false,
      };
    case GET_CLICKED_MOVIE_FAILURE:
      return {
        ...state,
        isLoading: false,
        selectedData: {},
        isError: true,
      };
    default:
      return state;
  }
};
