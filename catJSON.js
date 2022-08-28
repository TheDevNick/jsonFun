var cat = {
    name: 'Fluffy',
    activities: ['play', 'eat cat food'],
    catFriends: [
    {
    name: 'bar',
    activities: ['be grumpy', 'eat bread omblet'],
    weight: 8,
    furcolor: 'white'
    }, 
    {
    name: 'foo',
    activities: ['sleep', 'pre-sleep naps'],
    weight: 3
    }
    ]
   }
   console.log(`======ORIGINAL CAT OBJECT=====`);
   console.log(cat);

//    Add height and weight to Fluffy
   let friends = cat.catFriends
   friends.forEach(cat => {
    cat.weight++
    cat.height = '3.5'
   })
console.log(`======ADDED WEIGHT AND HEIGHT CAT OBJECT=====`)
console.log(cat)
//    Fluffy name is spelled wrongly. Update it to Fluffyy
cat.name = 'fluffyy'
console.log('=========== CHANGED CAT NAME FROM FLUFFY TO FLUFFYY =============')
console.log(cat)
//    List all the activities of Fluffyy’s catFriends.
console.log('========= LISTING ACTIVITIES OF FLUFFYY CAT FRIENDS')
friends.forEach(friend => console.log(friend.activities))
console.log('========= PINTING THE NAME OF CAT FRIENDS =========')
//    Print the catFriends names.
friends.forEach(friend => console.log(friend.name))
//    Print the total weight of catFriends
console.log('========= PINTING THE TOTAL WEIGHT OF CAT FRIENDS =========')
let friendsWeight = friends.reduce((acc, curr) => acc.weight += curr.weight)
console.log(friendsWeight)
//    Print the total activities of all cats (op:6)

//    Add 2 more activities to bar & foo cats
//    Update the fur color of bar