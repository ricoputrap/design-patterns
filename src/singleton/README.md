# Singleton

Singleton is a design pattern that allow us to ensure that a class will have only a single instance and it could be accessed globally.

### Time to practice!

#### Problem: Logging System Implementation

Please develop a logging system for a software application. The logging system should adhere to the following requirements:

1. There should be only one instance of the logging system throughout the application.
2. The logging system should support different log levels such as INFO, WARNING, ERROR, and DEBUG.
3. It should provide methods for logging messages at each log level.
4. The logging system should be easily accessible from any part of the application.

Your task is to implement the logging system using the Singleton design pattern. You should provide methods for initializing the logging system, logging messages at different levels, and accessing the singleton instance of the logging system.

#### Example of usage
```typescript
// Initialize the logging system
Logger.getInstance().initialize();

// Log messages at different levels
Logger.getInstance().info("This is an information message");
Logger.getInstance().warning("This is a warning message");
Logger.getInstance().error("This is an error message");
Logger.getInstance().debug("This is a debug message");
```

#### Expected Output
```
[INFO] 2024-02-13 12:00:00 - This is an information message
[WARNING] 2024-02-13 12:00:01 - This is a warning message
[ERROR] 2024-02-13 12:00:02 - This is an error message
[DEBUG] 2024-02-13 12:00:03 - This is a debug message
```

#### Why Logging System should be using Singleton?
1. **Global Access**: Logging is a cross-cutting concern that needs to be accessed from various parts of an application. By using the Singleton pattern, the logging system can provide a single global point of access
2. **Resource Management**: Logging systems often involve resource-intensive operations, such as file I/O or network communication. By using the Singleton pattern, the logging system instance is created only when it is first accessed, ensuring optimal resource utilization.