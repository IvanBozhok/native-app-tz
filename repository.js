import axios from 'axios';


class Repository {

    getPostList() {
        return axios.get('http://staging.tallio.co/api/v1/posts', { 'headers': { 'accept': 'application/json' } })
            .then(response => response.data.data)
            .catch(error => console.log(error));
    }

    getPost(postId) {
        return axios.get(`http://staging.tallio.co/api/v1/posts/${postId}`, { 'headers': { 'accept': 'application/json' } })
            .then(response => response.data.data)
            .catch(error => console.log(error));
    }

}


const repository = new Repository();
export default repository;