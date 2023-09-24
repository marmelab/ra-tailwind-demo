import { Form, useLogin } from "ra-core";
import { TextInput } from "../inputs/TextInput";

export const LoginPage = () => {
  const login = useLogin();
  return (
    <div className="flex flex-col h-full bg-base-200">
      <div className="card w-2/5 bg-base-100 shadow-xl m-auto">
        <div className="card-body">
          <h2 className="card-title">React Admin</h2>
          <p>Please enter your username and password.</p>
          <p>
            (try <code className="text-secondary">janedoe/password</code> or{" "}
            <code className="text-secondary">johndoe/password</code>)
          </p>
          <Form onSubmit={(values) => login(values)}>
            <TextInput label="Username" source="username" />
            <TextInput label="Password" source="password" type="password" />
            <div className="card-actions justify-end mt-2">
              <button className="btn btn-primary">Sign in</button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};
