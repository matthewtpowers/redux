
export const INCREMENT_LIKES = 'INCREMENT_LIKES';
export const ADD_COMMENT = 'ADD_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_CONTENT';

// increment
export function increment(index){
    return {
        type: INCREMENT_LIKES,
        index
    }
}

// add comment
export function addComment(postId, author, comment){
    return {
        type: ADD_COMMENT,
        postId,
        author,
        comment
    }
}

// remove comment
export function removeComment(postId, commentId){
    return{
        type: REMOVE_COMMENT,
        commendId,
        postId
    }
}
