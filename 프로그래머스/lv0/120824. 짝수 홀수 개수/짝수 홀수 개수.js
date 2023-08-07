function solution(num_list) {
    const numOfeven = num_list.filter((i) => i % 2 === 0).length
    return [numOfeven, num_list.length - numOfeven];
}