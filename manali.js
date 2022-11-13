function buyCar() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("buy a car");
    }, 5000);
  });
}

function planatrip() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("lets go to manali");
    }, 2000);
  });
}

function reachManali() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("reached manali ");
    }, 1000);
  });
}

function gotomountain() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("reached mountain");
    }, 3000);
  });
}

async function fun1() {
  const msg = await buyCar();
  console.log(msg);
  const msg2 = await planatrip();
  console.log(msg2);
  const msg3 = await reachManali();
  console.log(msg3);
  const msg4 = await gotomountain();
  console.log(msg4);
}

fun1();
