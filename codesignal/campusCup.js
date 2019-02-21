function campusCup(e) {
  const dict = {};
  e.forEach(x => {
    if (!dict[x.split('@')[1]]) {
      dict[x.split('@')[1]] = {};
      dict[x.split('@')[1]]['points'] = 1;
    } else {
      dict[x.split('@')[1]]['points'] = dict[x.split('@')[1]]['points'] + 1;
    }
  });
  for (let key in dict) {
    dict[key]['points'] = dict[key]['points'] * 20;
  }
  for (let key in dict) {
    const points = dict[key]['points'];
    if (points < 100) {
      dict[key]['GB'] = 0;
    }
    if (points < 200 && points >= 100) {
      dict[key]['GB'] = 3;
    }
    if (points >= 200) {
      dict[key]['GB'] = 8;
    }
    if (points >= 300) {
      dict[key]['GB'] = 15;
    }
    if (points >= 500) {
      dict[key]['GB'] = 25;
    }
  }
  const keysSorted = Object.keys(dict).sort(function(a, b) {
    if (dict[a]['GB'] === dict[b]['GB']) {
      if (a.split('.')[0].length === b.split('.')[0].length) {
        if(a.split('.')[0] < b.split('.')[0]) { return -1; }
        if(a.split('.')[0] > b.split('.')[0]) { return 1; }
        return 0;
      }
      return a.length - b.length;
    }
    return a['GB'] - b['GB'];
  })
  console.log(dict)
  return keysSorted;
}

const emails = ["john.doe@mit.edu", 
 "admin@rain.ifmo.ru", "admin@rain.isdfsffmo.ru",
 "noname@mit.edu", "test@miau.edu", "test@abc.edu", "test@bcd.edu"]

 campusCup(emails)