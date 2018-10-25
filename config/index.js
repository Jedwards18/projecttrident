const dbuser = 'jeff';
const dbpassword = 'hobgoblin1'

const MONGODB_URI = `mongodb://${dbuser}:${dbpassword}@ds023485.mlab.com:23485/trident-user-db`;

module.exports = MONGODB_URI;