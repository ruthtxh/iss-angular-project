
export class Init {
  initCommentStorage() {
    //Characters
    for (var i = 1; i <= 10; i++) {
      let item = 'Character' + i;
      this.load(item);
    }
    //Films

    for (var i = 1; i <= 7; i++) {
      let item = 'Film' + i;
      this.load(item);
    }
    //Planets
    for (var i = 1; i <= 10; i++) {
      let item = 'Planet' + i;
      this.load(item);
    }
    //Species
    for (var i = 1; i <= 10; i++) {
      let item = 'Species' + i;
      this.load(item);
    }
    //Starship
    for (var i = 1; i <= 10; i++) {
      let item = 'Starship' + i;
      this.load(item);
    }
    //Vehicles
    for (var i = 1; i <= 10; i++) {
      let item = 'Vehicle' + i;
      this.load(item);
    }

  }

  load(item) {
    if (localStorage.getItem(item) === null || localStorage.getItem(item) == undefined) {
      let comments = [
        {
          text: 'Random Comment'
        }
      ];
      localStorage.setItem(item, JSON.stringify(comments));
      return
    } else {
    }
  }
}
