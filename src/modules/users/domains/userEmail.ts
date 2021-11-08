import { Result } from "../../shared/core/Result";
import { ValueObject } from "../../shared/domain/ValueObject";

export interface UserEmailProps {
  value: string;
}

export class UserEmail extends ValueObject<UserEmailProps> {
  private constructor(props: UserEmailProps) {
    super(props);
  }

  get value(): string {
    return this.props.value;
  }

  public static create(email: string): Result<UserEmail> {
    return Result.ok<UserEmail>(new UserEmail({ value: email }));
  }
}
