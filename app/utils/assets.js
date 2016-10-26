import firebase from 'firebase';


class Assets {
  constructor() {
    this.imagesRef = firebase.storage().ref().child('images'); // 1
    this.faceIconsRef = firebase.storage().ref().child('images/face_icons'); // 2
    this.soundsRef = firebase.storage().ref().child('sounds'); // 3
    this.assetList = this.assetListMaker();
    this.images = new Object(null);
    this.sounds = new Object(null);
    this.faceIcons = new Object(null);
    this.loaded = false;
    var that = this;
    var a;
    this.assetList.forEach( (asset, idx) => {

      switch (asset[1]) {
        case 1:
          that.imagesRef.child(asset[0]).getDownloadURL().then(function(url) {
            that.images[asset[0]] = url;
            // console.log(idx);
            if (idx < 24) {
            a = new Image();
            a.onload = ()=>console.log("loaded " + asset[0]);
            a.src = url;
            // console.log(url);
            }
          });
          break;
        case 2:
          that.faceIconsRef.child(asset[0]).getDownloadURL().then(function(url) {
            that.faceIcons[asset[0]] = url;
            // var b = new Image();
            // b.src = url;
            // b = undefined;
          });
          break;
        case 3:
          that.soundsRef.child(asset[0]).getDownloadURL().then(function(url) {
            that.sounds[asset[0]] = url;
            var tester3 = new Audio(url);
            tester3 = undefined;
          });
          break;
        default:
          break;
      }
    } );

  } //end constructor


  assetListMaker() { // 1 = image, 2 = face icon, 3 = sound
    return ([
      ['newfloor.png',1],
      ['hero_spritesheet.png',1],
      ['hero_seated_spritesheet.png',1],
      ['secretary.png',1],
      ['desks.png',1],
      ['desks2.png',1],
      ['ruby.png',1],
      ['student1.png',1],
      ['student2.png',1],
      ['student3.png',1],
      ['student4.png',1],
      ['student5.png',1],
      ['student6.png',1],
      ["bed.png",1],
      ["happy.png",1],
      ["star.png",1],
      ['ned3-blur.png',1],
      ['ned3.png',1],
      ['rays.jpeg',1],
      ['eyes_open.png',1],
      ['eyes_closed.png',1],
      ['line_explosion.jpg',1],
      ['computer_screen2.png',1],
      ['frontface2.png',1],
      ['moon.png',1],
      ['sheep2.png',1],
      ['ned1.png',1],
      ['bug.png',1],
      ['fire.png',1],
      ['coffee.png',1],
      ['donut.png',1],
      ['lunch.png',1],
      ['empty_secretary.png',1],
      ["ned2.png",1],
      ['rested_happy_look_left.jpg', 2],
      ['rested_unhappy_look_left.jpg', 2],
      ['blink.jpg', 2],
      ['on_fire.jpg',2],
      ['on_fire1.jpg',2],
      ['on_fire2.jpg',2],
      ['on_fire3.jpg',2],
      ['on_fire4.jpg',2],
      ['on_fire5.jpg',2],
      ['on_fire6.jpg',2],
      ['on_fire7.jpg',2],
      ['rested_teeth.jpg', 2],
      ['tired_teeth.jpg', 2],
      ['rested_happy.jpg',2],
      ['super_happy.jpg',2],
      ['tired_happy.jpg',2],
      ['tired_happy2.jpg',2],
      ['exhausted_sad.jpg',2],
      ['rested_sad.jpg',2],
      ['tired_indifferent.jpg',2],
      ['exhausted_sad.jpg',2],
      ['rested_angry.jpg',2],
      ['tired_angry.jpg',2],
      ['tired_miserable.jpg',2],
      ['exhausted_angry.jpg',2],
      ['typing.wav',3],
      ['missed.wav',3],
      ['beep.wav',3],
      ['congrats-ding.wav', 3],
      ['buzzer.mp3', 3],
      ['explosion.wav', 3],
      ['opening_lecture.wav',3],
      ['Rock-a-bye Baby.mp3',3],
      ['trippy.wav',3],
      ['microwave_start.wav',3],
      ['shot.wav',3],
      ['bug_sound.wav',3],
      ['hes_on_fire.wav',3],
      ['fire.wav',3],
      ['coffee.wav',3],
      ['donut.wav',3],
      ['microwave.wav',3],
      ['woohoo.wav',3],
      ['icon.wav',3]

    ]);
  }
}


export default Assets;
