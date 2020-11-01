const API_URL = "https://jf-fridge-api.herokuapp.com"

export const fetchMatchingRecipes = async(params) => {
  const response = await fetch(`${API_URL}/matching_recipes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(params)
  });
  if (!response.ok) {
    throw response.statusText;  
  }
  return response.json();
};
