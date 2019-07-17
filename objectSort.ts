function sort_OBJECT(obj):any{ //对象排序
    var arr = new Array();
    var num = 0;
    for (var i in obj) {
        arr[num] = i;
        num++;
    }
    var sortArr = arr.sort();
    var sortObj = {};
    for (var i in sortArr) {
        sortObj[sortArr[i]] = obj[sortArr[i]];
    }
    return sortObj;
}