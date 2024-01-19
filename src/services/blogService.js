import { baseService } from 'services/baseService';

export const blogActions = {
  allBlogs: '/blog',
  createBlog: '/blogs',
  singleBlog: (blog_id) => `/blog/${blog_id}`,
};

export function getBlogs() {
  return baseService.get(blogActions.allBlogs);
}

export function getBlog(blog_id) {
  return baseService.get(blogActions.singleBlog(blog_id));
}

export function createBlog(body) {
  return baseService.post(blogActions.createBlog, body);
}

export function deleteBlog(blog_id) {
  return baseService.delete(blogActions.singleBlog(blog_id));
}

export function updateBlog(blog_id, body) {
  return baseService.put(blogActions.singleBlog(blog_id), body);
}
