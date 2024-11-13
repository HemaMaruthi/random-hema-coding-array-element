// console.log("Hello NPM")
let data = [
    "Class 01 is HTML",
    "Class 02 is CSS",
    "Class 03 is  JavaScript",
    "Class 04 is  React",
    "Class 05 is Node"
]

function getRandomData(){
   let randomIndex = Math.floor(Math.random() * data.length)
    // console.log(data[0])
    console.log(randomIndex)
    // console.log(data[randomIndex])
    return data[randomIndex]

}
// getRandomData()
module.exports = getRandomData
