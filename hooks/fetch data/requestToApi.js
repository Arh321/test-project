const request = async (url, method) => {
  let data;
  let error;

  try {
    await fetch(url)
      .then((res) => res.json())
      .then((res) => (data = res));
  } catch (error) {
    error = error;
  }
  return {
    data,
    error,
  };
};
export default request;
