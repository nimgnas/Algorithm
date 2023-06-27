function solution(n) {
        let fone = 0,
          ftwo = 1;
        const arr = [fone, ftwo];

        for (let i = 2; i <= n; i++) {
          arr.push((arr[i - 2] + arr[i - 1]) % 1234567);
        }

        return arr[arr.length - 1];
}