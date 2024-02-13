type LogType = "INFO" | "WARNING" | "ERROR" | "DEBUG";

class Logger {
  public static instance: Logger;

  public static getInstance(): Logger {
    if (!Logger.instance) {
      console.log("Creating Logger instance...");
      Logger.instance = new Logger();
      console.log("Logger instance created.");
      console.log("------------------------");
    }
    return Logger.instance;
  }

  public info(message: string): void {
    this.log("INFO", message);
  }

  public warning(message: string): void {
    this.log("WARNING", message);
  }

  public error(message: string): void {
    this.log("ERROR", message);
  }

  public debug(message: string): void {
    this.log("DEBUG", message);
  }

  private log(type: LogType, message: string): void {
    const timestamp = this.getTimestamp();
    console.log(`[${type}] ${timestamp} - ${message}`);
  }

  // Get the current timestamp in the format YYYY-MM-DD HH:mm:ss
  private getTimestamp(): string {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }
}

export default Logger;