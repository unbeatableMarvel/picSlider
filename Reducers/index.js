import {combineReducers} from 'redux';
import picLinkData from './picLinkData';
import reducer from './reducer';

const allReducers = combineReducers({
    picObject: picLinkData,
    clickPicManager: reducer
});

export default allReducers
