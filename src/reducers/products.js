export default function (productCount= 0, action){
    if(action.type === 'addProducts'){
        console.log(action.productCount)
        return action.productCount;
    }
    else {
        return productCount
    }
}