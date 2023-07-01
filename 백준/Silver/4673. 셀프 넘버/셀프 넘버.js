const check = Array.from({ length: 10000 }, (_, i) => i + 1);

for (let i = 1; i <= 10000; i++) {
  let tmp = i;
  const stringTarget = i + "";
  for (let j = 0; j < stringTarget.length; j++) {
    tmp += parseInt(stringTarget[j]);
  }
  check[tmp - 1] = 0;
}

check.forEach((i) => {
  if (i !== 0) console.log(i);
});