export const fetchMoreData = async (page: number): Promise<any> => {
  try {
      let url = `https://qa.corider.in/assignment/chat?page=${page}`;

      let response = await fetch(url);

      let data = await response.json(); 

      return data;
      
  } catch (error) {
      console.error('Error fetching data:', error);
  }
};