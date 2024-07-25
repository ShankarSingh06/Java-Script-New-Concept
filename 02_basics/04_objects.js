// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

 //console.log(tinderUser);
 //console.log(typeof tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname ,regularUser.fullname.userfullname.lastname);
 //console.log(typeof regularUser)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

 const obj4 = { obj1, obj2 }
 const obj6 = Object.assign({}, obj1, obj2, obj3)
//console.log(obj6);

const obj5 = {...obj1, ...obj2,...obj3}
// console.log(obj5);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "r@gmail.com"
    },
    {
        id: 3,
        email: "s@gmail.com"
    },
]

// console.log(users.reverse.toString);

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}
console.log(typeof course)
console.log(course.coursename,", " , course.price ,", ", course.courseInstructor);
 console.log(course.courseInstructor);

//const {courseInstructor: instructor} = course

 console.log(course.courseInstructor);
// console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

/*[
    {},
    {},
    {}
]*/