function createInsertProjectSql() {
  const timestamp = Date.now();
  const projectSql = `
    INSERT INTO projects (
      project_id,
      folder_id,
      slug,
      name,
      url,
      client,
      client_rul,
      start_date,
      end_date,
      short,
      description
      )
    VALUES (
      ${timestamp}, 
      0,
      'default_slug',
      'default_name',
      'default_url',
      'default_client',
      'default_client_url',
      'default_start',
      'default_end',
      'default_short',
      'default_description'
      );`;

  return projectSql;
}

module.exports = {
  createInsertProjectSql,
};
