const maximumFreelancers = 10;

const freelancersList = [
    { name: "Alice", occupation: "Writer", price: 30 },
    { name: "Bob", occupation: "Teacher", price: 50 },
];

const randomPrices = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

const randomFreelancers = [
    "James",
    "Fudia",
    "Aminata",
    "Courtney",
    "Foday",
    "Gerald",
    "Jennifer",
    "Abdulai",
    "Bandajuma",
    "Madison",
];

const randomOccupations = [
    "Electrician",
    "Nurse",
    "Musician",
    "Banker",
    "Lawyer",
    "Pilot",
    "Sailor",
    "Engineer",
    "Developer",
    "Driver",
];

const averagePrice = () => {
    const totalPrice = freelancersList.reduce(
        (sum, freelancer) => sum + freelancer.price,
        0
    );
    return freelancersList.length === 0 ? 0 : totalPrice / freelancersList.length;
};

function addFreelancers() {
    const name = randomFreelancers[Math.floor(Math.random() * randomFreelancers.length)];
    const price = randomPrices[Math.floor(Math.random() * randomPrices.length)];
    const occupation = randomOccupations[Math.floor(Math.random() * randomOccupations.length)];

    freelancersList.push({ name, occupation, price });

    render();

    if (freelancersList.length >= maximumFreelancers) {
        clearInterval(addIntervalId);
    }
}

function render() {

    const averagePriceDisplayId = document.querySelector("#averagePrice");
    const freelancersListId = document.querySelector("#freelancersList");

    averagePriceDisplayId.classList.add("averagePrice");
    freelancersListId.innerHTML =
        `<tr><th>Name</th>
      <th>Occupation</th>
      <th>Starting Price</th>
     </tr>`;

    freelancersList.forEach((freelancer) => {
        const tr = document.createElement("tr");
        const name = document.createElement("td");
        name.textContent = freelancer.name;

        const occupation = document.createElement("td");
        occupation.textContent = freelancer.occupation;

        const price = document.createElement("td");
        price.textContent = `$${freelancer.price}`;

        tr.appendChild(name);
        tr.appendChild(occupation);
        tr.appendChild(price);

        freelancersListId.appendChild(tr);

        const averageListPrice = document.querySelector("#averagePrice");
        averageListPrice.innerHTML = `The average starting price is: $${averagePrice().toFixed(2)}`;
    });
}

const addIntervalId = setInterval(addFreelancers, 3000);

render();

