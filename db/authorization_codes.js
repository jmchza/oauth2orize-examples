'use strict';

const codes = {};

module.exports.find = (key, done) => {
  if (codes[key]) return done(null, codes[key]);
  return done(new Error('Code Not Found'));
};

module.exports.save = (code, clientId, redirectUri, userId, done) => {
  console.log('Storing code: ' + code + ' userId: ' + userId + ' clientId: '+ clientId + ' redirectUri: ' + redirectUri);
  codes[code] = { clientId, redirectUri, userId };
  done();
};
