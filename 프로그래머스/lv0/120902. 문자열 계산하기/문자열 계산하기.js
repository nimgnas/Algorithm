function solution(my_string) {
  my_string = my_string.split(" ");
  let answer = parseInt(my_string[0])  
  
  for (let i = 1; i < my_string.length; i++) {
      if(my_string[i - 1] === "+") answer += parseInt(my_string[i])
      if(my_string[i - 1] === "-") answer -= parseInt(my_string[i])
  }
  return answer;
}
