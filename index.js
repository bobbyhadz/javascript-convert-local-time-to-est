// EXAMPLE 1 - Convert local time to EST using JavaScript

const date = new Date();

// ✅ Get EST date time string
// "7/26/2023, 8:41:22 AM"
console.log(
  date.toLocaleString('en-US', {
    timeZone: 'America/New_York',
  }),
);

// // ----------------------------------------

// // ✅ Get EST date object
// function changeTimeZone(date, timeZone) {
//   if (typeof date === 'string') {
//     return new Date(
//       new Date(date).toLocaleString('en-US', {
//         timeZone,
//       }),
//     );
//   }

//   return new Date(
//     date.toLocaleString('en-US', {
//       timeZone,
//     }),
//   );
// }

// // 👇️ Wed Jul 26 2023 08:41:32
// console.log(changeTimeZone(new Date(), 'America/New_York'));

// ------------------------------------------------------------------

// // EXAMPLE 2 - Specifying different `options` properties and values

// const date = new Date();

// // 👇️ "Wednesday, July 26, 2023 at 8:43:01 AM"
// console.log(
//   date.toLocaleString('en-US', {
//     timeZone: 'America/New_York',
//     dateStyle: 'full',
//     timeStyle: 'full',
//   }),
// );

// ------------------------------------------------------------------

// // EXAMPLE 3 - 2-digit components

// const date = new Date();

// // 👇️ "07/26/2023, 08:44:31 AM EDT"
// console.log(
//   date.toLocaleString('en-US', {
//     timeZone: 'America/New_York',
//     year: 'numeric',
//     month: '2-digit',
//     day: '2-digit',
//     hour: '2-digit',
//     minute: '2-digit',
//     second: '2-digit',
//     timeZoneName: 'short',
//   }),
// );
