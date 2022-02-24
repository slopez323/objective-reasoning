// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘

function isAdmin(user) {
    return (user.userRole === "ADMIN") ? true : false
}

function getEmail(user) {
    return `${user.firstName.toLowerCase()}.${user.lastName.toLowerCase()}@codeimmersives.com`
}

function getPlaylistLength(playlist) {
    return playlist.songs.length
}

function getHardestHomework(homework) {
    if (homework.length === 0) {
        return ""
    } else {
        let lowestScore = homework[0].averageScore
        let hardest = 0
        for (let i = 1; i < homework.length; i++) {
            if (homework[i].averageScore < lowestScore) {
                lowestScore = homework[i].averageScore
                hardest = i
            }
        }
        return homework[hardest].name
    }
}

function createPhonebook(names, numbers) {
    let phonebook = {}
    for (let i = 0; i < names.length; i++) {
        phonebook[names[i]] = numbers[i]
    }
    return phonebook
}

// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof isAdmin === 'undefined') {
    isAdmin = undefined;
}
if (typeof getEmail === 'undefined') {
    getEmail = undefined;
}
if (typeof getPlaylistLength === 'undefined') {
    getPlaylistLength = undefined;
}
if (typeof getHardestHomework === 'undefined') {
    getHardestHomework = undefined;
}
if (typeof createPhonebook === 'undefined') {
    createPhonebook = undefined;
}

module.exports = {
    isAdmin,
    getEmail,
    getPlaylistLength,
    getHardestHomework,
    createPhonebook
};