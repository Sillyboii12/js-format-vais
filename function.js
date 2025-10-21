function intSequence(first, last) {
    let output = "";
    for (let i = first; i <= last; i++) {
        output += i;
        if (i < last) {
            output += ",";
        }
    }
    console.log(output);
}

intSequence(5,8)