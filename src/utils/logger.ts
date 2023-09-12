import pino from "pino";
import Dayjs from "dayjs";

const log = pino.default({
  prettyPrint: true,
  base: {
    pid: false,
  },
  timpstamp: () => `,"time":"${Dayjs().format()}"`,
});

export default log;
