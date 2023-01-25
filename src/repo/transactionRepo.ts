class TransactionRepository {
  getHistory = (): Promise<any> => {
    return new Promise((resolve, reject) => {
      return resolve("success");
    });
  };
  getTransaction = (): Promise<any> => {
    return new Promise((resolve, reject) => {
      return resolve("success");
    });
  };
  createTransaction = (): Promise<any> => {
    return new Promise((resolve, reject) => {
      return resolve("success");
    });
  };
}

export default new TransactionRepository();
