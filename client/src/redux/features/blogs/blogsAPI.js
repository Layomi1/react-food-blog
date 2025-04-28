import publicAxios from "../../../components/publicAxios";

export const getBlogs = async (tags, search) => {
  let queryString = "";

  if (tags && Array.isArray(tags) && tags.length > 0) {
    queryString = `tags_like=${tags.join(",")}`;
  }

  if (search && search !== "") {
    queryString += `${queryString ? "&" : ""}q=${search}`;
  }
  const url = queryString ? `/blogs/?${queryString}` : "/blogs";
  try {
    const response = await publicAxios.get(`/blogs/?${queryString}`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
