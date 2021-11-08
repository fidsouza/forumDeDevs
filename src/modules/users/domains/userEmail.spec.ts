import { Result } from "../../shared/core/Result";
import { UserEmail } from "./userEmail";

let emailOrError: Result<UserEmail>;
let email: UserEmail;

describe("UserEmail validation", () => {
  test("should be able to create a valid email", () => {
    emailOrError = UserEmail.create("filipe.cdesouza@gmail.com");
    expect(emailOrError.isSuccess).toBe(true);
    email = emailOrError.getValue();
    expect(email.props.value).toBe("filipe.cdesouza@gmail.com");
  });

  test("Should fail to create an invalid email", () => {
    emailOrError = UserEmail.create("any_email");
    expect(emailOrError.isSuccess).toBe(false);
  });
});
