class Database {
  private static instance: Database;
  private constructor() {
    console.log("Database connected");
  }

  public runQuery(query: string) {
    console.log(query);
  }

  public static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }
}

const db = Database.getInstance();
db.runQuery("SELECT * FROM users");
