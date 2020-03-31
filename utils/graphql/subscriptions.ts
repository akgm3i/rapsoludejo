// tslint:disable
// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateUserRelation = /* GraphQL */ `
  subscription OnCreateUserRelation($owner: String!) {
    onCreateUserRelation(owner: $owner) {
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
