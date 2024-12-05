import { setCookie } from "./cookieUtil";

export async function registerUser(data) {
  const response = await fetch("http//:localhost:3030/auth/register", {
    method: "POST", // HTTP method
    body: JSON.stringify(data),
  });
  return response.json();
}

export const Login = async (data) => {
  const response = await fetch("http//:localhost:3030/auth/register", {
    method: "POST", // HTTP method
    body: JSON.stringify(data),
  });
  if (response.ok && response.json() != null) {
    setCookie("refresh-token", response.json().refreshToken, 5);
    setCookie("access-token", response.json().accessToken, 5);
  }
};

export async function refreshToken(token) {
  try {
    const response = await fetch("http://localhost:3030/auth/refresh", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ refreshToken: token }),
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Error refreshing token: ${response.status} - ${error}`);
    }

    const data = await response.json();
    return data.accessToken;
  } catch (error) {
    console.error("Failed to refresh token:", error.message);
    throw error;
  }
}

export const fetchGetCardGroups = async (token) => {
  try {
    const response = await fetch("http://localhost:3030/cardgroup", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      // Handle HTTP errors
      const error = await response.text();
      throw new Error(`Error: ${response.status} - ${error}`);
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("Failed to refresh token:", error.message);
    throw error;
  }
};
export const fetchPostCardGroups = async (cardGroup,token) => {
  try {
    const response = await fetch("http://localhost:3030/cardgroup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body:JSON.stringify(cardGroup)
    });

    if (!response.ok) {
      // Handle HTTP errors
      const error = await response.text();
      throw new Error(`Error: ${response.status} - ${error}`);
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("Failed to refresh token:", error.message);
    throw error;
  }
};


export const fetchPostCardGroupOwner = async (data,token)=>{
  try {
    const response = await fetch("http://localhost:3030/cardgroup/owners", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body:JSON.stringify(data)
    });

    if (!response.ok) {
      // Handle HTTP errors
      const error = await response.text();
      throw new Error(`Error: ${response.status} - ${error}`);
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("Failed to refresh token:", error.message);
    throw error;
  }
};


export const fetchGetCardsForGroup = async (groupId, token) => {
  try {
    const response = await fetch(
      `http://localhost:3030/cards/groups/${groupId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      // Handle HTTP errors
      const error = await response.text();
      throw new Error(`Error: ${response.status} - ${error}`);
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("Failed to refresh token:", error.message);
    throw error;
  }
};

export const fetchDeleteCard = async (cardId, token) => {
  try {
    const response = await fetch(`http://localhost:3030/cards/${cardId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      // Handle HTTP errors
      const error = await response.text();
      throw new Error(`Error: ${response.status} - ${error}`);
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("Failed to refresh token:", error.message);
    throw error;
  }
};

export const fetchPutCard = async (card, token) => {
  try {
    const response = await fetch(
      `http://localhost:3030/cards`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(card)
      }
    );

    if (!response.ok) {
      // Handle HTTP errors
      const error = await response.text();
      throw new Error(`Error: ${response.status} - ${error}`);
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("Failed to refresh token:", error.message);
    throw error;
  }
};
export const fetchPostCard = async (card,groupId, token) => {
    try {
      const response = await fetch(
        `http://localhost:3030/cards/groups/${groupId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(card)
        }
      );
  
      if (!response.ok) {
        // Handle HTTP errors
        const error = await response.text();
        throw new Error(`Error: ${response.status} - ${error}`);
      }
  
      const responseData = await response.json();
      return responseData;
    } catch (error) {
      console.error("Failed to refresh token:", error.message);
      throw error;
    }
  };

