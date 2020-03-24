// tslint:disable
// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      email
      nickname
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
        }
        nextToken
      }
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      email
      nickname
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
        }
        nextToken
      }
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      email
      nickname
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
        }
        nextToken
      }
    }
  }
`;
export const onCreateUserRelation = /* GraphQL */ `
  subscription OnCreateUserRelation {
    onCreateUserRelation {
      id
      fromUserId
      toUserId
      status
      createdAt
      updatedAt
      fromUser {
        id
        email
        nickname
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
        nickname
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
    }
  }
`;
export const onUpdateUserRelation = /* GraphQL */ `
  subscription OnUpdateUserRelation {
    onUpdateUserRelation {
      id
      fromUserId
      toUserId
      status
      createdAt
      updatedAt
      fromUser {
        id
        email
        nickname
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
        nickname
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
    }
  }
`;
export const onDeleteUserRelation = /* GraphQL */ `
  subscription OnDeleteUserRelation {
    onDeleteUserRelation {
      id
      fromUserId
      toUserId
      status
      createdAt
      updatedAt
      fromUser {
        id
        email
        nickname
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
        nickname
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
    }
  }
`;
export const onCreateRoom = /* GraphQL */ `
  subscription OnCreateRoom {
    onCreateRoom {
      id
      name
      password
      ownerId
      owner {
        id
        email
        nickname
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
          nickname
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
export const onUpdateRoom = /* GraphQL */ `
  subscription OnUpdateRoom {
    onUpdateRoom {
      id
      name
      password
      ownerId
      owner {
        id
        email
        nickname
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
          nickname
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
export const onDeleteRoom = /* GraphQL */ `
  subscription OnDeleteRoom {
    onDeleteRoom {
      id
      name
      password
      ownerId
      owner {
        id
        email
        nickname
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
          nickname
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
