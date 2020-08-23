//Object Destructuring

// const book = {
//     title: 'Ego is the enemy',
//     author:'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const {name:publisherName="Amit"} = book.publisher
// console.log(publisherName);

const item = ['Coffee(hot)', '$2', '$2.5','2.75'];

const [cofee, small, medium, big] = item
console.log(`${cofee} costs ${medium}`);