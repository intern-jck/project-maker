import TextInput from './TextInput';
import { CgAddR, CgCloseR } from 'react-icons/cg';
import type { RepoType } from '@/common/types';

type Props = {
  // inputName: string,
  // repoName: string,
  // url: string,
  className: string,
  repo: RepoType,
  repos: RepoType[],
  changeHandler: React.ChangeEventHandler,
  addHandler: React.MouseEventHandler,
  deleteHandler: React.MouseEventHandler,
};

export default function RepoInput({ 
  // inputName,
  // repoName,
  // url,
  className,
  repo,
  repos,
  changeHandler,
  addHandler,
  deleteHandler
}: Props) {

  return (
    <div className={className}>

      <span className={'repoHeader'}>REPOS</span>

      <div className='repoName'>
        <TextInput
          className={'repoNameInput'}
          inputName={'name'}
          value={repo.name}
          changeHandler={changeHandler}
        />
        <TextInput
          className={'repoURLInput'}
          inputName={'url'}
          value={repo.url}
          changeHandler={changeHandler}
        />
        <button onClick={addHandler}>
          <CgAddR />
        </button>
      </div>

      <div className='repoList'>
        {
          repos ?
            repos.map((repo, i) => {
              return (
                <div key={i} className='repo'>
                  { repo.name }
                  <button onClick={deleteHandler} data-repo-index={i}>
                    <CgCloseR />
                  </button>
                </div>
              )
            })
            : <></>
        }
      </div>
    </div>
  );
};
