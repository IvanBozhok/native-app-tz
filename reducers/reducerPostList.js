
function PostListReducer(oldState, action) {

    const state = oldState || { postList: [] };

    switch (action.type) {

        case 'GET_POST_LIST': {
            if (action.postList.success) {
                return action.postList.data;
            }
            return oldState;
        }

        default: return state;
    }
}

export default PostListReducer;
