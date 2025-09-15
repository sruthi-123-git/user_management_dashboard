const API_URL = 'http://localhost:5000/api/users';

export const fetchUsers = async () => {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching users:', error);
    return [];
  }
};

// const API_URL = 'http://localhost:5000/api/users';

// export const fetchUsers = async () => {
//   try {
//     const response = await fetch(API_URL);
//     if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
//     return await response.json();
//   } catch (error) {
//     console.error('Error fetching users:', error);
//     return [];
//   }
// };

