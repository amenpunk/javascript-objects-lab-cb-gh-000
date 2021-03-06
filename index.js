var recipes = {cereal:'leche'};

function updateObjectWithKeyAndValue(object,key,value){
    return Object.assign({}, object, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object,key,value){
     return Object.assign(object,{[key]:value})
}

function deleteFromObjectByKey(object,key){
    var newOb = Object.assign({},object)
    delete newOb[key];
    return newOb;
}

function destructivelyDeleteFromObjectByKey(object,key){
    delete object[key];
    return object
}
