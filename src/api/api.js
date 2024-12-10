const baseUrl = "https://fakestoreapi.com";

// fetch("https://fakestoreapi.com/products")
//   .then((res) => res.json())
//   .then((json) => console.log(json));

// products end points
async function getProducts() {
  const PRODUCT_URL = `${baseUrl}/products`;

  try {
    const response = await fetch(PRODUCT_URL);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json();
    // console.log("json:", json);
    return json;
  } catch (error) {
    console.error(error.message);
  }
}

// get product by id
async function getProductById(id) {
  const PRODUCT_URL = `${baseUrl}/products/${id}`;
  try {
    const response = await fetch(PRODUCT_URL);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    // console.log("single json:", json);
    return json;
  } catch (error) {
    console.error(error.message);
  }
}
async function getAllCategories() {
  const CATEGORY_URL = `https://fakestoreapi.com/products/categories`;
  try {
    const response = await fetch(CATEGORY_URL);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    // console.log("category json:", json);
    return json;
  } catch (error) {
    console.error(error.message);
  }
}

// carts end-points
async function getCarts() {
  const CART_URL = `${baseUrl}/carts`;

  try {
    const response = await fetch(CART_URL);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json();
    console.log("cart json:", json);
    return json;
  } catch (error) {
    console.error(error.message);
  }
}

export { getProducts, getProductById, getAllCategories, getCarts };
