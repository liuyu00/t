export function newTBD(){
  return {
    name: '',
    format: 'tbd',
    when: '',
    location: '',
    links: {}
  };
}

export function newStage(stageIndex){
  return {
    'name': 'Stage ' + (stageIndex + 1),
    'groups': [
      newTBD()
    ],
    notes: []
  };
}

export function newT(){
  return {
    'id': '',
    'name': '',
    'brief': '',
    'sport': '',
    'series': '',
    'organizer': '',
    'sponsors': {},
    'format': '',
    'prize': {},
    'startDate': '',
    'duration': '',
    'others': '',
    'tier': '',
    'players': [

    ],
    'stages': [
      newStage(0)
    ]
  };
}

export function newGroupDual(groupIndex){
  return {
    name: 'Group ' + (groupIndex + 1),
    format: 'groupDual',
    when: '',
    location: '',
    links: {},
    scores: [
      {
        icon: '',
        tid: '',
        score: 0,
        points: 0,
        color: ''
      }
    ],
    matches: [
      {
        icon: '',
        note: '',
        players: [
          {
            tid: '',
            name: '',
            color: ''
          },
          {
            tid: '',
            name: '',
            color: ''
          }
        ]
      }
    ],
    notes: []
  };
}
