import trains from "@/data/trains";
import trainClasses from "@/data/trainClasses";
import popularRoutes from "@/data/popularRoutes";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const fetchTrains = async (
  from = "",
  to = "",
  date = "",
  passengers = 1,
  classType = "all",
) => {
  await delay(800);

  let results = [...trains];

  if (from) {
    results = results.filter(
      (train) => train.from.toLowerCase() === from.toLowerCase(),
    );
  }

  if (to) {
    results = results.filter(
      (train) => train.to.toLowerCase() === to.toLowerCase(),
    );
  }

  if (classType !== "all") {
    results = results.filter(
      (train) => train.class === classType.toLowerCase(),
    );
  }

  if (date) {
    const selectedDate = new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (selectedDate < today) {
      return [];
    }
  }

  if (passengers) {
    results = results.filter(
      (train) => train.availableSeats >= Number(passengers),
    );
  }

  return results;
};

export const fetchTrainById = async (id) => {
  await delay(500);

  const train = trains.find((train) => train.id === Number(id));

  if (!train) {
    throw new Error("Train not found");
  }

  return train;
};

export const searchTrainsFlexible = async (query = "") => {
  await delay(300);

  const keyword = query.trim().toLowerCase();

  if (!keyword) {
    return trains;
  }

  return trains.filter(
    (train) =>
      train.name.toLowerCase().includes(keyword) ||
      train.from.toLowerCase().includes(keyword) ||
      train.to.toLowerCase().includes(keyword),
  );
};

export const getPopularRoutes = async () => {
  await delay(300);
  return popularRoutes;
};

export const getTrainSchedule = async (from, to, date) => {
  await delay(600);

  return trains
    .filter(
      (train) =>
        train.from.toLowerCase() === from.toLowerCase() &&
        train.to.toLowerCase() === to.toLowerCase(),
    )
    .map((train) => ({
      ...train,
      date,
      status: "On Time",
      platform: Math.floor(Math.random() * 10) + 1,
    }));
};

export const getLiveTrainStatus = async (trainNo) => {
  await delay(500);

  const statuses = ["On Time", "Delayed", "Arrived", "Departed"];
  const status = statuses[Math.floor(Math.random() * statuses.length)];

  return {
    trainNo,
    status,
    delay: status === "Delayed" ? Math.floor(Math.random() * 60) + 10 : 0,
    currentStation: "Stasiun Gambir",
    nextStation: "Stasiun Bekasi",
    lastUpdate: new Date().toISOString(),
  };
};

export const getFareRules = async () => {
  await delay(300);

  return {
    cancellation: {
      ">7 days": "90% refund",
      "2-7 days": "50% refund",
      "<2 days": "25% refund",
      "No show": "No refund",
    },
    luggage: "Maximum 20kg free luggage",
    checkIn: "Check-in closes 30 minutes before departure",
    children: "Children under 3 years travel free",
  };
};

export const getTrainClasses = () => trainClasses;

export const getAvailableCities = () => {
  return [...new Set(trains.flatMap((train) => [train.from, train.to]))].sort();
};

export default {
  fetchTrains,
  fetchTrainById,
  searchTrainsFlexible,
  getPopularRoutes,
  getTrainSchedule,
  getLiveTrainStatus,
  getFareRules,
  getTrainClasses,
  getAvailableCities,
};
