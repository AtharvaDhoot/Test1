myFun = () => {
    const name = document.getElementById("name").value
    const score = document.getElementById('sgpa').value

    if (score > 10 || score < 0) {
        document.getElementById('name2').innerHTML = name
        document.getElementById('result').innerHTML = "Please Enter a valid Input Please .....!!"

    }
    else {

        if (isNaN(score)) {
            document.getElementById('name2').innerHTML = name
            document.getElementById('result').innerHTML = "Please Enter a valid Input Please .....!!"
        }
        else {
            let result = (score * 10) - 7.5
            if (result === -7.5) {

                document.getElementById('name2').innerHTML = name
                document.getElementById('result').innerHTML = "Enter Valid Input.."

            }
            else {

                document.getElementById('name2').innerHTML = name
                document.getElementById('result').innerHTML = result

            }
        }
    }
}
myFun2 = () => {
    const input = document.getElementsByName('array[]')
    let sum1 = 0
    let count = 0;

    for (let i = 0; i < input.length; i++) {
        let value1 = (input[i].value)
        let value2 = parseFloat(value1)

        if (isNaN(value2)) {
            value2 = parseInt(0)
        }
        else {
            count++
        }
        sum1 += value2
        //console.log(value2);
    }
    let average = sum1 / count
    if (isNaN(average)) {
        document.getElementById('result2').innerHTML = "Enter valid input..//"
    } else {

        document.getElementById('result2').innerHTML = average
    }
    console.log(average);

}

const crditScore = document.getElementsByClassName("creditScore")
const gradePoint = document.getElementsByClassName("gradePiont")
const calculate = document.getElementById("calculate")


    var checkScore= {
        A: 9,
        B :8,
        O :10,
        C:7,
        D:6,
        E:5
    };




calculate.addEventListener("click", (e) => {
    e.preventDefault();
    let mulSum = parseInt(0);
    let totalSum = parseInt(0);
    let creditSum =parseInt(0);

    for (let index = 0; index < gradePoint.length; index++) {
        let element = (gradePoint[index].value);
        if (isNaN(element) || element == "") {
            element = 0;
            
        }

        let creditValue = crditScore[index].value
        var element2 = checkScore[creditValue];
        if (isNaN(element2) || element2 == "") {
            element2 = 0;
            
        }
        creditSum+=parseInt(element);
        mulSum =parseInt(element*element2)
        totalSum+=mulSum;  
        
        //document.getElementById("para").innerText="Your score is " +totalSum/creditSum
        document.getElementById("result3").innerText=totalSum/creditSum
        console.log(totalSum/creditSum);
        
    }

})
