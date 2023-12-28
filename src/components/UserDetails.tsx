import { FC } from "react";

import { User } from "../types/UserDto";
import supervisorImg from "/src/assets/images/icon-supervisor.svg";

export type UserDetailsProps = {
  user: User;
  onClick?: () => void;
};

export const UserDetails: FC<UserDetailsProps> = (props) => {
  const { user, onClick } = props;

  return (
    <article className="rounded border-t-2 border-cyan bg-white shadow-2xl p-6 space-y-4 hover:transform hover:scale-105 transition-transform w-96">
      <header>
        <h2 className="font-semibold text-xl">{user.name}</h2>
      </header>
      <section className="text-darkBlue">
        <p>
          Company: <strong>{user.company.name}</strong>
        </p>
        <p>
          E-mail:{" "}
          <strong>
            <a href={`mailto:${user.email}`}>{user.email}</a>
          </strong>
        </p>
      </section>
      <footer className="flex justify-end">
        <img
          className="cursor-pointer"
          src={supervisorImg}
          alt="Supervisor icon"
          onClick={onClick}
        />
      </footer>
    </article>
  );
};
