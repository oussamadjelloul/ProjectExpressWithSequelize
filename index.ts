import express from 'express';
import db from './models';
import { users } from './seeders/Users';
import { Projects } from './seeders/Projects';
import { ProjectAssignments } from './seeders/ProjectAssignment';

const app = express();
const port = process.env.PORT || 3001;

const createUser = () => {
    users().map((user) => {
        db.User.create(user)
    })
}

const createProjects = () => {
    Projects().map((project) => {
        db.Project.create(project)
    })
}

const createProjectAssignment = () => {
    ProjectAssignments().map((projectAssignment) => {
        db.ProjectAssignments.create(projectAssignment)
    })
}

createProjectAssignment();
// createUser();
// createProjects();

db.sequelize.sync().then(() => {

    app.listen(port, () => {
        console.log(`Listening on port ${port}`);
    });
});
