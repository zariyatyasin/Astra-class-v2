export const registerUser = async (name, username, password, role, email) => {
  try {
    const response = await axios.post("http://localhost:3000/api/auth/signup", {
      name: name,
      username: username,
      password: password,
      role: role,
      email: email,
    });
    if (response.status === 200) {
      setUsers([...users, response.data]);
      // Handle successful registration
    } else {
      // Handle other HTTP response statuses, if needed
    }
  } catch (error) {
    console.error(error.response?.data?.message);
    // Handle error during registration
  }
};
