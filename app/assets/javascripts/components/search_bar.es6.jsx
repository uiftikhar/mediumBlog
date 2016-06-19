class SearchBar extends React.Component {
  render () {
    return (
    	<form action ="/search" acceptCharset="UTF-8" method="get">
    		<input name="utf-8" type="hidden" value="√"/>
    		<button home="button" type="submit"><span className="glyphicon glyphicon-search"></span></button>
    		<input placeholder="Search Stories" autoComplete="off" type="search" name="search[q]" id="search_q" />
		</form>
	);
  }
}

