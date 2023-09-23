import { useGetIdentity, useLogout } from "ra-core";

export const UserMenu = () => {
  const { data: identity } = useGetIdentity();
  const logout = useLogout();

  return identity ? (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={identity.avatar} />
        </div>
      </label>
      <ul
        tabIndex={0}
        className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
      >
        <li>
          <button onClick={logout}>Logout</button>
        </li>
      </ul>
    </div>
  ) : null;
};
