// const { User } = require("./models/models");
// const bcrypt = require("bcrypt");
// const localStrategy = require("passport-local").Strategy;

// module.exports = function (passport) {
//     passport.use(
//         new localStrategy(async (username, password, done) => {
//             const user = await User.findOne({ username: username });
//             if (!user) {
//                 return done(null, false);
//             }
//             else {
//                 const isUserUser = await bcrypt.compare(password, user.password);
//                 if (!isUserUser) {
//                     return done(null, false)
//                 }
//                 return done(null, user);
//             }
//         })
//     );

//     passport.serializeUser((user, cb) => {
//         cb(null, user.id);
//     })
//     passport.deserilializeUser(async (id, cb) => {
//         const foundedUser = await User.findOne({ _id: id });
//         if (foundedUser) {
//             cb(err, foundedUser);
//         }
//     })

// }

// const User = require("./user");
// const bcrypt = require("bcrypt");
// const localStrategy = require("passport-local").Strategy;

// module.exports = function (passport) {
//     passport.use(
//         new localStrategy((username, password, done) => {
//             User.findOne({ username: username }, (err, user) => {
//                 if (err) throw err;
//                 if (!user) return done(null, false);
//                 bcrypt.compare(password, user.password, (err, result) => {
//                     if (err) throw err;
//                     if (result === true) {
//                         return done(null, user);
//                     } else {
//                         return done(null, false);
//                     }
//                 });
//             });
//         })
//     );

//     passport.serializeUser((user, cb) => {
//         cb(null, user.id);
//     });
//     passport.deserializeUser((id, cb) => {
//         User.findOne({ _id: id }, (err, user) => {
//             const userInformation = {
//                 username: user.username,
//             };
//             cb(err, userInformation);
//         });
//     });
// };