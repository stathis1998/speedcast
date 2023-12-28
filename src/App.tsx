import { FC } from "react";

import { useUsers } from "./hooks/useUsers";
import { UsersGrid } from "./components/UsersGrid";

export const App: FC = () => {
  const { users, isLoading } = useUsers();

  return (
    <div className="py-10 px-6">
      <header className="text-center text-2xl leading-10 mb-6">
        <div className="font-extralight text-darkBlue">
          CSS, Javascript, API
        </div>
        <h1 className="font-bold">Contacts Application</h1>
      </header>
      <main className="space-y-6">
        <section className="text-center text-darkBlue">
          <p>View basic info of contacts in a 3x2 layout.</p>
          <p>
            Click on the magnifier icon to open a modal and view detailed
            contact info contact
          </p>
        </section>
        <section>
          {!isLoading ? (
            <UsersGrid users={users} />
          ) : (
            <div className="text-center text-darkBlue">Loading...</div>
          )}
        </section>
      </main>
    </div>
  );
};
