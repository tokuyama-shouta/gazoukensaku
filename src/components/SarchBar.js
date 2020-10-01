// import React from 'react' // 8 リアクト import
import React,{ useState } from 'react' 


const SearchBar=({onSubmit})=>{ 
  const [term,setTerm] = useState('')
  //Enterキーが押されたときの処理
  const onFormSubmit=(event)=>{
    //preventDefault→デフォルトで用意された動作を止める
      event.preventDefault()
      
      onSubmit(term)
  }
  return(
    //Semantic UI
    <div className="ui segment">

      <form onSubmit={onFormSubmit} className="ui form">
        <div className="field">
          <label>image Search</label>
          <input type="text" name="search" placeholder="" value={term} onChange={(event)=>{setTerm(event.target.value)}}/>
        </div>
      </form>
      
    </div>

  )
}

export default SearchBar; //10 エクスポート