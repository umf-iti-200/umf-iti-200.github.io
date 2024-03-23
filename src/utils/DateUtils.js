import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";

dayjs.extend(localizedFormat);

export default class DateUtils {

    static parse(date, format = "LLL") {

        return dayjs(date).format(format);
    }

}
