//Function to generate random client Id for users that would select option
const generateID = () => {
    let arr = ["user1234","coder123","appl123","client123"]
    let id = arr[Math.floor(Math.random() * arr.length)];
    //using a sample string 


    return id;
}

export default generateID;