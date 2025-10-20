let car = {
    mark: "toyota",
    model: "Supra",
    year: 2023,
}

let currentYear = new Date().getFullYear();

console.log(car.mark);

if (currentYear - car.year <= 10 ) {
    console.log("Auto nav vecāks par 10 gadiem");
}
else {
    console.log("Auto ir vecāks par 10 gadiem");
}