export const snapshotToArray = (snapshot) => {
  let returnArr = [];

  snapshot.forEach((childSnapshot) => {
    let item = childSnapshot.data();

    returnArr.push({id: childSnapshot.id, item});
  });

  return returnArr;
};