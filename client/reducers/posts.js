// a reducer takes in two things:
import { INCREMENT_LIKES } from '../actions/actionCreators';
// 1. the action(info about what happened)
// 2. copy of the current state

function posts(state = [], action){
    //Dont modify the old state
    switch(action.type)
    {
        case INCREMENT_LIKES :
            console.log('incrementing likes');
            const i = action.index;
            return [
                ...state.slice(0, i),
                {...state[i], likes: state[i].likes + 1},
                ...state.slice(i + 1),
            ]
        default:
            return state;
    }

    console.log("the post will change");
    console.log(state, action);
    return state;
}

export default posts;