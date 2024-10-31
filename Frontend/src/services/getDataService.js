import axios from "axios";

const formatData = (data) => {
  return data.reduce((arry, element) => {
    const obj = element.lines.map((row) => ({ file: element.file, ...row }));
    return arry.concat(obj);
  }, []);
};

export const getDataService = async (fileName) => {
  try {
    const domain = "http://localhost:3000";
    const path = "/files/data";

    const url = fileName
      ? `${domain}${path}?fileName=${fileName}`
      : `${domain}${path}`;

    const response = await axios.get(url);
    const data = formatData(response.data);

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};
