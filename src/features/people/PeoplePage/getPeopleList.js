export const getPeopleList = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/person/popular?api_key=9515ffc857c67f1558538dad140abb29&language=en-US&page=1`
  );
  const data = await response.json();

  if (!response.ok) {
    new Error(response.statusText);
  }

  return await data;
};