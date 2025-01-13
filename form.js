// Database mobil bekas
const cars = [
  {
    id: 1,
    name: 'Toyota vnt innova',
    price: 430000000,
    kategori: 'suv',
    description: 'Mobil keluarga nyaman.',
    image:
      'https://th.bing.com/th/id/OIP.LyBIy8JVcRyo-12mGPX19AHaFj?rs=1&pid=ImgDetMain',
  },
  {
    id: 2,
    name: 'Honda Civic',
    price: 320000000,
    kategori: 'sport',
    description: 'Sedan sporty modern.',
    image:
      'https://www.doktermobil.co.id/wp-content/uploads/2024/07/Jepretan-Layar-2024-07-25-pukul-15.07.13.png',
  },
  {
    id: 3,
    name: 'Fortuner vnt biturbo',
    price: 210000000,
    kategori: 'suv',
    description: 'Suv disel terbaik.',
    image:
      'https://th.bing.com/th/id/OIP.6Bqs3vCOGc3Uhy-k9gqLsAHaFj?rs=1&pid=ImgDetMain',
  },
  {
    id: 4,
    name: 'mercedes benz v-class',
    price: 1865000000,
    kategori: 'mpv',
    description: 'Alternatif keluarga.',
    image:
      'https://lh7-us.googleusercontent.com/XXMlAcWYVNaWaPR3UCF-MB0Pp3yRGYYqL26UCORbzIXSb6iigKT7YqCskOQxVMup3ds0gQYEW9rnv87dA2z1b5WzT1UCPAdBX6pRNuhA8BVyynW_hvHLv6D9Y8lXJTGihzvwtQLKHtf2EiMRGmZR0Pg',
  },
  {
    id: 5,
    name: 'Ford Mustang',
    price: 700000000,
    kategori: 'sport',
    description: 'Mobil sport klasik dan keren.',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6ULr6nSIQkPVK3B7FO94kUpnD56Ws8tm7kNUNzZpLQh_WBFBOMLZjyV5nGQUBOATDmRM&usqp=CAU',
  },
  {
    id: 6,
    name: 'Lexus Lm 350',
    price: 450000000,
    kategori: 'mpv',
    description: 'MPV premium dan luas.',
    image:
      'https://thumb.katadata.co.id/frontend/thumbnail/2022/09/02/zigi-6311c9a657afb-lexus-lm-350_910_512.jpg',
  },
];

// Fungsi untuk menampilkan mobil dalam bentuk kartu
function displayCars(filteredCars = cars) {
  const container = document.querySelector('.card-container');
  container.innerHTML = ''; // Kosongkan kontainer sebelum mengisi ulang

  filteredCars.forEach((car) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.setAttribute('data-id', car.id);

    card.innerHTML = `
            <img src="${car.image}" alt="${car.name}">
            <div class="card-content">
                <h3 id="nama${car.id}">${car.name}</h3>
                <p id="desc-${car.id}">${car.description}</p>
                <p class="price" id="harga-${
                  car.id
                }">Rp ${car.price.toLocaleString()}</p>
                <button onclick="editDescription(${car.id})">Edit</button>
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

  alert(
    `Anda telah membeli ${car.name} seharga Rp ${car.price.toLocaleString()}.`
  );

  const carIndex = cars.findIndex((c) => c.id === id);
  if (carIndex > -1) {
    cars.splice(carIndex, 1); // Hapus mobil dari array
  }

  // Setelah pembelian, perbarui tampilan berdasarkan kategori yang dipilih
  sortCarsByCategory();
}

function sortCarsByCategory() {
  const kategori = document.getElementById('kategori').value;

  if (kategori === 'all') {
    displayCars(); // Jika kategori "all", tampilkan semua mobil
  } else {
    // Filter ulang mobil berdasarkan kategori yang dipilih
    const filteredCars = cars.filter((car) => car.kategori === kategori);
    displayCars(filteredCars);
  }
}

// Fungsi untuk mengedit deskripsi
function editDescription(id) {
  const car = cars.find((c) => c.id === id);
  if (!car) return;

  const newDescription = prompt('Masukkan deskripsi baru:', car.description);
  const newName = prompt('Masukkan nama baru:', car.name);
  const newPrice = prompt('Masukkan harga baru:', car.price);
  if (newDescription !== null && newDescription.trim() !== '') {
    car.description = newDescription;

    const descElement = document.getElementById(`desc-${id}`);
    if (descElement) {
      descElement.textContent = newDescription;
    }
  }
  if (newName !== null && newName.trim() !== '') {
    car.name = newName;

    const nameelemnt = document.getElementById(`nama${id}`);
    if (nameelemnt) {
      nameelemnt.textContent = newName;
    }
  }
  if (newPrice !== null && newPrice.trim() !== '') {
    car.price = newPrice;

    const rupiah = (number) => {
      return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
      }).format(number);
    };
    let harga = rupiah(car.price);

    const priceElement = document.getElementById(`harga-${car.id}`);
    if (priceElement) {
      priceElement.textContent = harga;
    }
  }
}

// Fungsi untuk menambahkan mobil baru
function addCar(event) {
  event.preventDefault();

  const name = document.getElementById('carName').value;
  const price = parseInt(document.getElementById('carPrice').value, 10);
  const description = document.getElementById('carDescription').value;
  const category = document.getElementById('carCategory').value;
  const image = document.getElementById('foto').value;

  cars.push({
    id: cars.length + 1,
    name,
    price,
    kategori: category,
    description,
    image: image + encodeURIComponent(name),
  });

  document.getElementById('addCarForm').reset();
  displayCars();
}

document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll(
    '#addCarForm, label, select, .back-button'
  );
  elements.forEach((el, index) => {
    el.style.animationDelay = `${index * 0.3}s`; // Delay bertahap
    el.classList.add('fade-in');
  });
});

// Event listener untuk formulir
document.getElementById('addCarForm').addEventListener('submit', addCar);

// * event listener untuk form dan untuk cards agar hide dan show
function tombolForm(params) {
  document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#addCarForm'); // Pastikan ID form sesuai
    const cards = document.querySelector('.card-container'); // Sesuaikan selector cards
    const toggleButton = document.querySelector('#show'); // Tombol toggle
    const selectbtn = document.querySelector('.sort-panel'); // Tombol select

    // Set kondisi awal: form tersembunyi, cards terlihat
    form.style.display = 'none';
    cards.style.display = 'flex';

    // Tambahkan event listener untuk tombol
    toggleButton.addEventListener('click', () => {
      if (form.style.display === 'none') {
        // Tampilkan form, sembunyikan cards
        form.style.display = 'block';
        cards.style.display = 'none';
        toggleButton.textContent = 'Selesai'; // Ubah teks tombol
        selectbtn.style.display = 'none';
      } else {
        // Tampilkan cards, sembunyikan form
        form.style.display = 'none';
        cards.style.display = 'flex';
        toggleButton.textContent = 'Jual Mobil Anda Di Sini'; // Ubah teks tombol
        selectbtn.style.display = 'contents';
      }
    });
  });
}

// Tampilkan mobil saat halaman dimuat
displayCars();
tombolForm();

module.export = {
  displayCars,
  buyCar,
  editDescription,
  addCar,
  tombolForm,
};
