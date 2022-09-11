const bcrypt = require('bcryptjs');

const encrypt = async (plainText) => {
    return await bcrypt.hash(plainText, 10);
}

const compare = async (plainPassword, hashPassword) => {
    return await bcrypt.compare(plainPassword, hashPassword);
}

module.exports = { encrypt, compare }