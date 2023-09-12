const logger = require("pino")();
import Dayjs from "dayjs";
const log = logger({
    prettyPrint: true,
    base: {
        pid: false,
    },
    timpstamp: () => `,"time":"${Dayjs().format()}"`,
});
export default log;
//# sourceMappingURL=logger.js.map