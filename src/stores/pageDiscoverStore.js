/*
 * Title: pageDiscover store
 * Description:
 * @start
 * @errHandler
 * @
 */

import AppDispatcher from '../dispatchers/appDispatcher.js';
import {EventEmitter} from 'events';
import AppConstants from '../constants/appConstants.js';
import assign from 'object-assign';

var CHANGE_EVENT = 'change';
var lists = [];

var PageDiscoverStore = assign({}, EventEmitter.prototype,{

  emitChange: function(){
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback){
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback){
    this.removeListener(CHANGE_EVENT, callback);
  },

  getLists: function(){
    return lists;
  }
});

AppDispatcher.register(function(payload){
  switch(payload.action.actionType) {
    case AppConstants.LOAD_PAGE:
      console.log('dispatching action ' + payload.action.actionType + ' to pageDiscoverStore');
      if (payload.action.content.page !== 'discover'){
        break;
      }
      lists = payload.action.content.lists;
      PageDiscoverStore.emitChange();
      break;
    case AppConstants.SHOW_SPINNER:

      break;
    default:
      // no op
  }
});

export default PageDiscoverStore;
