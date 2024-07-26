
function sortByDescendingFriendCount(users) {
    return users.sort((a, b) => {
        const aFriendsCount = (a.friends) ? a.friends.length : 0;
        const bFriendsCount = (b.friends) ? b.friends.length : 0;
        
        return bFriendsCount - aFriendsCount;
    });
};
