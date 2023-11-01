//Promise 생성.
const myPromise = new Promise((resolve, reject) => {
  //비동기 작업 수행.
  if ("작업이 성공적으로 완료 됨") {
    resolve("성공결과");  //작업 성공 시 값을 반환.
  } else {
    reject("에러메세지"); //작업 실패 시 에러를 반환
  }
});

//Promise 사용
myPromise
  .then(result => {
    console.log('성공', result);
  })
  .catch(error => {
    console.log('에러', error);
  })
