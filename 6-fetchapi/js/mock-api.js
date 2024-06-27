async function getUsers() {
  try {
    const response = await fetch(
      "https://667cd13b3c30891b865dc4d2.mockapi.io/mytestapi/v1/users"
    );
    const users = await response.json();
    console.log(users);
  } catch (err) {
    console.log(err);
  }
}

async function getUser() {
  try {
    const response = await fetch(
      "https://667cd13b3c30891b865dc4d2.mockapi.io/mytestapi/v1/users/1"
    );
    const user = await response.json();
    console.log(user);
  } catch (err) {
    console.log(err);
  }
}

async function createUser() {
  try {
    const userData = {
      username: "neto",
      password: "12345",
      email: "neto@teste.com",
    };

    await fetch(
      "https://667cd13b3c30891b865dc4d2.mockapi.io/mytestapi/v1/users",
      {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (err) {
    console.log(err);
  }
}

async function deleteUser() {
  try {
    const response = await fetch(
      "https://667cd13b3c30891b865dc4d2.mockapi.io/mytestapi/v1/users/1",
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (err) {
    console.log(err);
  }
}

// createUser();

// getUsers();

// getUser();

// deleteUser();
