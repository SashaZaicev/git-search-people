import React from 'react';
import * as axios from "axios";

class Search extends React.Component {
    state = {
        repos: {},
        avatar_url: '',
    };

    getUser = (e) => {
        e.preventDefault();
        const user = e.target.elements.username.value;
        axios.get(`https://api.github.com/users/${user}`)
            .then(response => {
                    const repos = response.data;
                    this.setState({repos});
                    console.log(repos)
                }
            );
    };

    render() {
         let userName = this.state.repos.name === "" ? "User don't have name" : "Name: " + this.state.repos.name + "; ";
         let userId = this.state.repos.id === "" ? "User don't have id" : "User id: " + this.state.repos.id + "; ";
         let userLocation = this.state.repos.location === "" ? "User don't have location" : "Location: " + this.state.repos.location;
        return (
            <div>
                <form onSubmit={this.getUser}>
                    <label>
                        <span>Поисковичек</span> <br/>
                        <input type="text" name="username" placeholder='GitHub username'/>
                    </label>
                    <button type="submit">Find user</button>
                </form>
                <a href={this.state.repos.html_url}><img src={this.state.repos.avatar_url} alt=""/></a>
                <div>
                    <span>{userName}</span>
                    <span>{userId}</span>
                    <span>{userLocation}</span>
                </div>


                {this.state.repos ?
                    <p>Number of repositories {this.state.repos.avatar_url}</p>
                    : <p>Write another users</p>}

                {/*{this.state.persons.map(person => (*/}
                {/*    <div key={person.id}><a href={person.html_url}>*/}
                {/*        <li>{person.login}</li>*/}
                {/*    </a></div>*/}
                {/*))}*/}
            </div>
        )
    }
}

export default Search;

//     state = {
//         persons: []
//     };
//     handleSubmit = e => {
//         e.preventDefault()
//         const user = {
//             name: this.state.name,
//         };
//         axios
//             .post('https://api.github.com/users/${user}', {user})
//             .then(response => {
//                 console.log(response);
//                 console.log(response.data);
//             })
//     };
//     handleChange = event => {
//         this.setState({name: event.target.value});
//     };
//
//     componentDidMount() {
//         axios.get("https://api.github.com/users").then(response => {
//             const persons = response.data;
//             this.setState({persons})
//         });
//     }
//
//     render() {
//         return (
//             <div>
//                 <form onSubmit={this.handleSubmit}>
//                     <label>
//                         <span>Поисковичек</span> <br/>
//                         <input type="text" name="name" onChange={this.handleChange} placeholder='GitHub username'/>
//                     </label>
//                     <button type="submit">Find user</button>
//                 </form>
//                 {this.state.persons.map(person => (
//                     <div key={person.id}><a href={person.html_url}>
//                         <li>{person.login}</li>
//                     </a></div>
//                 ))}
//             </div>
//         )
//     }
// }
//
// export default Search;
