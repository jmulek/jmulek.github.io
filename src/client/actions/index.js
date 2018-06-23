import {landingPageAPI} from './../endpoints';

export const fetchPost = (postID) => async (dispatch, getState, api) => {

    const _query = {
        query: `{
            Blog(slug: "${postID}"){
              id
                postTitle
                shortdescription
                imageURL {
                  id
                  handle
                  url
                }
            }
        }`
    };

    await api.post(landingPageAPI, _query).then(response => {
        dispatch({
            type: 'FETCH_POST',
            payload: response.data
        })
    }).catch((err) => {
        console.log('error', err);
    })

};

export const fetchPosts = () => async (dispatch, getState, api) => {

    const _query = {
        query: `{
          allBlogs {
            id
            slug
            postTitle
            shortdescription
            imageURL {
              id
              fileName
              handle
              url
              mimeType
              size
            }
          }
        }`
    };

    await api.post(landingPageAPI, _query).then(response => {
        dispatch({
            type: 'FETCH_POSTS',
            payload: response.data
        })
    }).catch((err) => {
        console.log('error', err);
    })

};

export const clearPostData = () => (dispatch) => {
    dispatch({
        type: 'CLEAR_POST_DATA'
    })
};
