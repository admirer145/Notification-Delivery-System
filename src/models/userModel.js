class UserModel {

    static async getAll() {
      // Logic to fetch all users from the database
      let userList = [{"name": "sample name"}];
      console.log(userList)
      return userList;
    }
  
    static async getById(id) {
      // Logic to fetch user by ID from the database
      const user = 'Sample get'
      return user;
    }
  
    static async create(userData) {
      // Logic to create a new user in the database
      const newUser = 'Sample create';
      return newUser;
    }
  
    static async update(id, updatedUserData) {
      // Logic to update user by ID in the database
      const updatedUser = 'Sample update';
      return updatedUser;
    }
  
    static async delete(id) {
      // Logic to delete user by ID from the database
      /* Delete user from database */;
    }
  }
  
  module.exports = UserModel;
  