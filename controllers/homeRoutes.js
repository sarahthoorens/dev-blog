const router = require('express').Router();
const sequelize = require('../config/connection');
const { Entry, User, Comment } = require('../models');

router.get('/', async (req, res) => {
    try { const dbEntry = await Entry.findAll({
    attributes: ['id', 'title', 'created_at','entry_content'],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_content', 'entry_id', 'user_id', 'created_at'],
        include: { model: User, attributes: ['username'],
        }
      },
      {
        model: User,
        attributes: ['username'],
      }]
    });
    const entries = dbEntry.map(entry => entry.get({ plain: true }));
        
      res.render('homepage', {
            entries,
            loggedIn: req.session.loggedIn
          })
        }catch (err) {
        console.log(err);
        res.status(500).json(err);
        res.redirect('/login')
      };
    })

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/dashboard');

    }
    res.render ('login');
  });

  router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });

  router.get('/entry/:id', (req, res) => {
    try { const dbEntry = Entry.findOne({
      include: [
        {model: Comment}, 
        {model: User}
    ]
      });
       if (dbEntry) 
       {const entry = dbEntry.get({ plain: true });
        res.render('entry', {
            entry         
          })} 
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
            res.redirect('/login')
          }
          });
  module.exports = router;