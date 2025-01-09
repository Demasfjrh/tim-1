// js
// Fungsi untuk mengakses data mobil
function getCarById(id) {
    return cars.find(car => car.id === id);
}

// Contoh penggunaan
console.log(getCarById(3)); // Menampilkan data Suzuki Ertiga


// Fungsi untuk menampilkan daftar mobil
function displayCars() {
    const tbody = document.querySelector("#car-list tbody");
    tbody.innerHTML = ""; // Kosongkan tabel sebelum mengisi ulang

    cars.forEach((car, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${car.name}</td>
            <td>Rp ${car.price.toLocaleString()}</td>
            <td><button onclick="deleteCar(${index})">Hapus</button></td>
        `;

        tbody.appendChild(row);
    });
}

// Fungsi untuk menambahkan mobil baru
function addCar(event) {
    event.preventDefault(); // Mencegah reload halaman

    const name = document.querySelector("#car-name").value;
    const price = parseInt(document.querySelector("#car-price").value);

    if (name && price) {
        cars.push({ name, price });
        displayCars();
        document.querySelector("#car-form").reset(); // Reset form
    }
}

// Fungsi untuk menghapus mobil berdasarkan index
function deleteCar(index) {
    cars.splice(index, 1); // Hapus item dari array
    displayCars();
}

// Event listener untuk form
document.querySelector("#car-form").addEventListener("submit", addCar);

// Tampilkan data awal (jika ada)
displayCars();