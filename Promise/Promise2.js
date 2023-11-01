//랜덤한 시간 후에 성공 또는 실패하는 비동기 작업을 수행하는 함수.
function performAsyncTask() {
  return new Promise((resolve, reject) => {
    const randomDelay = Math.random() * 1000;
    setTimeout(() => {
      if (randomDelay < 500) {
        resolve('작업이 성공적으로 완료됨');
      } else {
        reject('작업이 실패함')
      }
    }, randomDelay);
  });
}

//비동기 작업 시작
const myPromise = performAsyncTask();

//프로미스의 then 메서드를 사용하여 성공 및 실패 상황 처리.
myPromise.then(
  result => {
    //프로미스가 성공한 경우
    console.log('성공', result);
  },
  error => {
    //프로미스가 실패한 경우
    console.log('실패', error);
  }
);