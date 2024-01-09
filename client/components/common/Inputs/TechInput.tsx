import TextInput from './TextInput';
import { CgAddR, CgCloseR } from 'react-icons/cg';
import type { TechType } from '@/common/types';

type Props = {
  className: string,
  tech: TechType,
  techList: TechType[],
  changeHandler: React.ChangeEventHandler,
  addHandler: React.MouseEventHandler,
  deleteHandler: React.MouseEventHandler,
};

export default function TechInput({ 
  className,
  tech,
  // url,
  techList,
  changeHandler,
  addHandler,
  deleteHandler
}: Props) {
  
  return (
    <div className={className}>

      <div className='techName'>
        <TextInput
          className={'techNameInput'}
          inputName={'tech'}
          value={tech.name}
          changeHandler={changeHandler}
        />

        {/* <TextInput
          className={'tech-url'}
          inputName={'url'}
          value={url}
          changeHandler={changeHandler}
        /> */}

        <button onClick={addHandler}>
          <CgAddR />
        </button>
      </div>

      <div className='techList'>
        {
          techList ?
            techList.map((tech, i) => {
              return (
                <div key={i} className='tech' data-tag-index={i}>
                  { tech.name }
                  <button onClick={deleteHandler} data-tech-index={i}>
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
