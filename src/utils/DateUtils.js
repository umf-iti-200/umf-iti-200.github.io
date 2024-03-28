import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(localizedFormat);
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(relativeTime);

export default class DateUtils {

    static fromNow(dateInDayJs) {
        return dateInDayJs.fromNow();
    }

    static format(dateInDayJs, format = "LLL") {
        return dateInDayJs.format(format);
    }

    static parse(date) {

        return dayjs(date).tz("America/Detroit");
    }

    static sort(array, key) {

        return array.sort((a, b) => dayjs(a[key]).isAfter(dayjs(b[key])) ? -1 : 1);
    }
}
