import {axiosServiceJp} from "./axios.service";
import {jpUrls} from "../configs/urls";

export const commentsService = {
    getAllUsers: () => axiosServiceJp.get(jpUrls.users),
    getAllPosts: () => axiosServiceJp.get(jpUrls.posts),
    getAllComments: () => axiosServiceJp.get(jpUrls.comments),
    createUser: (user) => axiosServiceJp.post(jpUrls.users, user),
    createPost: (post) => axiosServiceJp.post(jpUrls.posts, post),
    createComment: (comment) => axiosServiceJp.post(jpUrls.comments, comment),
    getUserById: (id) => axiosServiceJp.get(`${jpUrls.users}/${id}`),
    getPostById: (id) => axiosServiceJp.get(`${jpUrls.posts}/${id}`),
    getCommentById: (id) => axiosServiceJp.get(`${jpUrls.comments}/${id}`),
    updateUserById: (id, user) => axiosServiceJp.put(`${jpUrls.users}/${id}`, user),
    updatePostById: (id, post) => axiosServiceJp.put(`${jpUrls.posts}/${id}`, post),
    updateCommentById: (id, comment) => axiosServiceJp.put(`${jpUrls.comments}/${id}`, comment),
    deleteUserById: (id) => axiosServiceJp.delete(`${jpUrls.users}/${id}`),
    deletePostById: (id) => axiosServiceJp.delete(`${jpUrls.posts}/${id}`),
    deleteCommentById: (id) => axiosServiceJp.delete(`${jpUrls.comments}/${id}`)
}