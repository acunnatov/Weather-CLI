import chalk from "chalk";
import dedent from "dedent";

const printError = (error) => {
  console.log(chalk.bgRed("ERROR") + " " + error);
};

const printSuccess = (message) => {
  console.log(chalk.bgGreen("SUCCESS") + " " + message);
};

const printHelp = () => {
  console.log(dedent`
    ${chalk.bgCyan('Help')}
    -s [CITY] for setting the city
    -h for help
    -t [API_KEY] for saving token
  `);
};

const printWeather = (response, icon) => {
  console.log(dedent`
    ${chalk.bgYellowBright('Weather')} ${response.name}
    ${icon}  ${response.weather[0].description}
    Temperature: ${response.main.temp}°C (feels like ${response.main.feels_like}°C)
    Humidity: ${response.main.humidity}%
    Wind speed: ${response.wind.speed} m/s
  `);
};

export { printError, printSuccess, printHelp, printWeather };
