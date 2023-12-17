const checkEmail = (email) =>{
    var newEmail = email.replace(/\s/g, '')
    return newEmail
}

module.exports = checkEmail


