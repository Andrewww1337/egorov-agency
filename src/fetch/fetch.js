import axios from "axios";

export const getNotifi = async (param) => {
  try {
    //Просто рандомный api из интернета,чтобы все-таки был настоящий запрос,а не написанный промис
    const response = await axios({
      method: "get",
      url: "https://jsonplaceholder.typicode.com/photos",
      params: { email: param },
    });
    console.log(response);
    return true;
  } catch (error) {
    return false;
  }
};
