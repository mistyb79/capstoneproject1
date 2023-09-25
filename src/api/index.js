export const getAllProducts = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const result = await response.json();
    return result;
  } catch (err) {
    console.error("Error!", err);
  }
};

/*export const registerUser = async (username, password) => {
  try {
    const response = await fetch("https://fakestoreapi.com/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user: {
          username,
          password,
        },
      }),
    });
    const result = await response.json();
    console.log("REGISTER USER----->", result);
    return result;
  } catch (error) {
    console.error("There was an error Registering User", error);
  }
};

export const myData = async (token) => {
  try {
    const response = await fetch("https://fakestoreapi.com/users", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();
    return result;
  } catch (err) {
    console.log(err);
  }
};
export const loginUser = async (username, password) => {
  try {
    const response = await fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user: {
          username,
          password,
        },
      }),
    });
    const result = await response.json();
    console.log("Login USER----->", result);
    return result;
  } catch (error) {
    console.error("There was an error Logging in User", error);
  }
};

export const logOut = () => {
  setToken(null);
  navigate("/");
};*/
