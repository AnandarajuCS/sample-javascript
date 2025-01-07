// Validation utility functions

function isEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isStrongPassword(password) {
    return password.length >= 8 && 
           /[A-Z]/.test(password) && 
           /[a-z]/.test(password) && 
           /[0-9]/.test(password) &&
           /[^A-Za-z0-9]/.test(password);
}

function isPhoneNumber(phone) {
    return /^\+?[\d\s-]{10,}$/.test(phone);
}

module.exports = {
    isEmail,
    isStrongPassword,
    isPhoneNumber
};