// a reducer takes in two things:
import {
    ADD_COMMENT,
    REMOVE_COMMENT,
} from '../actions/actionCreators'

function postComments(state = [], action)
{
    switch(action.type){
        case ADD_COMMENT:
            console.log('add_comment');
            return [...state, {
                user: action.author,
                text: action.comment
            }];
        case REMOVE_COMMENT:
            console.log('removing a comment');
            console.log(action.postId);
            console.log(process.env.NODE_ENV);
            return[
                ...state.slice(0, action.i),
                ...state.slice(action.i + 1)
            ]
        default:
            return state;
    }
}





// 1. the action(info about what happened)
// 2. copy of the current state

function comments(state = [], action){
    console.log('in comments');
    if(typeof action.postId !== 'undefined'){
        return {
            ...state,
            [action.postId]: postComments(state[action.postId], action)
        }
    }
    return state;
}

export default comments;