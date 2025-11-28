enum LogLevel {
  Info,
  Warning,
  Error,
}

function logMessage(level: LogLevel, message: string) {
  console.log(`${level}, ${message}`);
}

logMessage(LogLevel.Info, "Message");
