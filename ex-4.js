// Exercise #4
let getJohnProfile = () => {
  return new Promise(function (resolve) {
    setTimeout(
      () =>
        resolve({
          name: "John",
          age: 20,
          hobbies: ["Coding", "Football"],
        }),
      1000
    );
  });
};

const asnchronousFuntion = async () => {
  try {
    const johnProfile = await getJohnProfile();
    console.log(johnProfile);
  } catch (error) {
    console.log(error);
  }
};
asnchronousFuntion();
