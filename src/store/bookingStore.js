import { create } from "zustand";
import { persist } from "zustand/middleware";

const useBookingStore = create(
  persist(
    (set, get) => ({
      user: null,
      isLoggedIn: false,

      searchParams: {
        from: "",
        to: "",
        date: "",
        passengers: 1,
        class: "sleeper",
      },
      selectedTrain: null,
      selectedSeats: [],
      passengerDetails: [],
      paymentDetails: null,
      currentBooking: null,
      userBookings: [],

      isLoading: false,

      login: (userData) => set({ user: userData, isLoggedIn: true }),
      logout: () => set({ user: null, isLoggedIn: false }),

      setSearchParams: (params) => set({ searchParams: params }),
      setSelectedTrain: (train) => set({ selectedTrain: train }),
      setSelectedSeats: (seats) => set({ selectedSeats: seats }),
      addPassengerDetails: (details) => set({ passengerDetails: details }),
      setPaymentDetails: (details) => set({ paymentDetails: details }),

      createBooking: () => {
        const {
          selectedTrain,
          selectedSeats,
          passengerDetails,
          paymentDetails,
          searchParams,
          user,
        } = get();
        const booking = {
          id: "BK" + Date.now(),
          pnr: "PNR" + Math.random().toString(36).substr(2, 8).toUpperCase(),
          train: selectedTrain,
          seats: selectedSeats,
          passengers: passengerDetails,
          payment: paymentDetails,
          searchParams: searchParams,
          bookingDate: new Date().toISOString(),
          status: "confirmed",
          userId: user?.id || "guest",
        };

        set((state) => ({
          currentBooking: booking,
          userBookings: [booking, ...state.userBookings],
        }));
        return booking;
      },

      resetBooking: () =>
        set({
          selectedTrain: null,
          selectedSeats: [],
          passengerDetails: [],
          paymentDetails: null,
          currentBooking: null,
        }),
    }),
    {
      name: "train-booking-storage",
    },
  ),
);

export default useBookingStore;
