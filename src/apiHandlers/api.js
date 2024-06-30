import axios from "axios";

export const apiHandler = async ({
  endpoint,
  method = "GET",
  params = {},
  data = {},
}) => {
  try {
    const response = await axios({
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/${endpoint}`,
      method,
      params,
      data,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
