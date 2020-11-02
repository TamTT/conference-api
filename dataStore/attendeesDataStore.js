'use strict';
// an abstraction layer for storing Attendees data 
class attendeesDataStore {
  constructor() {
      this.data = [];
  }

  get(name) {
    var res;
      this.data.forEach( (attendee) => {
        if(attendee.name == name){
          res = attendee;
        }
      })
      return res;
  }

  get(id) {
    var res;
      this.data.forEach( (attendee) => {
        if(attendee.id == id){
          res = attendee;
        }
      })
      return res;
  }

  getAll() {
    return this.data;
  }

  insert(id, name, company, email, registerTime){
    this.data.push({
        "id": id,
        "name": name, 
        "company": company, 
        "email": email,
        "registered":registerTime
    })
  }
  
}

module.exports = attendeesDataStore;