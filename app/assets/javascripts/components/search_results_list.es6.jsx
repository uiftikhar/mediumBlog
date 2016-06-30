class SearchResultsList extends React.Component {
  render () {
    return (
    	<ul className="dropdown-menu" id="autocomplete-items">
    		<li><a href=""><span className="glyphicon glyphicon-search"></span> Search for <strong></strong></a></li>
    		<li><h4 className="autocomplete-heading">Posts</h4></li>
    		<SearchPostListItem />
    		<li><h4 className="autocomplete-heading">People</h4></li>
			<SearchUserListItem />
		</ul>
    );

  }
}

