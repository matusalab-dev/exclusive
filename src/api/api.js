const baseUrl = "https://fakestoreapi.com/products";

export async function getProducts() {
  try {
    const response = await fetch(baseUrl);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json();
    console.log("json:", json);
    return json;
  } catch (error) {
    console.error(error.message);
  }
}

// fetch("https://fakestoreapi.com/products")
//   .then((res) => res.json())
//   .then((json) => console.log(json));

// get product by id
export async function getProductById(id) {
  try {
    const response = await fetch(`${baseUrl}/products/${id}`);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log("single json:", json);
    return json;
  } catch (error) {
    console.error(error.message);
  }
}
