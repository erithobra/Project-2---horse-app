# Project-2
## Horse Trainer App

[Link to git repository](https://github.com/erithobra/horse-app)

---
#### Motivation:
Develop an application for Horse Farms to help manage the business.  Include features to track horses and trainers also the horses they train.  Include a centralized database, sign-in, login security.

---
#### Objective Level 1 (MVP) (complete):
- [x] Create trainer profiles and horse info pages.
- [x] Allow for editing of information on trainer and horse pages.
- [x] Allow for deletion of both trainer and horse pages.
- [x] Create a relationship between trainer and horse pages.

#### Objective Level 2 (partially complete):
* [ ] Incorporate task table with various tasks for each horse.
* [ ] Have scheduled and prioritized events within the task table.
* [x] Simple styling.

#### Objective Level 3 (partially complete):
* [ ] Password encryption and authorization.
* [ ] Data validation.
* [x] Improved styling.
* [x] Mobile responsive.

---
#### Wireframe

##### Page Layout and Website Flow

 * app flow

    ![app flow](https://i.imgur.com/bPBFk3n.png)

 * welcome page

    ![welcome page](https://i.imgur.com/iPtoXth.png)

 * trainer sign-in

    ![trainer sign in](https://i.imgur.com/lGTRS4l.png)

 * trainer log-in

    ![trainer log in](https://i.imgur.com/hcaQf4W.png)

 * trainer profile

    ![trainer profile](https://i.imgur.com/F1R2JaZ.png)

 * horse info

    ![horse info](https://i.imgur.com/iWoNxVb.png)

##### Relationship Mapping

 * ![join table picture](https://i.imgur.com/3vGNkxR.png)

 * ![relationship diagram](https://i.imgur.com/25CEDuD.png)

---

#### Technology used:
* HTML, CSS, JavaScript
* Node.js
* Postgres
* Express
* EJS
* github - used for revision control
* Heroku - used for deployment.

---

#### Main features:
* List of features
 * user profile functionality (username and password)
 * two CRUD models (horses and trainers)
 * editable text fields
 * predefined inputs (dropdown fields)

---

#### Code snippet:
This allows for the addition or the removal of horses/trainers:
```
if(req.body.addOrRemove == "add") {
    Trainer.update(req.body, {
        where: {id: req.params.index},
        returning: true
    })
```
.....
```
else {
  Trainer.update(req.body, {
    where: {id: req.params.index},
    returning: true
```

---

#### User stories:
* As a Horse Farm Manager, I want to know who is training which horse.
* As a Horse Farm Owner, I want to have a functional website for my customers.
* As a Trainer, I want to know which horse my boss wants me to train.
* As an owner, I want to see who is training my horses, using website on my
 phone would be awesome.
* As a Horse Trainer, I want to know which horses to focus on.
* I am thinking about having a horse trained at this Farm and what to learn about
 trainers and which horses they are training.
* I found out this Fancy Horse Farm has a cool web site to keep track of
 horses and trainers.
* As a Horse Farm Owner, I want to keep track of the horses and trainers
 my manager has assigned.
* Anyone associated with this Farm would like to see pictures of the horses and
 their Trainers.
* As a Farm Manager I would like to be able to maintain a current list of horses and trainers on the farm.

---

#### Room for improvement:
1. Add a task list for each trainer with priority value.
2. Add an activity schedule list for each horse.
3. New page to display horse activities and trainer tasks with completion date.
