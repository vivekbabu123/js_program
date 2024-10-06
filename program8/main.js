function fibonacci() {
    let user_no = parseInt(document.getElementById("number").value);
    let first_no = 0, second_no = 1, result;

    // Initialize the result with the first two numbers
    let output = "Fibonacci Series -> " + first_no + " " + second_no + " ";

    // Generate the Fibonacci sequence until the number is reached
    while (true) {
        result = first_no + second_no;
        
        if (result >= user_no) {
            break;
        }

        output += result + " ";
        first_no = second_no;
        second_no = result;
    }

    // Display the result in the paragraph with id "result"
    document.getElementById("result").innerHTML = output;
}
