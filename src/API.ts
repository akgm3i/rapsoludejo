/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  email: string,
  nickname: string,
  icon?: string | null,
  roomId?: string | null,
  createdAt: string,
  updatedAt?: string | null,
};

export type ModelUserConditionInput = {
  email?: ModelStringInput | null,
  nickname?: ModelStringInput | null,
  icon?: ModelStringInput | null,
  roomId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
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

export enum UserRelationStatus {
  pending = "pending",
  denied = "denied",
  friend = "friend",
  brocked = "brocked",
}


export type UpdateUserInput = {
  id: string,
  email?: string | null,
  nickname?: string | null,
  icon?: string | null,
  roomId?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteUserInput = {
  id?: string | null,
};

export type CreateUserRelationInput = {
  id?: string | null,
  fromUserId: string,
  toUserId: string,
  status: UserRelationStatus,
  createdAt: string,
  updatedAt?: string | null,
};

export type ModelUserRelationConditionInput = {
  fromUserId?: ModelIDInput | null,
  toUserId?: ModelIDInput | null,
  status?: ModelUserRelationStatusInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserRelationConditionInput | null > | null,
  or?: Array< ModelUserRelationConditionInput | null > | null,
  not?: ModelUserRelationConditionInput | null,
};

export type ModelUserRelationStatusInput = {
  eq?: UserRelationStatus | null,
  ne?: UserRelationStatus | null,
};

export type UpdateUserRelationInput = {
  id: string,
  fromUserId?: string | null,
  toUserId?: string | null,
  status?: UserRelationStatus | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteUserRelationInput = {
  id?: string | null,
};

export type CreateRoomInput = {
  id?: string | null,
  name: string,
  password?: string | null,
  ownerId: string,
};

export type ModelRoomConditionInput = {
  name?: ModelStringInput | null,
  password?: ModelStringInput | null,
  ownerId?: ModelIDInput | null,
  and?: Array< ModelRoomConditionInput | null > | null,
  or?: Array< ModelRoomConditionInput | null > | null,
  not?: ModelRoomConditionInput | null,
};

export type UpdateRoomInput = {
  id: string,
  name?: string | null,
  password?: string | null,
  ownerId?: string | null,
};

export type DeleteRoomInput = {
  id?: string | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  email?: ModelStringInput | null,
  nickname?: ModelStringInput | null,
  icon?: ModelStringInput | null,
  roomId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserRelationFilterInput = {
  id?: ModelIDInput | null,
  fromUserId?: ModelIDInput | null,
  toUserId?: ModelIDInput | null,
  status?: ModelUserRelationStatusInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserRelationFilterInput | null > | null,
  or?: Array< ModelUserRelationFilterInput | null > | null,
  not?: ModelUserRelationFilterInput | null,
};

export type ModelRoomFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  password?: ModelStringInput | null,
  ownerId?: ModelIDInput | null,
  and?: Array< ModelRoomFilterInput | null > | null,
  or?: Array< ModelRoomFilterInput | null > | null,
  not?: ModelRoomFilterInput | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser:  {
    __typename: "User",
    id: string,
    email: string,
    nickname: string,
    icon: string | null,
    roomId: string | null,
    createdAt: string,
    updatedAt: string | null,
    fromRelations:  {
      __typename: "ModelUserRelationConnection",
      items:  Array< {
        __typename: "UserRelation",
        id: string,
        fromUserId: string,
        toUserId: string,
        status: UserRelationStatus,
        createdAt: string,
        updatedAt: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    toRelations:  {
      __typename: "ModelUserRelationConnection",
      items:  Array< {
        __typename: "UserRelation",
        id: string,
        fromUserId: string,
        toUserId: string,
        status: UserRelationStatus,
        createdAt: string,
        updatedAt: string | null,
      } | null > | null,
      nextToken: string | null,
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
    email: string,
    nickname: string,
    icon: string | null,
    roomId: string | null,
    createdAt: string,
    updatedAt: string | null,
    fromRelations:  {
      __typename: "ModelUserRelationConnection",
      items:  Array< {
        __typename: "UserRelation",
        id: string,
        fromUserId: string,
        toUserId: string,
        status: UserRelationStatus,
        createdAt: string,
        updatedAt: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    toRelations:  {
      __typename: "ModelUserRelationConnection",
      items:  Array< {
        __typename: "UserRelation",
        id: string,
        fromUserId: string,
        toUserId: string,
        status: UserRelationStatus,
        createdAt: string,
        updatedAt: string | null,
      } | null > | null,
      nextToken: string | null,
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
    email: string,
    nickname: string,
    icon: string | null,
    roomId: string | null,
    createdAt: string,
    updatedAt: string | null,
    fromRelations:  {
      __typename: "ModelUserRelationConnection",
      items:  Array< {
        __typename: "UserRelation",
        id: string,
        fromUserId: string,
        toUserId: string,
        status: UserRelationStatus,
        createdAt: string,
        updatedAt: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    toRelations:  {
      __typename: "ModelUserRelationConnection",
      items:  Array< {
        __typename: "UserRelation",
        id: string,
        fromUserId: string,
        toUserId: string,
        status: UserRelationStatus,
        createdAt: string,
        updatedAt: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type CreateUserRelationMutationVariables = {
  input: CreateUserRelationInput,
  condition?: ModelUserRelationConditionInput | null,
};

export type CreateUserRelationMutation = {
  createUserRelation:  {
    __typename: "UserRelation",
    id: string,
    fromUserId: string,
    toUserId: string,
    status: UserRelationStatus,
    createdAt: string,
    updatedAt: string | null,
    fromUser:  {
      __typename: "User",
      id: string,
      email: string,
      nickname: string,
      icon: string | null,
      roomId: string | null,
      createdAt: string,
      updatedAt: string | null,
      fromRelations:  {
        __typename: "ModelUserRelationConnection",
        nextToken: string | null,
      } | null,
      toRelations:  {
        __typename: "ModelUserRelationConnection",
        nextToken: string | null,
      } | null,
    } | null,
    toUser:  {
      __typename: "User",
      id: string,
      email: string,
      nickname: string,
      icon: string | null,
      roomId: string | null,
      createdAt: string,
      updatedAt: string | null,
      fromRelations:  {
        __typename: "ModelUserRelationConnection",
        nextToken: string | null,
      } | null,
      toRelations:  {
        __typename: "ModelUserRelationConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type UpdateUserRelationMutationVariables = {
  input: UpdateUserRelationInput,
  condition?: ModelUserRelationConditionInput | null,
};

export type UpdateUserRelationMutation = {
  updateUserRelation:  {
    __typename: "UserRelation",
    id: string,
    fromUserId: string,
    toUserId: string,
    status: UserRelationStatus,
    createdAt: string,
    updatedAt: string | null,
    fromUser:  {
      __typename: "User",
      id: string,
      email: string,
      nickname: string,
      icon: string | null,
      roomId: string | null,
      createdAt: string,
      updatedAt: string | null,
      fromRelations:  {
        __typename: "ModelUserRelationConnection",
        nextToken: string | null,
      } | null,
      toRelations:  {
        __typename: "ModelUserRelationConnection",
        nextToken: string | null,
      } | null,
    } | null,
    toUser:  {
      __typename: "User",
      id: string,
      email: string,
      nickname: string,
      icon: string | null,
      roomId: string | null,
      createdAt: string,
      updatedAt: string | null,
      fromRelations:  {
        __typename: "ModelUserRelationConnection",
        nextToken: string | null,
      } | null,
      toRelations:  {
        __typename: "ModelUserRelationConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type DeleteUserRelationMutationVariables = {
  input: DeleteUserRelationInput,
  condition?: ModelUserRelationConditionInput | null,
};

export type DeleteUserRelationMutation = {
  deleteUserRelation:  {
    __typename: "UserRelation",
    id: string,
    fromUserId: string,
    toUserId: string,
    status: UserRelationStatus,
    createdAt: string,
    updatedAt: string | null,
    fromUser:  {
      __typename: "User",
      id: string,
      email: string,
      nickname: string,
      icon: string | null,
      roomId: string | null,
      createdAt: string,
      updatedAt: string | null,
      fromRelations:  {
        __typename: "ModelUserRelationConnection",
        nextToken: string | null,
      } | null,
      toRelations:  {
        __typename: "ModelUserRelationConnection",
        nextToken: string | null,
      } | null,
    } | null,
    toUser:  {
      __typename: "User",
      id: string,
      email: string,
      nickname: string,
      icon: string | null,
      roomId: string | null,
      createdAt: string,
      updatedAt: string | null,
      fromRelations:  {
        __typename: "ModelUserRelationConnection",
        nextToken: string | null,
      } | null,
      toRelations:  {
        __typename: "ModelUserRelationConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
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
    ownerId: string,
    owner:  {
      __typename: "User",
      id: string,
      email: string,
      nickname: string,
      icon: string | null,
      roomId: string | null,
      createdAt: string,
      updatedAt: string | null,
      fromRelations:  {
        __typename: "ModelUserRelationConnection",
        nextToken: string | null,
      } | null,
      toRelations:  {
        __typename: "ModelUserRelationConnection",
        nextToken: string | null,
      } | null,
    } | null,
    users:  {
      __typename: "ModelUserConnection",
      items:  Array< {
        __typename: "User",
        id: string,
        email: string,
        nickname: string,
        icon: string | null,
        roomId: string | null,
        createdAt: string,
        updatedAt: string | null,
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
    ownerId: string,
    owner:  {
      __typename: "User",
      id: string,
      email: string,
      nickname: string,
      icon: string | null,
      roomId: string | null,
      createdAt: string,
      updatedAt: string | null,
      fromRelations:  {
        __typename: "ModelUserRelationConnection",
        nextToken: string | null,
      } | null,
      toRelations:  {
        __typename: "ModelUserRelationConnection",
        nextToken: string | null,
      } | null,
    } | null,
    users:  {
      __typename: "ModelUserConnection",
      items:  Array< {
        __typename: "User",
        id: string,
        email: string,
        nickname: string,
        icon: string | null,
        roomId: string | null,
        createdAt: string,
        updatedAt: string | null,
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
    ownerId: string,
    owner:  {
      __typename: "User",
      id: string,
      email: string,
      nickname: string,
      icon: string | null,
      roomId: string | null,
      createdAt: string,
      updatedAt: string | null,
      fromRelations:  {
        __typename: "ModelUserRelationConnection",
        nextToken: string | null,
      } | null,
      toRelations:  {
        __typename: "ModelUserRelationConnection",
        nextToken: string | null,
      } | null,
    } | null,
    users:  {
      __typename: "ModelUserConnection",
      items:  Array< {
        __typename: "User",
        id: string,
        email: string,
        nickname: string,
        icon: string | null,
        roomId: string | null,
        createdAt: string,
        updatedAt: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser:  {
    __typename: "User",
    id: string,
    email: string,
    nickname: string,
    icon: string | null,
    roomId: string | null,
    createdAt: string,
    updatedAt: string | null,
    fromRelations:  {
      __typename: "ModelUserRelationConnection",
      items:  Array< {
        __typename: "UserRelation",
        id: string,
        fromUserId: string,
        toUserId: string,
        status: UserRelationStatus,
        createdAt: string,
        updatedAt: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    toRelations:  {
      __typename: "ModelUserRelationConnection",
      items:  Array< {
        __typename: "UserRelation",
        id: string,
        fromUserId: string,
        toUserId: string,
        status: UserRelationStatus,
        createdAt: string,
        updatedAt: string | null,
      } | null > | null,
      nextToken: string | null,
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
      email: string,
      nickname: string,
      icon: string | null,
      roomId: string | null,
      createdAt: string,
      updatedAt: string | null,
      fromRelations:  {
        __typename: "ModelUserRelationConnection",
        nextToken: string | null,
      } | null,
      toRelations:  {
        __typename: "ModelUserRelationConnection",
        nextToken: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetUserRelationQueryVariables = {
  id: string,
};

export type GetUserRelationQuery = {
  getUserRelation:  {
    __typename: "UserRelation",
    id: string,
    fromUserId: string,
    toUserId: string,
    status: UserRelationStatus,
    createdAt: string,
    updatedAt: string | null,
    fromUser:  {
      __typename: "User",
      id: string,
      email: string,
      nickname: string,
      icon: string | null,
      roomId: string | null,
      createdAt: string,
      updatedAt: string | null,
      fromRelations:  {
        __typename: "ModelUserRelationConnection",
        nextToken: string | null,
      } | null,
      toRelations:  {
        __typename: "ModelUserRelationConnection",
        nextToken: string | null,
      } | null,
    } | null,
    toUser:  {
      __typename: "User",
      id: string,
      email: string,
      nickname: string,
      icon: string | null,
      roomId: string | null,
      createdAt: string,
      updatedAt: string | null,
      fromRelations:  {
        __typename: "ModelUserRelationConnection",
        nextToken: string | null,
      } | null,
      toRelations:  {
        __typename: "ModelUserRelationConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type ListUserRelationsQueryVariables = {
  filter?: ModelUserRelationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserRelationsQuery = {
  listUserRelations:  {
    __typename: "ModelUserRelationConnection",
    items:  Array< {
      __typename: "UserRelation",
      id: string,
      fromUserId: string,
      toUserId: string,
      status: UserRelationStatus,
      createdAt: string,
      updatedAt: string | null,
      fromUser:  {
        __typename: "User",
        id: string,
        email: string,
        nickname: string,
        icon: string | null,
        roomId: string | null,
        createdAt: string,
        updatedAt: string | null,
      } | null,
      toUser:  {
        __typename: "User",
        id: string,
        email: string,
        nickname: string,
        icon: string | null,
        roomId: string | null,
        createdAt: string,
        updatedAt: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
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
    ownerId: string,
    owner:  {
      __typename: "User",
      id: string,
      email: string,
      nickname: string,
      icon: string | null,
      roomId: string | null,
      createdAt: string,
      updatedAt: string | null,
      fromRelations:  {
        __typename: "ModelUserRelationConnection",
        nextToken: string | null,
      } | null,
      toRelations:  {
        __typename: "ModelUserRelationConnection",
        nextToken: string | null,
      } | null,
    } | null,
    users:  {
      __typename: "ModelUserConnection",
      items:  Array< {
        __typename: "User",
        id: string,
        email: string,
        nickname: string,
        icon: string | null,
        roomId: string | null,
        createdAt: string,
        updatedAt: string | null,
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
      ownerId: string,
      owner:  {
        __typename: "User",
        id: string,
        email: string,
        nickname: string,
        icon: string | null,
        roomId: string | null,
        createdAt: string,
        updatedAt: string | null,
      } | null,
      users:  {
        __typename: "ModelUserConnection",
        nextToken: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser:  {
    __typename: "User",
    id: string,
    email: string,
    nickname: string,
    icon: string | null,
    roomId: string | null,
    createdAt: string,
    updatedAt: string | null,
    fromRelations:  {
      __typename: "ModelUserRelationConnection",
      items:  Array< {
        __typename: "UserRelation",
        id: string,
        fromUserId: string,
        toUserId: string,
        status: UserRelationStatus,
        createdAt: string,
        updatedAt: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    toRelations:  {
      __typename: "ModelUserRelationConnection",
      items:  Array< {
        __typename: "UserRelation",
        id: string,
        fromUserId: string,
        toUserId: string,
        status: UserRelationStatus,
        createdAt: string,
        updatedAt: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser:  {
    __typename: "User",
    id: string,
    email: string,
    nickname: string,
    icon: string | null,
    roomId: string | null,
    createdAt: string,
    updatedAt: string | null,
    fromRelations:  {
      __typename: "ModelUserRelationConnection",
      items:  Array< {
        __typename: "UserRelation",
        id: string,
        fromUserId: string,
        toUserId: string,
        status: UserRelationStatus,
        createdAt: string,
        updatedAt: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    toRelations:  {
      __typename: "ModelUserRelationConnection",
      items:  Array< {
        __typename: "UserRelation",
        id: string,
        fromUserId: string,
        toUserId: string,
        status: UserRelationStatus,
        createdAt: string,
        updatedAt: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser:  {
    __typename: "User",
    id: string,
    email: string,
    nickname: string,
    icon: string | null,
    roomId: string | null,
    createdAt: string,
    updatedAt: string | null,
    fromRelations:  {
      __typename: "ModelUserRelationConnection",
      items:  Array< {
        __typename: "UserRelation",
        id: string,
        fromUserId: string,
        toUserId: string,
        status: UserRelationStatus,
        createdAt: string,
        updatedAt: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    toRelations:  {
      __typename: "ModelUserRelationConnection",
      items:  Array< {
        __typename: "UserRelation",
        id: string,
        fromUserId: string,
        toUserId: string,
        status: UserRelationStatus,
        createdAt: string,
        updatedAt: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnCreateUserRelationSubscription = {
  onCreateUserRelation:  {
    __typename: "UserRelation",
    id: string,
    fromUserId: string,
    toUserId: string,
    status: UserRelationStatus,
    createdAt: string,
    updatedAt: string | null,
    fromUser:  {
      __typename: "User",
      id: string,
      email: string,
      nickname: string,
      icon: string | null,
      roomId: string | null,
      createdAt: string,
      updatedAt: string | null,
      fromRelations:  {
        __typename: "ModelUserRelationConnection",
        nextToken: string | null,
      } | null,
      toRelations:  {
        __typename: "ModelUserRelationConnection",
        nextToken: string | null,
      } | null,
    } | null,
    toUser:  {
      __typename: "User",
      id: string,
      email: string,
      nickname: string,
      icon: string | null,
      roomId: string | null,
      createdAt: string,
      updatedAt: string | null,
      fromRelations:  {
        __typename: "ModelUserRelationConnection",
        nextToken: string | null,
      } | null,
      toRelations:  {
        __typename: "ModelUserRelationConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnUpdateUserRelationSubscription = {
  onUpdateUserRelation:  {
    __typename: "UserRelation",
    id: string,
    fromUserId: string,
    toUserId: string,
    status: UserRelationStatus,
    createdAt: string,
    updatedAt: string | null,
    fromUser:  {
      __typename: "User",
      id: string,
      email: string,
      nickname: string,
      icon: string | null,
      roomId: string | null,
      createdAt: string,
      updatedAt: string | null,
      fromRelations:  {
        __typename: "ModelUserRelationConnection",
        nextToken: string | null,
      } | null,
      toRelations:  {
        __typename: "ModelUserRelationConnection",
        nextToken: string | null,
      } | null,
    } | null,
    toUser:  {
      __typename: "User",
      id: string,
      email: string,
      nickname: string,
      icon: string | null,
      roomId: string | null,
      createdAt: string,
      updatedAt: string | null,
      fromRelations:  {
        __typename: "ModelUserRelationConnection",
        nextToken: string | null,
      } | null,
      toRelations:  {
        __typename: "ModelUserRelationConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnDeleteUserRelationSubscription = {
  onDeleteUserRelation:  {
    __typename: "UserRelation",
    id: string,
    fromUserId: string,
    toUserId: string,
    status: UserRelationStatus,
    createdAt: string,
    updatedAt: string | null,
    fromUser:  {
      __typename: "User",
      id: string,
      email: string,
      nickname: string,
      icon: string | null,
      roomId: string | null,
      createdAt: string,
      updatedAt: string | null,
      fromRelations:  {
        __typename: "ModelUserRelationConnection",
        nextToken: string | null,
      } | null,
      toRelations:  {
        __typename: "ModelUserRelationConnection",
        nextToken: string | null,
      } | null,
    } | null,
    toUser:  {
      __typename: "User",
      id: string,
      email: string,
      nickname: string,
      icon: string | null,
      roomId: string | null,
      createdAt: string,
      updatedAt: string | null,
      fromRelations:  {
        __typename: "ModelUserRelationConnection",
        nextToken: string | null,
      } | null,
      toRelations:  {
        __typename: "ModelUserRelationConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnCreateRoomSubscription = {
  onCreateRoom:  {
    __typename: "Room",
    id: string,
    name: string,
    password: string | null,
    ownerId: string,
    owner:  {
      __typename: "User",
      id: string,
      email: string,
      nickname: string,
      icon: string | null,
      roomId: string | null,
      createdAt: string,
      updatedAt: string | null,
      fromRelations:  {
        __typename: "ModelUserRelationConnection",
        nextToken: string | null,
      } | null,
      toRelations:  {
        __typename: "ModelUserRelationConnection",
        nextToken: string | null,
      } | null,
    } | null,
    users:  {
      __typename: "ModelUserConnection",
      items:  Array< {
        __typename: "User",
        id: string,
        email: string,
        nickname: string,
        icon: string | null,
        roomId: string | null,
        createdAt: string,
        updatedAt: string | null,
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
    ownerId: string,
    owner:  {
      __typename: "User",
      id: string,
      email: string,
      nickname: string,
      icon: string | null,
      roomId: string | null,
      createdAt: string,
      updatedAt: string | null,
      fromRelations:  {
        __typename: "ModelUserRelationConnection",
        nextToken: string | null,
      } | null,
      toRelations:  {
        __typename: "ModelUserRelationConnection",
        nextToken: string | null,
      } | null,
    } | null,
    users:  {
      __typename: "ModelUserConnection",
      items:  Array< {
        __typename: "User",
        id: string,
        email: string,
        nickname: string,
        icon: string | null,
        roomId: string | null,
        createdAt: string,
        updatedAt: string | null,
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
    ownerId: string,
    owner:  {
      __typename: "User",
      id: string,
      email: string,
      nickname: string,
      icon: string | null,
      roomId: string | null,
      createdAt: string,
      updatedAt: string | null,
      fromRelations:  {
        __typename: "ModelUserRelationConnection",
        nextToken: string | null,
      } | null,
      toRelations:  {
        __typename: "ModelUserRelationConnection",
        nextToken: string | null,
      } | null,
    } | null,
    users:  {
      __typename: "ModelUserConnection",
      items:  Array< {
        __typename: "User",
        id: string,
        email: string,
        nickname: string,
        icon: string | null,
        roomId: string | null,
        createdAt: string,
        updatedAt: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};
