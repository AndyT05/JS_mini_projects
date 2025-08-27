const input = document.getElementById("input");

function check() {
    const value = input.value;
    const reversed = value.split("").reverse().join("");
    if (value === reversed){
        alert("PALINDROME");
    }else{
        alert("NOT PALINDROME");
    }

    input.value = "";
}
