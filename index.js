// Database mobil bekas

const cars = [
    {
        id: 1,
        name: "Toyota Avanza",
        price: 180000000,
        description: "Mobil keluarga yang nyaman dan irit bahan bakar.",
        image: "https://via.placeholder.com/300x200?text=Toyota+Avanza",
    },
    {
        id: 2,
        name: "Honda Civic",
        price: 320000000,
        description: "Sedan sporty dengan desain modern dan performa handal.",
        image: "https://via.placeholder.com/300x200?text=Honda+Civic",
    },
    {
        id: 3,
        name: "Suzuki Ertiga",
        price: 210000000,
        description: "MPV dengan kapasitas besar dan fitur canggih.",
        image: "https://via.placeholder.com/300x200?text=Suzuki+Ertiga",
    },
    {
        id: 4,
        name: "Mitsubishi Pajero",
        price: 500000000,
        description: "SUV tangguh untuk medan berat dan perjalanan jauh.",
        image: "https://cdn.pixabay.com/photo/2023/01/07/15/02/ai-generated-7703436_960_720.jpg",
    },
    {
        id: 5,
        name: "Daihatsu Ayla",
        price: 120000000,
        description: "City car yang kompak dan ramah lingkungan.",
        image: "https://via.placeholder.com/300x200?text=Daihatsu+Ayla",
    },
    {
        id: 6,
        name: "Ford Ranger",
        price: 450000000,
        description: "Pickup truck tangguh dengan performa terbaik di kelasnya.",
        image: "https://via.placeholder.com/300x200?text=Ford+Ranger",
    },
];

// Fungsi untuk menampilkan mobil dalam bentuk kartu
function displayCars(car) {
    const container = document.querySelector(".card-container");
    container.innerHTML = ""; // Kosongkan kontainer sebelum mengisi ulang

    cars.forEach((car) => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <img src="${car.image}" alt="${car.name}">
            <div class="card-content">
                <h3>${car.name}</h3>
                <p>${car.description}</p>
                <p class="price">Rp ${car.price.toLocaleString()}</p>
                <button onclick="buyCar(${car.id})">Beli</button>
            </div>
        `;

        container.appendChild(card);
    });
}

// Fungsi ketika tombol "Beli" diklik
function buyCar(id) {
    const car = cars.find((c) => c.id === id);
    alert(`Anda telah membeli ${car.name} seharga Rp ${car.price.toLocaleString()}.`);
    inde
    const notCar = cars.
    
    console.log (car)
}

// Tampilkan mobil saat halaman dimuat
displayCars();
