const TRAINS_DB = [
  {
    id: 1,
    name: "Argo Bromo Anggrek",
    trainNo: "AR-001",
    from: "Jakarta",
    to: "Surabaya",
    departure: "06:00",
    arrival: "14:00",
    duration: "8 jam",
    price: 350000,
    availableSeats: 45,
    type: "Premium",
    class: "eksekutif",
    hasWifi: true,
    hasFood: true,
    hasCharger: true,
    hasAC: true,
    facilities: ["AC", "WiFi", "Makanan", "Charger", "TV"],
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957",
  },
  {
    id: 2,
    name: "Gajayana",
    trainNo: "GJ-002",
    from: "Jakarta",
    to: "Malang",
    departure: "07:30",
    arrival: "14:30",
    duration: "7 jam",
    price: 280000,
    availableSeats: 12,
    type: "Superfast",
    class: "bisnis",
    hasWifi: true,
    hasFood: true,
    hasCharger: false,
    hasAC: true,
    facilities: ["AC", "WiFi", "Makanan", "TV"],
    image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3",
  },
  {
    id: 3,
    name: "Bima",
    trainNo: "BM-003",
    from: "Jakarta",
    to: "Surabaya",
    departure: "20:00",
    arrival: "04:00",
    duration: "8 jam",
    price: 420000,
    availableSeats: 89,
    type: "Premium",
    class: "eksekutif",
    hasWifi: true,
    hasFood: true,
    hasCharger: true,
    hasAC: true,
    facilities: ["AC", "WiFi", "Makanan", "Charger", "TV", "Selimut"],
    image: "https://images.unsplash.com/photo-1533900298318-6b8da08a523e",
  },
  {
    id: 4,
    name: "Turangga",
    trainNo: "TR-004",
    from: "Bandung",
    to: "Surabaya",
    departure: "09:15",
    arrival: "16:45",
    duration: "7.5 jam",
    price: 250000,
    availableSeats: 34,
    type: "Express",
    class: "bisnis",
    hasWifi: false,
    hasFood: true,
    hasCharger: true,
    hasAC: true,
    facilities: ["AC", "Makanan", "Charger", "TV"],
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957",
  },
  {
    id: 5,
    name: "Sembrani",
    trainNo: "SB-005",
    from: "Jakarta",
    to: "Surabaya",
    departure: "18:30",
    arrival: "02:30",
    duration: "8 jam",
    price: 310000,
    availableSeats: 56,
    type: "Superfast",
    class: "eksekutif",
    hasWifi: true,
    hasFood: false,
    hasCharger: true,
    hasAC: true,
    facilities: ["AC", "WiFi", "Charger", "TV"],
    image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3",
  },
  {
    id: 6,
    name: "Mutiara Selatan",
    trainNo: "MS-006",
    from: "Bandung",
    to: "Surabaya",
    departure: "08:00",
    arrival: "17:00",
    duration: "9 jam",
    price: 190000,
    availableSeats: 23,
    type: "Express",
    class: "ekonomi",
    hasWifi: false,
    hasFood: false,
    hasCharger: false,
    hasAC: true,
    facilities: ["AC", "TV"],
    image: "https://images.unsplash.com/photo-1533900298318-6b8da08a523e",
  },
  {
    id: 7,
    name: "Logawa",
    trainNo: "LG-007",
    from: "Jakarta",
    to: "Yogyakarta",
    departure: "10:00",
    arrival: "17:30",
    duration: "7.5 jam",
    price: 230000,
    availableSeats: 67,
    type: "Express",
    class: "bisnis",
    hasWifi: true,
    hasFood: true,
    hasCharger: true,
    hasAC: true,
    facilities: ["AC", "WiFi", "Makanan", "Charger"],
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957",
  },
  {
    id: 8,
    name: "Bangunkarta",
    trainNo: "BK-008",
    from: "Jakarta",
    to: "Solo",
    departure: "15:00",
    arrival: "23:00",
    duration: "8 jam",
    price: 270000,
    availableSeats: 41,
    type: "Superfast",
    class: "eksekutif",
    hasWifi: true,
    hasFood: true,
    hasCharger: true,
    hasAC: true,
    facilities: ["AC", "WiFi", "Makanan", "Charger", "TV", "Selimut"],
    image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3",
  },
];

export const generateSeatMap = (trainId, trainClass = "eksekutif") => {
  const rows = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  const seats = [];

  const columnsPerRow =
    trainClass === "eksekutif" ? 4 : trainClass === "bisnis" ? 5 : 6;

  rows.forEach((row) => {
    for (let i = 1; i <= columnsPerRow; i++) {
      const isBooked = Math.random() < 0.25;

      let seatType = "middle";
      if (trainClass === "eksekutif") {
        if (i === 1 || i === columnsPerRow) seatType = "window";
        else if (i === 2 || i === columnsPerRow - 1) seatType = "aisle";
      } else {
        if (i === 1 || i === columnsPerRow) seatType = "window";
        else if (i === 2 || i === columnsPerRow - 1) seatType = "aisle";
      }

      let basePrice = 0;
      if (trainClass === "eksekutif") basePrice = 350000;
      else if (trainClass === "bisnis") basePrice = 250000;
      else basePrice = 150000;

      let seatPrice = basePrice;
      if (seatType === "window") seatPrice += 50000;
      if (seatType === "aisle") seatPrice += 25000;

      seats.push({
        id: `${row}${i}`,
        row: row,
        number: i,
        status: isBooked ? "booked" : "vacant",
        type: seatType,
        price: seatPrice,
        class: trainClass,
      });
    }
  });

  return seats;
};

export const fetchTrains = (from, to, date, passengers, classType = "all") => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Searching trains with:", { from, to, date, passengers });

      let filteredTrains = TRAINS_DB;

      if (from && to) {
        filteredTrains = TRAINS_DB.filter((train) => {
          const fromMatch = train.from.toLowerCase() === from.toLowerCase();
          const toMatch = train.to.toLowerCase() === to.toLowerCase();

          return fromMatch && toMatch;
        });
      }

      console.log("Filtered trains by route:", filteredTrains.length);

      if (classType !== "all") {
        filteredTrains = filteredTrains.filter(
          (train) => train.class === classType,
        );
      }

      const trainsWithAvailability = filteredTrains.map((train) => ({
        ...train,
        availableSeats: Math.max(
          0,
          train.availableSeats - Math.floor(Math.random() * 20),
        ),
        departure: train.departure,
        arrival: train.arrival,
      }));

      resolve(trainsWithAvailability);
    }, 800);
  });
};

export const searchTrainsFlexible = (query) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const results = TRAINS_DB.filter(
        (train) =>
          train.from.toLowerCase().includes(query.toLowerCase()) ||
          train.to.toLowerCase().includes(query.toLowerCase()) ||
          train.name.toLowerCase().includes(query.toLowerCase()),
      );
      resolve(results);
    }, 300);
  });
};

export const fetchTrainById = (trainId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const train = TRAINS_DB.find((t) => t.id === parseInt(trainId));
      if (train) {
        resolve(train);
      } else {
        reject(new Error("Train not found"));
      }
    }, 500);
  });
};

export const checkSeatAvailability = (trainId, selectedSeats) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        available: available,
        message: available ? "Seats available" : "Some seats have been booked",
      });
    }, 300);
  });
};

export const bookTickets = (bookingData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const bookingId = "BK" + Date.now();
      const pnr = "PNR" + Math.random().toString(36).substr(2, 8).toUpperCase();

      resolve({
        success: true,
        bookingId: bookingId,
        pnr: pnr,
        message: "Booking successful",
        bookingDetails: {
          ...bookingData,
          bookingTime: new Date().toISOString(),
          status: "confirmed",
        },
      });
    }, 1500);
  });
};

export const cancelBooking = (bookingId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        message: "Booking cancelled successfully",
        refundAmount: Math.floor(Math.random() * 500000) + 100000,
      });
    }, 1000);
  });
};

export const getPopularRoutes = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { from: "Jakarta", to: "Surabaya", count: 1234 },
        { from: "Jakarta", to: "Bandung", count: 987 },
        { from: "Surabaya", to: "Malang", count: 876 },
        { from: "Bandung", to: "Jakarta", count: 765 },
        { from: "Yogyakarta", to: "Solo", count: 654 },
        { from: "Semarang", to: "Jakarta", count: 543 },
        { from: "Surabaya", to: "Yogyakarta", count: 432 },
        { from: "Medan", to: "Rantau Prapat", count: 321 },
      ]);
    }, 300);
  });
};

export const getTrainSchedule = (from, to, date) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const schedules = TRAINS_DB.filter(
        (train) =>
          train.from.toLowerCase() === from.toLowerCase() &&
          train.to.toLowerCase() === to.toLowerCase(),
      ).map((train) => ({
        ...train,
        date: date,
        status: "On Time",
        platform: Math.floor(Math.random() * 10) + 1,
      }));

      resolve(schedules);
    }, 600);
  });
};

export const getLiveTrainStatus = (trainNo) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const statuses = ["On Time", "Delayed", "Arrived", "Departed"];
      const randomStatus =
        statuses[Math.floor(Math.random() * statuses.length)];

      resolve({
        trainNo: trainNo,
        status: randomStatus,
        delay:
          randomStatus === "Delayed" ? Math.floor(Math.random() * 60) + 10 : 0,
        currentStation: "Stasiun Gambir",
        nextStation: "Stasiun Bekasi",
        lastUpdate: new Date().toISOString(),
      });
    }, 500);
  });
};

export const getFareRules = (trainId, classType) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        cancellation: {
          ">7 days": "90% refund",
          "2-7 days": "50% refund",
          "<2 days": "25% refund",
          "No show": "No refund",
        },
        luggage: "Maximum 20kg free luggage",
        checkIn: "Check-in closes 30 minutes before departure",
        children: "Children under 3 years travel free",
      });
    }, 300);
  });
};

export const formatRupiah = (amount) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

export const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString("id-ID", options);
};

export const getTrainClasses = () => {
  return [
    {
      id: "eksekutif",
      name: "Eksekutif",
      description: "Kelas tertinggi dengan kenyamanan maksimal",
      priceMultiplier: 1.5,
      features: [
        "Kursi reclining",
        "AC",
        "WiFi",
        "Makanan premium",
        "Selimut",
        "TV pribadi",
      ],
      icon: "FaCrown",
    },
    {
      id: "bisnis",
      name: "Bisnis",
      description: "Keseimbangan antara kenyamanan dan harga",
      priceMultiplier: 1.0,
      features: ["Kursi nyaman", "AC", "WiFi", "Makanan ringan", "TV bersama"],
      icon: "FaBriefcase",
    },
    {
      id: "ekonomi",
      name: "Ekonomi",
      description: "Pilihan hemat untuk perjalanan Anda",
      priceMultiplier: 0.7,
      features: ["Kursi standar", "AC", "TV bersama"],
      icon: "FaWallet",
    },
  ];
};

export const getAvailableCities = () => {
  const cities = new Set();
  TRAINS_DB.forEach((train) => {
    cities.add(train.from);
    cities.add(train.to);
  });
  return Array.from(cities).sort();
};

export default {
  fetchTrains,
  fetchTrainById,
  generateSeatMap,
  checkSeatAvailability,
  bookTickets,
  cancelBooking,
  getPopularRoutes,
  getTrainSchedule,
  getLiveTrainStatus,
  getFareRules,
  formatRupiah,
  formatDate,
  getTrainClasses,
  searchTrainsFlexible,
  getAvailableCities,
};
