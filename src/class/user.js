class User {
  static USER_ROLE = {
    USER: 1,
    ADMIN: 2,
    DEVELOPER: 3,
  }

  static #list = []
  //__________________Для token_________________
  static #count = 1
  // ___________________________________________

  constructor({ email, password, role }) {
    //__________________Для token_________________
    this.id = User.#count++
    // ___________________________________________

    this.email = String(email).toLowerCase()
    this.password = String(password)
    this.role = User.#convertRole(role)

    //__________________Для token_________________
    this.isConfirm = false
    // ___________________________________________
  }

  static #convertRole = (role) => {
    role = Number(role)

    if (isNaN(role)) {
      role = this.USER_ROLE.USER
    }

    role = Object.values(this.USER_ROLE).includes(role)
      ? role
      : this.USER_ROLE.USER

    return role
  }

  static create(data) {
    const user = new User(data)
    this.#list.push(user)

    console.log(this.#list)
    //__________________Для token_________________
    return user
    // ___________________________________________
  }

  // --------------функціонал реєстрації та відновлення-----------------

  static getByEmail(email) {
    return (
      this.#list.find(
        (user) =>
          user.email === String(email).toLowerCase(),
      ) || null
    )
  }
}

module.exports = {
  User,
}
