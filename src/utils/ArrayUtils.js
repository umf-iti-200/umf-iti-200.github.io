export default class ArrayUtils {

    static paginate(array, pageNumber = 1, pageSize = 2) {

        const start = (pageNumber - 1) * pageSize;
        const end = pageNumber * pageSize;

        return array.slice(start, end);
    }
}
