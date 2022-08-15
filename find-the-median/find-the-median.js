function quickSort(items){
    if(items.length <= 1) return items;

    const pivot = items[items.length - 1];
    const leftArr = []
    const rightArr = []

    for(let i = 0; i < items.length - 1; i++){
        if(items[i] <= pivot){
            leftArr.push(items[i])
        }else{
            rightArr.push(items[i])
        }
    }

    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)]
}

function find_middle(arr){
    let arrs = quickSort(arr);
    return arrs[Math.floor(arrs.length / 2)]
}

console.log(find_middle([1, 4, 2, 6, 7, 3, 8]))