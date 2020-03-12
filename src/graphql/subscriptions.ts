// tslint:disable
// this is an auto generated file. This will be overwritten

export const onCreateRoom = /* GraphQL */ `
  subscription OnCreateRoom {
    onCreateRoom {
      id
      name
      password
      owner
      users {
        items {
          id
          name
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
      owner
      users {
        items {
          id
          name
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
      owner
      users {
        items {
          id
          name
        }
        nextToken
      }
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      name
      room {
        id
        name
        password
        owner
        users {
          nextToken
        }
      }
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      name
      room {
        id
        name
        password
        owner
        users {
          nextToken
        }
      }
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      name
      room {
        id
        name
        password
        owner
        users {
          nextToken
        }
      }
    }
  }
`;
