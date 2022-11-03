let test = [
  [],
  [
    { semaine: 12, Q1: 5, Q2: 5 },
    { semaine: 12, Q1: 10, Q2: 10 },
    { semaine: 14, Q1: 2, Q2: 2 },
  ],
  [
    { semaine: 12, Q1: 8, Q2: 6 },
    { semaine: 13, Q1: 10, Q2: 10 },
    { semaine: 14, Q1: 4, Q2: 6 },
  ],
];

// 1 on prend la dernière occurence d'une semaine pour chaque user,
// et on fait un array by user avec un objet par semaine par user
function uniqueAnswersByUser(arrayTeam) {
  let res = arrayTeam.map((arr) =>
    arr.reduce((acc, val) => {
      const key = val["semaine"];
      delete val.semaine;
      delete val._id;
      acc[key] = val;

      return acc;
    }, {})
  );
  return res;
}

// 2 count total par question par semaine sur tous les users
function prepareMeanByWeek(obj) {
  let res = obj.reduce((acc, val) => {
    // Un total et un count par semaine
    Object.keys(val).map((key) => {
      let numerosQuestions = ["Q1", "Q2", "Q3"];

      for (let i = 0; i < numerosQuestions.length; i++) {
        let numQ = numerosQuestions[i];
        if (val[key][numQ]) {
          if (acc[key]) {
            if (acc[key][numQ]) {
              acc[key][numQ]["count"] = acc[key][numQ]["count"] + 1;
              acc[key][numQ]["total"] =
                acc[key][numQ]["total"] + val[key][numQ];
            } else {
              acc[key][numQ] = {
                count: 1,
                total: val[key][numQ],
              };
            }
          } else {
            if (val[key][numQ]) {
              acc[key] = {
                [numQ]: {
                  count: 1,
                  total: val[key][numQ],
                },
              };
            }
          }
        }
      }
    });
    return acc;
  }, {});
  return res;
}

module.exports = { uniqueAnswersByUser, prepareMeanByWeek };
