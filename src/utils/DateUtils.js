import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(localizedFormat);
dayjs.extend(utc);
dayjs.extend(timezone);

export default class DateUtils {

    static parse(date, format = "LLL") {

        return dayjs(date).tz("America/Detroit").format(format);
    }

    static sort(array, key) {

        return array.sort((a, b) => dayjs(a[key]).isAfter(dayjs(b[key])) ? -1 : 1);
    }
}
