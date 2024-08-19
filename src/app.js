const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const taskRoutes = require("./routes/taskRoutes");
const errorHandler = require("./middleware/errorHandler");
const loggingMiddleware = require("./middleware/loggingMiddleware");


const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.use(loggingMiddleware);


app.use("/api", taskRoutes);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
