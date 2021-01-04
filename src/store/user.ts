import { observable } from 'mobx'

const counterStore = observable({
  user: '',
  getUser() {
    return this.user;
  },
  setUser(user: string) {
    this.user = user;
  }
})

export default counterStore;
