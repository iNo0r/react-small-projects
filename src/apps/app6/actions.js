export const fetchData = async (data, setter, url) => {
  const response = await fetch(url);
  const newData = await response.json();
  setter(newData);
};
