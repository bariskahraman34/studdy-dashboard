const participantImages = document.querySelectorAll('.participant-img');
const allAnchorElements = document.querySelectorAll('a');
const userImage = document.querySelector('.profile-anchor img');
console.log(userImage)

function setData(){
  fetch('https://randomuser.me/api/?results=6')
  .then(res => res.json())
  .then(data => listData(data.results))
}

function setDataOneUser(){
  fetch('https://randomuser.me/api/?gender=male')
  .then(res => res.json())
  .then(data => userImage.src = data.results[0].picture.medium)
}

function listData(data){
  participantImages.forEach((img,index) => {
    img.src = data[index].picture.thumbnail;
  })
}

setData();

setDataOneUser();

allAnchorElements.forEach(a => {
  a.addEventListener('click',(e) => {
    e.preventDefault();
  })
})