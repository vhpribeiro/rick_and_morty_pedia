import React, {useState} from 'react'
import { connect } from 'react-redux'
import { fetchCharacters } from '../../actions/characters'

const Pagination = ({fetchCharacters, characterName}) => {
  const [actualPage, setActualPage] = useState(1);
  const [maxPage, setMaxPage] = useState(actualPage + 2);
  const [minPage, setMinPage] = useState(actualPage);

  const firstPage = actualPage == 1;

  const movePageForward = (event) => {
    event.preventDefault();
    if(actualPage === maxPage)
    {
      setMinPage(actualPage + 1);
      setMaxPage(actualPage + 3);
    }
    setActualPage(actualPage + 1);
    fetchCharacters(actualPage + 1, characterName);
  }

  const movePageBackward = (event) => {
    event.preventDefault();
    if(actualPage === minPage)
    {
      setMinPage(actualPage - 3);
      setMaxPage(actualPage - 1);
    }
    setActualPage(actualPage - 1);
    fetchCharacters(actualPage - 1, characterName);
  }

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center">
        <li className={"page-item " + (firstPage ? "disabled" : "")}>
          <button className="page-link" onClick={movePageBackward}>Previous</button>
        </li>
        <li className={"page-item " + (actualPage === minPage ? "active" : "")}>
          <button className={"page-link"} value={minPage}>
            {minPage}
          </button>
        </li>
        <li className={"page-item " + (actualPage === minPage + 1 ? "active" : "")}>
          <button className={"page-link"} value={minPage + 1}>
            {minPage + 1}
          </button>
        </li>
        <li className={"page-item " + (actualPage === maxPage ? "active" : "")}>
          <button className={"page-link "} value={maxPage}>
            {maxPage}
          </button>
        </li>
        <li className="page-item">
          <button className="page-link" onClick={movePageForward}>Next</button>
        </li>
      </ul>
    </nav>
  )
}

const mapStateToProps = state => ({
  characterName: !!state.character ? state.character.searchCharacter : ''
});

const mapDispatchToProps = dispatch =>{
  return {
    fetchCharacters: (page, name) => dispatch(fetchCharacters(page, name))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);