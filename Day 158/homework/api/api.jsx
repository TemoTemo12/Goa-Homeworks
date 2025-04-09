import { getData } from './getData.js';
import { deleteData } from './deleteData.js';
import { updateData } from './updateData.js';

const apiURL = 'https://jsonplaceholder.typicode.com/posts/1'; // მაგალითად

// Get
getData(apiURL).then(data => console.log('GET:', data));

// Delete
deleteData(apiURL).then(msg => console.log('DELETE:', msg));

// Update
updateData(apiURL, { title: 'განახლებული სათაური' }).then(res => console.log('UPDATE:', res));
