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
    var that = this;
    this.assetList.forEach( (asset) => {
      switch (asset[1]) {
        case 1:
          that.imagesRef.child(asset[0]).getDownloadURL().then(function(url) {
            that.images[asset[0]] = url;
          });
          break;
        case 2:
          that.faceIconsRef.child(asset[0]).getDownloadURL().then(function(url) {
            that.faceIcons[asset[0]] = url;
          });
          break;
        case 3:
          that.faceIconsRef.child(asset[0]).getDownloadURL().then(function(url) {
            that.sounds[asset[0]] = url;
          });
          break;
        default:
          break;
      }
    } );

  } //end constructor


  assetListMaker() { // 1 = image, 2 = face icon, 3 = sound
    return ([
      ["bed.png",1],
      ["happy.png",1],
      ["star.png",1],
      ["ned2.png",1],
      ['congrats-ding.wav', 3],
      ['buzzer.mp3', 3],
      ['explosion.wav', 3],
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
      ['rested_happy.jpg',2],
      ['tired_happy.jpg',2],
      ['tired_happy2.jpg',2],
      ['exhausted_sad.jpg',2],
      ['rested_sad.jpg',2],
      ['tired_indifferent.jpg',2],
      ['exhausted_sad',2],
      ['rested_angry',2],
      ['tired_angry',2],
      ['tired_miserable.jpg',2],
      ['exhausted_angry.jpg',2],
      ['opening_lecture.wav',3],
      ['Rock-a-bye Baby.mp3',3],
      ['trippy.wav',3],
      ['ned3-blur.png',1],
      ['ned3.png',1],
      ['rays.jpeg',1],
      ['eyes_open.png',1],
      ['eyes_closed.png',1],
      ['newfloor.png',1],
      ['microwave_start.wav',3],
      ['shot.wav',3],
      ['line_explosion.jpg',1],
      ['missed.wav',3],
      ['beep.wav',3],
      ['computer_screen2.png',1],
      ['typing.wav',3],

    ]);
  }
}


export default Assets;
