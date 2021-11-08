import { Result } from "../../shared/core/Result";
import { UserEmail } from "./userEmail";

let emailOrError: Result<UserEmail>;
let email: UserEmail;

describe("UserEmail validation", () => {
  test("should be able to create a valid email", () => {
    emailOrError = UserEmail.create("any_email@any.com.br");
    expect(emailOrError.isSuccess).toBe(true);
    email = emailOrError.getValue();
    expect(email.props.value).toBe("any_email@any.com.br");
  });
});
