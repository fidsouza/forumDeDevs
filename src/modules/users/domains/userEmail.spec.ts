import { Result } from "../../shared/core/Result";
import { UserEmail } from "./userEmail";

let emailOrError: Result<UserEmail>;
let email: UserEmail;

describe("UserEmail validation", () => {
  test("should be able to create a valid email", () => {
    emailOrError = UserEmail.create("filipe_costa@hotmail.com");
    expect(emailOrError.isSuccess).toBe(true);
    email = emailOrError.getValue();
    expect(email.props.value).toBe("filipe_costa@hotmail.com");
  });
});
