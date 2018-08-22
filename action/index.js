import repository from '../repository';

export const getPostList = () => {
    return repository.getPostList()
        .then(isSuccess => ({
            type: 'GET_POST',
            payload: {
                isSuccess,
                postList
            }
        }));
};

export const getPost = (postId) => {
    return repository.getPost(postId)
        .then(isSuccess => ({
            type: 'GET_POST',
            payload: {
                isSuccess,
                postId
            }
        }));
};