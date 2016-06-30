class SearchContainer extends React.Component {
	

	render () {
		return (
			<div>
				<SearchBar term={this.state.term} />
				<SearchResultsList />
			</div>	
		);
	}
}

