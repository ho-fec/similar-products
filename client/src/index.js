import React from 'react';
import { render } from 'react-dom';
import SimilarApp from './components/SimilarApp';
import LikeApp from './components/LikeApp';

render(<SimilarApp />, document.getElementById('similar'));
render(<LikeApp />, document.getElementById('youMayLike'));