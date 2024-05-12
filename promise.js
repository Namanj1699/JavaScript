//Promise and Promise-Chaining

console.log("Hello JS");

let cart = ["shoes", "t-shirt", "jeans", "perfume"];

createOrder(cart)
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (msg) {
    console.log(msg);
  })
  .catch(function (err) {
    console.log(err);
  });

function createOrder(cart) {
  const validateCart = (cart) => {
    if (cart.length > 4) {
      return false;
    } else {
      return true;
    }
  };

  const pr = new Promise(function (resolve, reject) {
    const orderId = "AB1ZY";
    if (!validateCart(cart)) {
      const err = new Error("Order Not Placed");
      reject(err);
    } else {
      setTimeout(function () {
        resolve(orderId);
      }, 2000);
    }
  });

  return pr;
}

function proceedToPayment(orderId) {
  return new Promise(function (resolve, reject) {
    resolve("Order Placed Successfully");
  });
}
