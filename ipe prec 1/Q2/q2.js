const a = {
  Name: "Ramesh",
  Subects: ["Maths", "Scence", "chemistry"],
  Grade: { Type: "marks", Total: [88, 90, 99, 87] },
  Range: { opt: "100", type: ["secure", "subject", "class"] },
  achive: [
    { Rank: "rank", place: [1, 2, 3] },
    { Ordinalindicator: "st" },
    "12",
  ],
  joints: ["outof", "got", "and"],
};

const name = a.Name;
const j1 = a.joints[1];
const mark = a.Grade.Total[2];
const j2 = a.joints[0];
const range = a.Range.opt;
const grade = a.Grade.Type;
const j3 = a.joints[2];
const rt = a.Range.type[0];
const ap = a.achive[0].place[0];
const ord = a.achive[1].Ordinalindicator;
const ar = a.achive[0].Rank;

console.log(name, j1, mark, j2, range, grade, j3, rt, ap, ord, ar, ".");

//Output:
//Ramesh got 99 out of 100 marks
//and secure 1st rank.
