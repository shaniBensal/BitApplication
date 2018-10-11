import storageService from './storageService'
const STORAGE_KEY = 'loggedinUser';

const user = {
    name: null,
    coins: 100,
    moves: []
}

var loggedinUser = storageService.loadFromStorage(STORAGE_KEY) || null;
const signUp = (userName) => {
    user.name = userName
    loggedinUser = user;
    storageService.saveToStorage(STORAGE_KEY, loggedinUser)
}

const getLoggedInUser = () => {
    return loggedinUser
}

function transferBitcoins(amount, transferTo, contactId) {
    loggedinUser.coins = loggedinUser.coins - amount;
    loggedinUser.moves.push({
        contactId: contactId,
        to: transferTo,
        at: Date.now(),
        amount: amount
    })
    storageService.saveToStorage(STORAGE_KEY, loggedinUser)
}

export default {
    loggedinUser,
    signUp,
    getLoggedInUser,
    transferBitcoins
}