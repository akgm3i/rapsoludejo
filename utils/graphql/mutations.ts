// tslint:disable
// eslint-disable
// this is an auto generated file. This will be overwritten

export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      email
      username
      icon
      roomId
      createdAt
      updatedAt
      fromRelations {
        items {
          id
          fromUserId
          toUserId
          status
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      toRelations {
        items {
          id
          fromUserId
          toUserId
          status
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      email
      username
      icon
      roomId
      createdAt
      updatedAt
      fromRelations {
        items {
          id
          fromUserId
          toUserId
          status
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      toRelations {
        items {
          id
          fromUserId
          toUserId
          status
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const createUserRelation = /* GraphQL */ `
  mutation CreateUserRelation(
    $input: CreateUserRelationInput!
    $condition: ModelUserRelationConditionInput
  ) {
    createUserRelation(input: $input, condition: $condition) {
      id
      fromUserId
      toUserId
      status
      createdAt
      updatedAt
      fromUser {
        id
        email
        username
        icon
        roomId
        createdAt
        updatedAt
        fromRelations {
          nextToken
        }
        toRelations {
          nextToken
        }
      }
      toUser {
        id
        email
        username
        icon
        roomId
        createdAt
        updatedAt
        fromRelations {
          nextToken
        }
        toRelations {
          nextToken
        }
      }
      owner
    }
  }
`;
export const updateUserRelation = /* GraphQL */ `
  mutation UpdateUserRelation(
    $input: UpdateUserRelationInput!
    $condition: ModelUserRelationConditionInput
  ) {
    updateUserRelation(input: $input, condition: $condition) {
      id
      fromUserId
      toUserId
      status
      createdAt
      updatedAt
      fromUser {
        id
        email
        username
        icon
        roomId
        createdAt
        updatedAt
        fromRelations {
          nextToken
        }
        toRelations {
          nextToken
        }
      }
      toUser {
        id
        email
        username
        icon
        roomId
        createdAt
        updatedAt
        fromRelations {
          nextToken
        }
        toRelations {
          nextToken
        }
      }
      owner
    }
  }
`;
export const deleteUserRelation = /* GraphQL */ `
  mutation DeleteUserRelation(
    $input: DeleteUserRelationInput!
    $condition: ModelUserRelationConditionInput
  ) {
    deleteUserRelation(input: $input, condition: $condition) {
      id
      fromUserId
      toUserId
      status
      createdAt
      updatedAt
      fromUser {
        id
        email
        username
        icon
        roomId
        createdAt
        updatedAt
        fromRelations {
          nextToken
        }
        toRelations {
          nextToken
        }
      }
      toUser {
        id
        email
        username
        icon
        roomId
        createdAt
        updatedAt
        fromRelations {
          nextToken
        }
        toRelations {
          nextToken
        }
      }
      owner
    }
  }
`;
export const createRoom = /* GraphQL */ `
  mutation CreateRoom(
    $input: CreateRoomInput!
    $condition: ModelRoomConditionInput
  ) {
    createRoom(input: $input, condition: $condition) {
      id
      name
      password
      ownerId
      owner {
        id
        email
        username
        icon
        roomId
        createdAt
        updatedAt
        fromRelations {
          nextToken
        }
        toRelations {
          nextToken
        }
      }
      users {
        items {
          id
          email
          username
          icon
          roomId
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const updateRoom = /* GraphQL */ `
  mutation UpdateRoom(
    $input: UpdateRoomInput!
    $condition: ModelRoomConditionInput
  ) {
    updateRoom(input: $input, condition: $condition) {
      id
      name
      password
      ownerId
      owner {
        id
        email
        username
        icon
        roomId
        createdAt
        updatedAt
        fromRelations {
          nextToken
        }
        toRelations {
          nextToken
        }
      }
      users {
        items {
          id
          email
          username
          icon
          roomId
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const deleteRoom = /* GraphQL */ `
  mutation DeleteRoom(
    $input: DeleteRoomInput!
    $condition: ModelRoomConditionInput
  ) {
    deleteRoom(input: $input, condition: $condition) {
      id
      name
      password
      ownerId
      owner {
        id
        email
        username
        icon
        roomId
        createdAt
        updatedAt
        fromRelations {
          nextToken
        }
        toRelations {
          nextToken
        }
      }
      users {
        items {
          id
          email
          username
          icon
          roomId
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      email
      username
      icon
      roomId
      createdAt
      updatedAt
      fromRelations {
        items {
          id
          fromUserId
          toUserId
          status
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      toRelations {
        items {
          id
          fromUserId
          toUserId
          status
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
