/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateRoomInput = {
  id?: string | null,
  name: string,
  password?: string | null,
  owner: string,
};

export type ModelRoomConditionInput = {
  name?: ModelStringInput | null,
  password?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelRoomConditionInput | null > | null,
  or?: Array< ModelRoomConditionInput | null > | null,
  not?: ModelRoomConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UpdateRoomInput = {
  id: string,
  name?: string | null,
  password?: string | null,
  owner?: string | null,
};

export type DeleteRoomInput = {
  id?: string | null,
};

export type CreateUserInput = {
  id?: string | null,
  name: string,
  userRoomId?: string | null,
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type UpdateUserInput = {
  id: string,
  name?: string | null,
  userRoomId?: string | null,
};

export type DeleteUserInput = {
  id?: string | null,
};

export type ModelRoomFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  password?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelRoomFilterInput | null > | null,
  or?: Array< ModelRoomFilterInput | null > | null,
  not?: ModelRoomFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type CreateRoomMutationVariables = {
  input: CreateRoomInput,
  condition?: ModelRoomConditionInput | null,
};

export type CreateRoomMutation = {
  createRoom:  {
    __typename: "Room",
    id: string,
    name: string,
    password: string | null,
    owner: string,
    users:  {
      __typename: "ModelUserConnection",
      items:  Array< {
        __typename: "User",
        id: string,
        name: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type UpdateRoomMutationVariables = {
  input: UpdateRoomInput,
  condition?: ModelRoomConditionInput | null,
};

export type UpdateRoomMutation = {
  updateRoom:  {
    __typename: "Room",
    id: string,
    name: string,
    password: string | null,
    owner: string,
    users:  {
      __typename: "ModelUserConnection",
      items:  Array< {
        __typename: "User",
        id: string,
        name: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type DeleteRoomMutationVariables = {
  input: DeleteRoomInput,
  condition?: ModelRoomConditionInput | null,
};

export type DeleteRoomMutation = {
  deleteRoom:  {
    __typename: "Room",
    id: string,
    name: string,
    password: string | null,
    owner: string,
    users:  {
      __typename: "ModelUserConnection",
      items:  Array< {
        __typename: "User",
        id: string,
        name: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser:  {
    __typename: "User",
    id: string,
    name: string,
    room:  {
      __typename: "Room",
      id: string,
      name: string,
      password: string | null,
      owner: string,
      users:  {
        __typename: "ModelUserConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser:  {
    __typename: "User",
    id: string,
    name: string,
    room:  {
      __typename: "Room",
      id: string,
      name: string,
      password: string | null,
      owner: string,
      users:  {
        __typename: "ModelUserConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser:  {
    __typename: "User",
    id: string,
    name: string,
    room:  {
      __typename: "Room",
      id: string,
      name: string,
      password: string | null,
      owner: string,
      users:  {
        __typename: "ModelUserConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type GetRoomQueryVariables = {
  id: string,
};

export type GetRoomQuery = {
  getRoom:  {
    __typename: "Room",
    id: string,
    name: string,
    password: string | null,
    owner: string,
    users:  {
      __typename: "ModelUserConnection",
      items:  Array< {
        __typename: "User",
        id: string,
        name: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type ListRoomsQueryVariables = {
  filter?: ModelRoomFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRoomsQuery = {
  listRooms:  {
    __typename: "ModelRoomConnection",
    items:  Array< {
      __typename: "Room",
      id: string,
      name: string,
      password: string | null,
      owner: string,
      users:  {
        __typename: "ModelUserConnection",
        nextToken: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser:  {
    __typename: "User",
    id: string,
    name: string,
    room:  {
      __typename: "Room",
      id: string,
      name: string,
      password: string | null,
      owner: string,
      users:  {
        __typename: "ModelUserConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name: string,
      room:  {
        __typename: "Room",
        id: string,
        name: string,
        password: string | null,
        owner: string,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateRoomSubscription = {
  onCreateRoom:  {
    __typename: "Room",
    id: string,
    name: string,
    password: string | null,
    owner: string,
    users:  {
      __typename: "ModelUserConnection",
      items:  Array< {
        __typename: "User",
        id: string,
        name: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnUpdateRoomSubscription = {
  onUpdateRoom:  {
    __typename: "Room",
    id: string,
    name: string,
    password: string | null,
    owner: string,
    users:  {
      __typename: "ModelUserConnection",
      items:  Array< {
        __typename: "User",
        id: string,
        name: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnDeleteRoomSubscription = {
  onDeleteRoom:  {
    __typename: "Room",
    id: string,
    name: string,
    password: string | null,
    owner: string,
    users:  {
      __typename: "ModelUserConnection",
      items:  Array< {
        __typename: "User",
        id: string,
        name: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser:  {
    __typename: "User",
    id: string,
    name: string,
    room:  {
      __typename: "Room",
      id: string,
      name: string,
      password: string | null,
      owner: string,
      users:  {
        __typename: "ModelUserConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser:  {
    __typename: "User",
    id: string,
    name: string,
    room:  {
      __typename: "Room",
      id: string,
      name: string,
      password: string | null,
      owner: string,
      users:  {
        __typename: "ModelUserConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser:  {
    __typename: "User",
    id: string,
    name: string,
    room:  {
      __typename: "Room",
      id: string,
      name: string,
      password: string | null,
      owner: string,
      users:  {
        __typename: "ModelUserConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};
