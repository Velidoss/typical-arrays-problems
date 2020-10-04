
exports.min = function min (array) {
    if(!Array.isArray(array)){
        return  0
    }else{
        return array.reduce((acc, el)=>{
            if(el < acc){
                acc = el
            }
            return acc
        }, 0)
    }

}

exports.max = function max (array) {
    if(!Array.isArray(array)){
        return  0
    }else {
        return array.reduce((acc, el) => {
            if (el > acc) {
                acc = el
            }
            return acc
        }, 0)
    }
}

exports.avg = function avg (array) {
    if(!Array.isArray(array)){
        return  0
    }else{
        const sum =  array.reduce((acc, el)=>{
            return acc+el
        }, 0)
        const res = parseFloat(parseFloat(sum)/array.length)
        if(isNaN(res)){
            return 0
        }else {
            return res
        }
    }

}
