// Need to change name to schemas cause thats what they are.

const ProjectsModel = `
  CREATE TABLE projects (
    id INTEGER PRIMARY KEY,
    folder_id INTEGER,
    slug TEXT,
    name TEXT,
    url TEXT,
    client TEXT,
    client_url TEXT,
    start_date TEXT,
    end_date TEXT,
    short TEXT,
    description TEXT
  );
`;
// FOREIGN KEY (folder_id) REFERENCES folders(id)

// const FoldersModel = `
//   CREATE TABLE folders (
//     id INTEGER PRIMARY KEY,
//     name TEXT
//   );
// `;

// const PhotosModel = `
//   CREATE TABLE photos (
//     id INTEGER PRIMARY KEY
//     photo_project_id INTEGER,
//     url TEXT,
//     name TEXT,
//     FOREIGN KEY(photo_project_id) REFERENCES projects(id)
//   );
// `;

// const TechTagsModel = `
//   CREATE TABLE tech_tags (
//     id INTEGER PRIMARY KEY,
//     name TEXT,
//     url TEXT,
//     short TEXT,
//   );
// `;

// const ProjectTechTagsModel = `
//   CREATE TABLE project_tech_tags (
//     tech_tag_id INTEGER,
//     tech_project_id INTEGER,
//     FOREIGN KEY(tech_tag_id) REFERENCES tech_tags(tech_id)
//     FOREIGN KEY(tech_project_id) REFERENCES projects(project_id)
//   );
// `;

module.exports = {
  ProjectsModel,
  // PhotosModel,
  // FoldersModel,
  // TechTagsModel,
  // ProjectTechTagsModel,
};