import React from 'react';

import TextInput from './TextInput.jsx';

export default function RepoInput({
  // inputName,
  // repoName,
  // url,
  className,
  repo,
  repos,
  changeHandler,
  addHandler,
  deleteHandler,
}) {
  return (
    <div className={className}>
      <span className={'repoHeader'}>REPOS</span>

      <div className="repoName">
        <TextInput className={'repoNameInput'} inputName={'name'} value={repo.name} changeHandler={changeHandler} />
        <TextInput className={'repoURLInput'} inputName={'url'} value={repo.url} changeHandler={changeHandler} />
        <button onClick={addHandler}>{/* <CgAddR /> */}</button>
      </div>

      <div className="repoList">
        {repos ? (
          repos.map((repo, i) => {
            return (
              <div key={i} className="repo">
                {repo.name}
                <button onClick={deleteHandler} data-repo-index={i}>
                  {/* <CgCloseR /> */}
                </button>
              </div>
            );
          })
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}