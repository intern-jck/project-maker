const ProjectsModel = `
  CREATE TABLE projects (
    project_id INTEGER PRIMARY KEY,
    slug TEXT,
    name TEXT,
    url TEXT,
    client TEXT,
    client_rul TEXT,
    start_date TEXT,
    end_date TEXT,
    short TEXT,
    description TEXT
  );
`;

const ProjectTechTagsModel = `
  CREATE TABLE project_tech_tags (
    tech_tag_id INTEGER,
    tech_project_id INTEGER,
    FOREIGN KEY(tech_tag_id) REFERENCES tech_tags(tech_id)
    FOREIGN KEY(tech_project_id) REFERENCES projects(project_id)
  );
`;

const TechTagsModel = `
  CREATE TABLE tech_tags (
    tech_id INTEGER PRIMARY KEY,
    name TEXT,
    url TEXT,
    short TEXT,
  );
`;

const PhotosModel = `
  CREATE TABLE photos (
    photo_project_id INTEGER,
    url TEXT,
    name TEXT,
    FOREIGN KEY(photo_project_id) REFERENCES projects(project_id)
  );
`;

module.exports = {
  ProjectsModel,
  ProjectTechTagsModel,
  TechTagsModel,
  PhotosModel,
};
