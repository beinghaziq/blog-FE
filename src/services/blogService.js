import baseService from "./baseService";

export function getBlogs() {
  return baseService.get("/blogs");
}

export function getBlog(booking_uuid) {
  return baseService.get(`/bookings/${booking_uuid}/core_nouns`);
}

export function createBlog(booking_uuid, body) {
  return baseService.post(`/bookings/${booking_uuid}/core_nouns`, body);
}

export function deleteBlog(booking_uuid, id) {
  return baseService.delete(`/bookings/${booking_uuid}/core_nouns/${id}`);
}
