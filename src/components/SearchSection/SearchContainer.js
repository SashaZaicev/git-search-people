import React from 'react';
import Search from "./Search";

class SearchContainer extends React.Component {
    render() {
        return (
            <div>
                <Search {...this.props}/>
            </div>
        );
    }
}
export default SearchContainer