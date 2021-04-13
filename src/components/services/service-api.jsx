const getFetch = ({ searchQuery = '', currentPage = 1, pageSize = 8 }) => {
  const apiKey = '20161669-2a892b4c586ef08617ab50d2d';
  const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${currentPage}&per_page=${pageSize}&key=${apiKey}`;

  return fetch(url).then(response => response.json());
};

export default getFetch;
