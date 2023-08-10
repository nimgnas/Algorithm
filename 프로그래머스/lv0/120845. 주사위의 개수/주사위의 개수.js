function solution(box, n) {
    var answer = 0;
    
    const [row, col, height] = box
    
    const numOfrow = Math.floor(row / n)
    const numOfcol = Math.floor(col / n)
    const numOfheight = Math.floor(height / n)
    
    return numOfrow * numOfcol * numOfheight;
}