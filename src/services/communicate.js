//a fake lib to talk to the server
//TODO make it real
//reqT
//reqTList
//reqMatch
//createT
//saveT
//
import AppActions from "../actions/appActions.js";
var ajax = reqwest;

var Comm = {

  //Decide which page to show, then request the data of that page.
  //Usually for applying new route
  reqPage: function(req){
    switch (req.page) {
      case "viewT":
        this.reqT(req.params);
        break;
      case 'createT':
        break;
      case 'match':
        break;
      case 'calendar':
        break;
      case 'likes':
        break;
      default:
        this.reqTList(req.params);
    }
  },

  //request splash data from local storage
  reqSplash: function(){
    return {
      "mode": "non-intro",
      "content": "Loading..."
    };
  },

  //request tournament json
  reqT: function(tID) {
    console.log("request T");
    ajax({
      url: './demoT.json',//TODO diffs when not in dev mode
      //type: 'html',
      success: function(resp) {
        AppActions.loadPage({
          page: "viewT",
          T: resp
        });
      },
      error: function(){

      }
    });
  },

  reqTList: function(params) {
    console.log("requesting discover list");
    //if no keywords, then send hot tournaments list as default
    if (!params.keywords) {
      let list = {
        "page": "discover",
        lists: [
          {
            listName: "Hot",
            listItems: [
              {
                itemName: "demo T",
                id: "asdf1",
                pic: "",
                kind: "",
                location: ""
              },
              {
                itemName: "demo T 2",
                id: "qwer2",
                pic: "",
                kind: "",
                location: ""
              }
            ]
          }
        ]
      };
      window.setTimeout(function(){
        AppActions.loadPage(list);
      }, 1000);
    }
  },

  //request match details from server
  reqMatch: function(){
    console.log("request match");
  },

  login: function(){//TODO just lonin as sheldon and give some fake data

  },

  logout: function(){

  }


};

export default Comm;