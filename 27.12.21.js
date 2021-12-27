const scores = [
    {
      marks: 32,
      name: "Yvette Merritt"
    },
    {
      marks: 57,
      name: "Lillian Ellis"
    },
    {
      marks: 22,
      name: "Mccall Carter"
    },
    {
      marks: 21,
      name: "Pate Collier"
    },
    {
      marks: 91,
      name: "Debra Beard"
    },
    {
      marks: 75,
      name: "Nettie Hancock"
    },
    {
      marks: 20,
      name: "Hatfield Hodge"
    }
  ];

//   1. display names

//   console.log(scores.map(score => score.name))


//   2. ispass

//  const ispass = scores.filter ((scores) => scores.marks>=40)
//  console.log(ispass)

// 3 isfailed names

//  const failed = scores.filter ((scores) => scores.marks<=40)
//  console.log(failed)

// const failednames = failed.map((scores) => scores.name)
// console.log(failednames)


// 4 average of marks
  
// const AverageMarks = (arr) => {
//     const {length} = arr;
//     marks();
//     return arr.reduce((acc, value)  =>{
//         return acc + (marks/length);

//     }, 0);
// }

// console.log(AverageMarks(scores));

// var arr = Object.values(scores);
// var sum = (prev, cur) => ({scores: prev.mark + cur.mark});
// var avg = arr.reduce(sum).scores / arr.length;
// console.log(avg); 


// 5  to find maxi mark

    const MaxMark = Math.max(...scores.map(score => score.marks));
 const studWithMaxMark = scores.filter(score => score.marks===MaxMark).map(det => det.name);
 console.log(studWithMaxMark)   
   