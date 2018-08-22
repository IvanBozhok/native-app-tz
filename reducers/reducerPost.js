
function PostReducer(oldState, action) {

    const state = oldState || { post: {} };

    switch (action.type) {

        case 'GET_POST': {

            if (action.post.success) {
                return action.post.data;
            }
            return oldState;
        }

        default: return state;
    }
}

export default PostReducer;
