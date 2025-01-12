The solution involves using promises or async/await to ensure the data is fully loaded before accessing any properties. Here's how you can fix it:

```javascript
//Correct Implementation using async/await
async function getData(){
  const snapshot = await db.collection('myCollection').doc('myDocument').get();
  if(snapshot.exists()){
    const data = snapshot.data();
    console.log(data.myProperty); // Access myProperty after data is loaded
  } else {
    console.log('No such document!');
  }
}
 getData();

// Correct Implementation using .then()
db.collection('myCollection').doc('myDocument').get().then(snapshot => {
  if (snapshot.exists()) {
    console.log(snapshot.data().myProperty);
  } else {
    console.log('No such document!');
  }
}).catch(error => {
  console.error('Error getting document:', error);
});
```