import publicAxios from "../../../components/publicAxios";

const getBlog = async (id) => {
  try {
    const response = await publicAxios.get(`/blogs/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export default getBlog;
