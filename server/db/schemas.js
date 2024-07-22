const ProjectsModel = `
  CREATE TABLE projects (
    id INTEGER PRIMARY KEY,
    created_on INTEGER,
    folder_id INTEGER,
    slug TEXT,
    name TEXT,
    url TEXT,
    client TEXT,
    client_url TEXT,
    start_date TEXT,
    end_date TEXT,
    short TEXT,
    description TEXT,
    FOREIGN KEY (folder_id) REFERENCES folders(id)
  );
`;

const PhotosModel = `
  CREATE TABLE photos (
    id INTEGER PRIMARY KEY,
    photo_project_id INTEGER,
    created_on INTEGER,
    url TEXT,
    name TEXT,
    FOREIGN KEY (photo_project_id) REFERENCES projects(id)
  );
`;

const FoldersModel = `
  CREATE TABLE folders (
    id INTEGER PRIMARY KEY,
    name TEXT
  );
`;

const ReposModel = `
  CREATE TABLE repos (
    id INTEGER PRIMARY KEY,
    project_id INTEGER,
    name TEXT,
    url TEXT,
    FOREIGN KEY (project_id) REFERENCES projects(id)
  );
`;

const TagsModel = `
  CREATE TABLE tags (
    id INTEGER PRIMARY KEY,
    name TEXT,
    url TEXT
  );
`;

const ProjectTagsModel = `
  CREATE TABLE project_tags (
    id INTEGER PRIMARY KEY,
    project_id INTEGER,
    tag_id INTEGER,
    FOREIGN KEY (project_id) REFERENCES projects(id),
    FOREIGN KEY (tag_id) REFERENCES tags(id)
  );
`;

module.exports = {
  ProjectsModel,
  PhotosModel,
  FoldersModel,
  ReposModel,
  TagsModel,
  ProjectTagsModel,
};
