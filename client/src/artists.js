import React from 'react';

class Artists extends React.Component {
    /* Display number of likes a like/unlike button for one post
     * Reference on forms https://facebook.github.io/react/docs/forms.html
     */
  
    constructor() {
      super();
      this.state = { artists: [{ name: "Kendrick Lamar", img: ""},
                                {name: "J.I.D", img: ""}], count: 0};
    }
  
    
  
    render() {
      const artistList = this.state.artists.map(artist => (
          <div className="list-entry">
              <span className="accents">&bull;&nbsp;&nbsp;&nbsp;</span>
              <span>{arist.name}</span>
          </div>
      ));
    
      return (
        <div>
            {artistList}
        </div>
      );
    }
  }
  
  export default Artists;