import db from "../config/postgres";

class TransactionRepository {
  private queryGetHistory: string =
    'select * from transactions t where t."userId" = $1';
  private queryGetTransaction: string = "select * from transactions";
  private queryCreateTransaction: string =
    "insert into transactions ('userId' , productId, total) values ($1, $2, $3)";
  getHistory = (id: number): Promise<any> => {
    return new Promise((resolve, reject) => {
      db.query(this.queryGetHistory, [id], (err, result) => {
        if (err) {
          console.log(err);
          return reject({
            status: 501,
            message: "Get History Error",
          });
        }
        return resolve({
          status: 200,
          message: "Get History success",
          result: result.rows,
        });
      });
    });
  };
  getTransaction = (): Promise<any> => {
    return new Promise((resolve, reject) => {
      return resolve("successa");
    });
  };
  createTransaction = (): Promise<any> => {
    return new Promise((resolve, reject) => {
      return resolve("successb");
    });
  };
}

export default new TransactionRepository();
