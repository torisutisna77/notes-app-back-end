const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
  },
];
const { addNoteHandler } = require('./handler');
module.exports = routes;
