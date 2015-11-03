import BaseStore from './BaseStore';
import AppConstants from '../constants/appConstants.js';
import EditTConstants from '../constants/editTConstants.js';
import {newTBD, newStage, newGroupDual} from '../utils/appConfig.js';

var _flags = {
  // Indicates whether to rerender pageEdit component.
  rerender: false,
  // TODO Indecates whether the T is edited, to determine to save T or not.
  modified: false,
  editMode: false,
};
var Tjson;

class PageEditTStore extends BaseStore {

  constructor() {
    super();
    this.subscribe(function(payload) {
      switch (payload.action.actionType){
        case AppConstants.LOAD_PAGE:
          console.log( 'dispatching action ' + payload.action.actionType + ' to PageEditTStore' );
          if (payload.action.content.page !== 'editT') {
            break;
          }
          Tjson = payload.action.content.Tjson;
          _flags.editMode = payload.action.content.editMode;
          _flags.rerender = true;
          _flags.modified = payload.action.content.modified;
          this.emitChange();
          _flags.rerender = false;
          break;
        case EditTConstants.ADD_STAGE:
          console.log( 'dispatching action ' + payload.action.actionType + ' to PageEditTStore' );
          let stageContent = newStage(payload.action.stageIndex);
          //Add stage into Tjson
          Tjson.stages.splice(payload.action.stageIndex, 0, stageContent);
          _flags.rerender = true;
          _flags.modified = true;
          this.emitChange();
          _flags.rerender = false;
          break;
        case EditTConstants.REMOVE_STAGE:
          console.log( 'dispatching action ' + payload.action.actionType + ' to PageEditTStore' );
          Tjson.stages.splice(
            payload.action.stageIndex, 1
          );
          _flags.rerender = true;
          _flags.modified = true;
          this.emitChange();
          _flags.rerender = false;
          break;
        case EditTConstants.TOGGLE_STAGE:
          console.log( 'dispatching action ' + payload.action.actionType + ' to PageEditTStore' );
          Tjson.stages[payload.action.stageIndex].expand = !Tjson.stages[payload.action.stageIndex].expand;
          _flags.rerender = true;
          _flags.modified = true;
          this.emitChange();
          _flags.rerender = false;
          break;
        case EditTConstants.SET_GROUP_FORMAT:
          console.log( 'dispatching action ' + payload.action.actionType + ' to PageEditTStore' );
          Tjson.stages[payload.action.stageIndex].groups[payload.action.groupIndex] =
            this._setGroupFormat(
              payload.action.format, payload.action.number,
              payload.action.groupIndex
            );
          _flags.rerender = true;
          _flags.modified = true;
          this.emitChange();
          _flags.rerender = false;
          break;
        case EditTConstants.ADD_GROUP:
          console.log( 'dispatching action ' + payload.action.actionType + ' to PageEditTStore' );
          let groupContent = newTBD();
          //Add group into Tjson
          Tjson.stages[payload.action.stageIndex].groups.splice(
            payload.action.groupIndex, 0, groupContent
          );
          _flags.rerender = true;
          _flags.modified = true;
          this.emitChange();
          _flags.rerender = false;
          break;
        case EditTConstants.REMOVE_GROUP:
          console.log( 'dispatching action ' + payload.action.actionType + ' to PageEditTStore' );
          Tjson.stages[payload.action.stageIndex].groups.splice(
            payload.action.groupIndex, 1
          );
          _flags.rerender = true;
          _flags.modified = true;
          this.emitChange();
          _flags.rerender = false;
          break;
        case EditTConstants.MOVE_GROUP_UP:
          console.log( 'dispatching action ' + payload.action.actionType + ' to PageEditTStore' );
          if (!payload.action.groupIndex) {
            break;
          }
          let groups1 = Tjson.stages[payload.action.stageIndex].groups;
          let swap1 = groups1[payload.action.groupIndex - 1];
          groups1[payload.action.groupIndex - 1] = groups1[payload.action.groupIndex];
          groups1[payload.action.groupIndex] = swap1;
          _flags.rerender = true;
          _flags.modified = true;
          this.emitChange();
          _flags.rerender = false;
          break;
        case EditTConstants.MOVE_GROUP_DOWN:
          console.log( 'dispatching action ' + payload.action.actionType + ' to PageEditTStore' );
          let groups2 = Tjson.stages[payload.action.stageIndex].groups;
          if (payload.action.groupIndex >= groups2.length - 1) {
            break;
          }
          let swap2 = groups2[payload.action.groupIndex + 1];
          groups2[payload.action.groupIndex + 1] = groups2[payload.action.groupIndex];
          groups2[payload.action.groupIndex] = swap2;
          _flags.rerender = true;
          _flags.modified = true;
          this.emitChange();
          _flags.rerender = false;
          break;
        case EditTConstants.COPY_GROUP:
          console.log( 'dispatching action ' + payload.action.actionType + ' to PageEditTStore' );
          Tjson.stages[payload.action.stageIndex].groups.splice(
            payload.action.groupIndex, 0, payload.action.groupData
          );
          _flags.rerender = true;
          _flags.modified = true;
          this.emitChange();
          _flags.rerender = false;
          break;
        case EditTConstants.EDIT_GROUP_INFO:
          console.log( 'dispatching action ' + payload.action.actionType + ' to PageEditTStore' );
          let group = Tjson.stages[payload.action.stageIndex].groups[payload.action.groupIndex];
          [group.name, group.status, group.location, group.when] = payload.action.groupInfo;
          _flags.rerender = true;
          _flags.modified = true;
          this.emitChange();
          _flags.rerender = false;
          break;
        case EditTConstants.CHANGE_GROUP_PLAYERS:
          console.log( 'dispatching action ' + payload.action.actionType + ' to PageEditTStore' );
          Tjson.stages[payload.action.stageIndex].groups[payload.action.groupIndex].players = payload.action.groupPlayers;
          _flags.rerender = true;
          _flags.modified = true;
          this.emitChange();
          _flags.rerender = false;
          break;
        case EditTConstants.EDIT_SCOREBOARD:
          console.log( 'dispatching action ' + payload.action.actionType + ' to PageEditTStore' );
          Tjson.stages[payload.action.stageIndex].groups[payload.action.groupIndex].scores = payload.action.scores;
          _flags.rerender = true;
          _flags.modified = true;
          this.emitChange();
          _flags.rerender = false;
          break;
        case EditTConstants.EDIT_MATCHES:
          console.log( 'dispatching action ' + payload.action.actionType + ' to PageEditTStore' );
          Tjson.stages[payload.action.stageIndex].groups[payload.action.groupIndex].matches = payload.action.matches;
          _flags.rerender = true;
          _flags.modified = true;
          this.emitChange();
          _flags.rerender = false;
          break;
        case EditTConstants.EDIT_STAGE_INFO:
          console.log( 'dispatching action ' + payload.action.actionType + ' to PageEditTStore' );
          let stage = Tjson.stages[payload.action.stageIndex];
          [stage.name, stage.status, stage.location, stage.when] = payload.action.stageInfo;
          _flags.rerender = true;
          _flags.modified = true;
          this.emitChange();
          _flags.rerender = false;
          break;
        case EditTConstants.EDIT_T_INFO:
          console.log( 'dispatching action ' + payload.action.actionType + ' to PageEditTStore' );
          [Tjson.name, Tjson.game, Tjson.status, Tjson.location, Tjson.brief, Tjson.when] = payload.action.TInfo;
          _flags.rerender = true;
          _flags.modified = true;
          this.emitChange();
          _flags.rerender = false;
          break;
        default:
          // no op

      }
    }.bind( this ));
  }

  get modified(){
    return _flags.modified;
  }

  get editMode(){
    return _flags.editMode;
  }

  //Generate initial group data
  _setGroupFormat(format, number, groupIndex){
    var target;
    switch (format) {
      case 'elimination':
        switch (number) {
          case 4:
            break;
          case 8:
            break;
          case 16:
            break;
          case 32:
            break;
          case 64:
            break;
        }
        break;
      case 'groupDual':
        target = newGroupDual(groupIndex);
        break;
    }
    return target;
  }

  get flags(){
    return _flags;
  }

  get Tjson(){
    return Tjson;
  }
}

export default new PageEditTStore();
