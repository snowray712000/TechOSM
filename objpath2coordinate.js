function objpath2coordinate(objpathStr)
{
    // 這是一個 float reg: /^-?\d+(\.\d+)?$/
    var re = []
    var reg = /(-?\d+(\.\d+)?),(-?\d+(\.\d+)?)/g
    var tmp
    while ((tmp = reg.exec(objpathStr))!==null)
    {
        var x = parseFloat(tmp[1])
        var y = parseFloat(tmp[3])
        re.push([x,y])
    }
    return re
}