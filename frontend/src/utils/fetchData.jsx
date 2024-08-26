import axios from "axios";

const fetchData = async (url, method, bodyData, setStateMethod) => {
  try {
    const response = await axios({ method: method, url: url, data: bodyData });
    setStateMethod(response.data.data);
  } catch (error) {
    console.error(error);
  }
};

export { fetchData };
