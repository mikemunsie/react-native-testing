export const GIPHY_SEARCH = 'GIPHY_SEARCH';
export const GIPHY_RECEIVE_SEARCH = 'GIPHY_RECEIVE_SEARCH';

function search(criteria) {
  return {
    type: GIPHY_SEARCH,
    criteria
  }
}

function receiveSearch(criteria, json) {
  return {
    type: GIPHY_RECEIVE_SEARCH,
    criteria,
    posts: json
  }
}

export function fetchPosts(criteria) {
  return (dispatch) => {
    dispatch(search(criteria));
    setTimeout(() => dispatch(receiveSearch(criteria, [])), 1000);
    /*
    request.get("http://api.giphy.com/v1/gifs/search?q=" + criteria + "&api_key=dc6zaTOxFJmzC&limit=5")
    .accept('json')
    .end((err, {body}) => {
      this.giphySearchCall = false;
      dispatch(receiveSearch(criteria, body.data));
      dispatch(isLoading(false));
    });
    */
  };
}