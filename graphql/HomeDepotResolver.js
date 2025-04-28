const resolvers = {
  Query: {
    appointments: () => {
      // Sample data
      return [
        {
          id: "1",
          Work_Type: "Consultation",
          Status: "Scheduled",
          Appointment_ID: "A123",
          products: [
            { id: "1", Product: "Item A", Product_ID: "P123" },
          ],
          customers: [
            { id: "1", Customer_name: "John Doe", Address: "123 Main St", Mobile: "1234567890" },
          ],
        },
      ];
    },
    products: () => {
      // Sample data
      return [
        { id: "1", Product: "Item A", Product_ID: "P123" },
        { id: "2", Product: "Item B", Product_ID: "P124" },
      ];
    },
    customers: () => {
      // Sample data
      return [
        { id: "1", Customer_name: "John Doe", Address: "123 Main St", Mobile: "1234567890" },
        { id: "2", Customer_name: "Jane Smith", Address: "456 Elm St", Mobile: "0987654321" },
      ];
    },
  },

  Mutation: {
    editApplyForFinance: (_, { input }) => {
      // Placeholder mutation logic
      console.log(`Received finance amount: ${input.Finance_amount} for ID: ${input.id}`);
      return { success: true, message: "Finance application edited successfully" };
    },
  },
};

export default resolvers;