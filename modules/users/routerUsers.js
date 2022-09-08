const router = require('express').Router();
const passport = require('./utils/passport');
const multer = require('multer');
const { register, registerUser, failRegister, login, loginUser, faillogin, logout } = require('./controllersUsers');

const storage = multer.diskStorage({
    destination: './public/avatars',
    filename: (req, file, cb) => {
      const fileName = req.body.username + ".jpeg";
      cb(null, fileName)
    }
});

const uploader = multer({storage: storage});

router.get('/register', register);

router.post('/register', uploader.single('avatar'), passport.authenticate('register', {failureRedirect: '/failregister', failureMessage: true}), registerUser);

router.get('/failregister', failRegister);

router.get('/login', login);

router.post('/login', passport.authenticate('login', {failureRedirect: '/faillogin', failureMessage: true}), loginUser);

router.get('/faillogin', faillogin);

router.post('/logout', /* isLogin, */ logout);


module.exports = router;