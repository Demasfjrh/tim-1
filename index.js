// Database mobil bekas
const cars = [
    { id: 1, name: "Toyota Avanza", price: 180000000, kategori: "keluarga", description: "Mobil keluarga nyaman.", image: "https://via.placeholder.com/300x200?text=Toyota+Avanza" },
    { id: 2, name: "Honda Civic", price: 320000000, kategori: "sport", description: "Sedan sporty modern.", image: "https://via.placeholder.com/300x200?text=Honda+Civic" },
    { id: 3, name: "Suzuki Ertiga", price: 210000000, kategori: "mpv", description: "MPV kapasitas besar.", image: "https://via.placeholder.com/300x200?text=Suzuki+Ertiga" },
    { id: 4, name: "Daihatsu Xenia", price: 190000000, kategori: "keluarga", description: "Alternatif keluarga terbaik.", image: "https://via.placeholder.com/300x200?text=Daihatsu+Xenia" },
    { id: 5, name: "Ford Mustang", price: 700000000, kategori: "sport", description: "Mobil sport klasik dan keren.", image: "https://via.placeholder.com/300x200?text=Ford+Mustang" },
    { id: 6, name: "Kia Carnival", price: 450000000, kategori: "mpv", description: "MPV premium dan luas.", image: "https://via.placeholder.com/300x200?text=Kia+Carnival" },
];

// Fungsi untuk menampilkan mobil dalam bentuk kartu
function displayCars(filteredCars = cars) {
    const container = document.querySelector(".card-container");
    container.innerHTML = ""; // Kosongkan kontainer sebelum mengisi ulang

    filteredCars.forEach((car) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.setAttribute("data-id", car.id);

        card.innerHTML = `
            <img src="${car.image}" alt="${car.name}">
            <div class="card-content">
                <h3>${car.name}</h3>
                <p id="desc-${car.id}">${car.description}</p>
                <p class="price">Rp ${car.price.toLocaleString()}</p>
                <button onclick="editDescription(${car.id})">Edit Deskripsi</button>
                <button onclick="buyCar(${car.id})">Beli</button>
            </div>
        `;

        container.appendChild(card);
    });
}

// Fungsi ketika tombol "Beli" diklik
function buyCar(id) {
    const car = cars.find((c) => c.id === id);
    if (!car) return;

    alert(`Anda telah membeli ${car.name} seharga Rp ${car.price.toLocaleString()}.`);
    const carIndex = cars.findIndex((c) => c.id === id);
    if (carIndex > -1) {
        cars.splice(carIndex, 1); // Hapus dari array
    }
    displayCars(); // Tampilkan ulang kartu tanpa mobil yang telah dibeli
}

// Fungsi untuk menyortir mobil berdasarkan kategori
function sortCarsByCategory() {
    const kategori = document.getElementById("kategori").value;

    if (kategori === "all") {
        displayCars(); // Tampilkan semua mobil
    } else {
        const filteredCars = cars.filter((car) => car.kategori === kategori);
        displayCars(filteredCars); // Tampilkan mobil berdasarkan kategori
    }
}

// Fungsi untuk mengedit deskripsi
function editDescription(id) {
    const car = cars.find((c) => c.id === id);
    if (!car) return;

    const newDescription = prompt("Masukkan deskripsi baru:", car.description);
    if (newDescription !== null && newDescription.trim() !== "") {
        car.description = newDescription;

        const descElement = document.getElementById(`desc-${id}`);
        if (descElement) {
            descElement.textContent = newDescription;
        }
    }
}

// Fungsi untuk menambahkan mobil baru
function addCar(event) {
    event.preventDefault();

    const name = document.getElementById("carName").value;
    const price = parseInt(document.getElementById("carPrice").value, 10);
    const description = document.getElementById("carDescription").value;
    const category = document.getElementById("carCategory").value;

    cars.push({
        id: cars.length + 1,
        name,
        price,
        kategori: category,
        description,
        image: "https://via.placeholder.com/300x200?text=" + encodeURIComponent(name),
    });

    document.getElementById("addCarForm").reset();
    displayCars();
}

// Event listener untuk formulir
document.getElementById("addCarForm").addEventListener("submit", addCar);

// Tampilkan mobil saat halaman dimuat
displayCars();
