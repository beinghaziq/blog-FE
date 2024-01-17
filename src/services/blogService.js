import { baseService } from "./baseService";

export function getBlogs() {
  return baseService.get("/blog");
}

export function getBlog(blog_id) {
  return baseService.get(`/blogs/${blog_id}`);
}

export function createBlog(body) {
  return baseService.post('/blogs', body);
}

export function deleteBlog(blog_id) {
  return baseService.delete(`/blogs/${blog_id}`);
}

export function updateBlog(blog_id, body) {
  return baseService.put(`/blogs/${blog_id}`, body);
}
