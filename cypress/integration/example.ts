import Auth from "controllers/auth"

describe("Example", () => {
  it("Hello", () => {
    expect(true).to.be.true;
  });

  it("Auth test", () => {
    expect(Auth.getName()).to.equal("Hello");
  });
});
