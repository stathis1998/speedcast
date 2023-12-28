import { FC, useState } from "react";

import { User } from "../types/UserDto";
import { UserDetails } from "./UserDetails";
import { Modal } from "./common/Modal";

export type UsersGridProps = {
  users?: User[];
};

export const UsersGrid: FC<UsersGridProps> = (props) => {
  const { users } = props;

  const [selectedUser, setSelectedUser] = useState<User>();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="grid grid-cols-1 min-[1440px]:grid-cols-3 gap-6 max-w-[1440px] mx-auto">
      {users?.map((user) => (
        <div className="mx-auto" key={user.id}>
          <UserDetails
            user={user}
            onClick={() => {
              setSelectedUser(user);
              setIsModalOpen(true);
            }}
          />
        </div>
      ))}
      {users && users.length === 0 && (
        <div className="text-center text-darkBlue">No users found</div>
      )}
      <Modal
        open={isModalOpen}
        title={selectedUser?.name}
        description={selectedUser?.company.name}
        onClose={() => setIsModalOpen(false)}
      >
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div>
            <h2 className="font-semibold">Username:</h2>
            <span>{selectedUser?.name}</span>
          </div>
          <div>
            <h2 className="font-semibold">Address:</h2>
            <div>{selectedUser?.address.street}</div>
            <div>{selectedUser?.address.suite}</div>
            <div>{selectedUser?.address.city}</div>
            <div>{selectedUser?.address.zipcode}</div>
          </div>
          <div>
            <h2 className="font-semibold">Phone:</h2>
            <span>{selectedUser?.phone}</span>
          </div>
          <div>
            <h2 className="font-semibold">Email:</h2>
            <span>{selectedUser?.email}</span>
            <h2 className="font-semibold">Website:</h2>
            <span>{selectedUser?.website}</span>
          </div>
        </div>
      </Modal>
    </div>
  );
};
