import HelloWorld from "./index";

describe("helloWorld", () => {
  test("should return a HelloWorld ", () => {
    const retorno = HelloWorld();
    expect(retorno).toEqual("HelloWorld");
  });
});
