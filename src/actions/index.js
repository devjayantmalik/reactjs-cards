import {FETCH_POSTS} from './types';
import posts from '../data/posts';

export const fetchPosts = () => {
  return {
    type: FETCH_POSTS,
    payload: posts
  }
}
