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

  router.get('/entry/:id', async (req, res) => {
    try { const entryData = await Entry.findOne({ where: { id: req.params.id },
      include: [{ model:User }, 
        { model:Comment, 
          include: { model: User, attributes: ['username']} 
        }],
    });
      if (entryData) {;
        console.log(entryData)
       const entry = entryData.get({ plain: true });
        console.log(entry);
        res.render('Entry', {
          entry,
          loggedIn: req.session.loggedIn
  
        });
      } else {
        res.status(404).end();
      }
    } catch (err) {
      res.redirect('/');
    }
  });
  module.exports = router;