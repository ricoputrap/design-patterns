import Logger from "./Logger";

export const run = () => {
  const logger: Logger = Logger.getInstance();
  logger.info("This is an info message");
  logger.warning("This is a warning message");
  logger.error("This is an error message");
  logger.debug("This is a debug message");
  
}