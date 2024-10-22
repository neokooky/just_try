const user1 = {name: 'Миша'};
const user2 = {name: 'Вася'};

function userInfo () {
  console.log('this: ', this)
  console.log('this.name: ', this.name)
};

userInfo();

user1.info = userInfo;
user2.info = userInfo;

user1.info();
user2.info();