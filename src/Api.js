const BASE_URL = 'http://localhost:8000';

export const createTransaction = async (data) => {
  try {
    const response = await fetch(`${BASE_URL}/api/transactions`,{
      method : 'POST',
      headers : {
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error : ', error);
    throw error;
  }
}

export const getSummary = async (data) => {
  try {
    const response = await fetch(`${BASE_URL}/api/summary`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error : ', error);
    throw error;
  }
}
