// const data = [
//     {
//         title: "Work",
//         timeframes: {
//             daily: {
//                 current: 5,
//                 previous: 7
//             },
//             weekly: {
//                 current: 32,
//                 previous: 36
//             },
//             monthly: {
//                 current: 103,
//                 previous: 128
//             }
//         }
//     },
//     {
//         title: "Play",
//         timeframes: {
//             daily: {
//                 current: 1,
//                 previous: 2
//             },
//             weekly: {
//                 current: 10,
//                 previous: 8
//             },
//             monthly: {
//                 current: 23,
//                 previous: 29
//             }
//         }
//     },
//     {
//         title: "Study",
//         timeframes: {
//             daily: {
//                 current: 0,
//                 previous: 1
//             },
//             weekly: {
//                 current: 4,
//                 previous: 7
//             },
//             monthly: {
//                 current: 13,
//                 previous: 19
//             }
//         }
//     },
//     {
//         title: "Exercise",
//         timeframes: {
//             daily: {
//                 current: 1,
//                 previous: 1
//             },
//             weekly: {
//                 current: 4,
//                 previous: 5
//             },
//             monthly: {
//                 current: 11,
//                 previous: 18
//             }
//         }
//     },
//     {
//         title: "Social",
//         timeframes: {
//             daily: {
//                 current: 1,
//                 previous: 3
//             },
//             weekly: {
//                 current: 5,
//                 previous: 10
//             },
//             monthly: {
//                 current: 21,
//                 previous: 23
//             }
//         }
//     },
//     {
//         title: "Self Care",
//         timeframes: {
//             daily: {
//                 current: 0,
//                 previous: 1
//             },
//             weekly: {
//                 current: 2,
//                 previous: 2
//             },
//             monthly: {
//                 current: 7,
//                 previous: 11
//             }
//         }
//     }
// ];

// const timeframes = document.querySelectorAll('.first-footer h1');
// const cards = document.querySelectorAll('.card, .card2, .card3, .card4, .card5, .container6');

// timeframes.forEach(timeframe => {
//     timeframe.addEventListener('click', () => {
//         timeframes.forEach(t => t.classList.remove('active'));
//         timeframe.classList.add('active');

//         const selectedTimeframe = timeframe.innerText.toLowerCase();

//         data.forEach((item, index) => {
//             const currentHours = item.timeframes[selectedTimeframe].current;
//             const previousHours = item.timeframes[selectedTimeframe].previous;

//             const card = cards[index];
//             const title = card.querySelector('h2, .title2, .title3, .title4, .title5, .title6');
//             const time = card.querySelector('h1, .time2, .time3, .time4, .time5, .time6');
//             const lastWeek = card.querySelector('p, .subtitle2, .last-week3, .last-week4, .last-week5, .last-week6');

//             title.innerText = item.title;
//             time.innerText = `${currentHours}hrs`;
//             lastWeek.innerText = `Last Week - ${previousHours}hrs`;
//         });
//     });
// });


// document.querySelector('.txt2').click();
