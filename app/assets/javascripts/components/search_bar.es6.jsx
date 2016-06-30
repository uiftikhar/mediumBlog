class SearchBar extends React.Component {
  render () {
    return (
		<form action="/search" accept-charset="UTF-8" method="get">
    		<input name="utf8" type="hidden" value="√" />
    		<button name="button" type="submit"><span className="glyphicon glyphicon-search"></span></button>
    		<input value={this.props.term} placeholder="Search Stories" autoComplete="off" type="search" name="search[q]" id="search_q" />
		</form>
	);
  }
}


