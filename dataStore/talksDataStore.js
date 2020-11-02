'use strict';
// an abstraction layer for storing Talks data 
class talksDataStore {
  constructor() {
      this.data = [];
  }

  get(title) {
    var res;
      this.data.forEach( (talk) => {
        if(talk.title == title){
          res = talk;
        }
      })
      return res;
  }
  get(id) {
    var res;
      this.data.forEach( (talk) => {
        if(talk.id == id){
          res = talk;
        }
      })
      return res;
  }

  getAll() {
    return this.data;
  }

  insert(id, title, room, speaker){
    this.data.push({
      "id": id,
      "title": title, 
      "room": room,
      "speaker": speaker
    })
  }

  update(req,res){
    var talk = this.get(req.params.id);
    if (!talk) {
      return res.send("Talk not found");
    } 
    this.data[req.params.id] = req.params;
  }
  
}

module.exports = talksDataStore;